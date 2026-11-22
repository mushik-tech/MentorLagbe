"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  NumberField,
  Select,
  Spinner,
  Surface,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import { CloudArrowUpIn, Pencil, TrashBin } from "@gravity-ui/icons";
import { useSession } from "@/lib/auth-client";
import { updateTuition } from "@/lib/actions/tuitions";
import { useRouter } from "next/navigation";
import { ITuition } from "@/types/tuitions";

const MAX_BANNER_BYTES = 5 * 1024 * 1024;

const ACCEPTED_BANNER_TYPES = ["image/jpeg", "image/png", "image/webp"];

const classLevels = [
  { id: "class-1-5", label: "Class 1–5" },
  { id: "class-6-7", label: "Class 6–7" },
  { id: "class-8", label: "Class 8 (JSC)" },
  { id: "ssc", label: "Class 9–10 (SSC)" },
  { id: "hsc", label: "Class 11–12 (HSC)" },
  { id: "admission", label: "Admission test" },
  { id: "undergraduate", label: "Undergraduate" },
  { id: "o-level", label: "O Level" },
  { id: "other", label: "Other" },
];

const modes = [
  { id: "online", label: "Online" },
  { id: "offline", label: "Offline (in person)" },
];

function formatFileSize(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default function UpdateTuitionForm({
  tuition,
  onSuccess,
}: {
  tuition: ITuition;
  onSuccess: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadButtonRef = useRef<HTMLButtonElement>(null);
  const bannerUrlRef = useRef<string | null>(null);

  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const router = useRouter();

  // Newly selected image
  const [banner, setBanner] = useState<{
    file: File;
    url: string;
  } | null>(null);

  const [bannerRemoved, setBannerRemoved] = useState(false);

  const [bannerError, setBannerError] = useState<string | null>(null);

  const previewUrl = banner?.url ?? (bannerRemoved ? null : tuition.banner);

  useEffect(() => {
    return () => {
      if (bannerUrlRef.current) {
        URL.revokeObjectURL(bannerUrlRef.current);
        bannerUrlRef.current = null;
      }
    };
  }, []);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const clearBanner = () => {
    if (bannerUrlRef.current) {
      URL.revokeObjectURL(bannerUrlRef.current);
      bannerUrlRef.current = null;
    }

    setBanner(null);
    setBannerRemoved(true);
    setBannerError(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleBannerChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    event.target.value = "";

    if (!file) return;

    if (!ACCEPTED_BANNER_TYPES.includes(file.type)) {
      setBannerError("Choose a PNG, JPG, or WebP image.");
      return;
    }

    if (file.size > MAX_BANNER_BYTES) {
      setBannerError("That image is larger than 5 MB. Choose a smaller file.");
      return;
    }

    setLoading(true);
    setBannerError(null);

    try {
      const formData = new FormData();

      formData.append("image", file);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (!res.ok) {
        throw new Error("Image upload failed.");
      }

      const result = await res.json();

      if (!result.success || !result.data?.url) {
        throw new Error("Could not get image URL.");
      }

      const url = result.data.url;

      setBanner({
        file,
        url,
      });

      setBannerRemoved(false);
      setBannerError(null);
    } catch (error) {
      console.error(error);

      setBannerError("Failed to upload image. Please try again.");
      toast.danger("Failed to upload banner image.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    if (!previewUrl) {
      setBannerError("Add a banner image for your tuition.");
      uploadButtonRef.current?.focus();

      toast.danger("Your tuition still needs a banner image.");

      return;
    }

    const tuitionData = Object.fromEntries(formData.entries()) as {
      title: string;
      subject: string;
      classLevel: string;
      mode: "online" | "offline";
      location: string;
      monthlyFee: string;
      daysPerWeek: string;
      description: string;
      banner: string;
      tutorName: string;
      tutorEmail: string;
    };

    tuitionData.banner = banner?.url ?? tuition.banner;

    tuitionData.tutorName = session?.user.name as string;
    tuitionData.tutorEmail = session?.user.email as string;

    setLoading(true);

    try {
      const data = await updateTuition(tuition._id, tuitionData);

      if (data?.modifiedCount > 0) {
        toast.success("Tuition updated successfully!");
        router.refresh();
        onSuccess();
      }
    } catch (error) {
      toast.danger("Failed to update tuition.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full space-y-4">
      <Form onSubmit={handleSubmit} className="space-y-4">
        <Surface>
          <div>
            <h2 className="text-base font-bold tracking-tight text-[#04382f]">
              Update Tuition
            </h2>

            <p className="mt-0.5 text-xs text-neutral-500">
              Edit the details students see for this batch.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3">
            {/* Title */}
            <TextField
              defaultValue={tuition.title}
              isRequired
              fullWidth
              name="title"
              validate={(value) => {
                const title = value.trim();

                if (!title) {
                  return "Give your tuition a title.";
                }

                if (title.length < 6) {
                  return "Use at least 8 characters so students know what it is.";
                }

                if (title.length > 90) {
                  return "Keep the title under 90 characters.";
                }

                return null;
              }}
            >
              <Label>Tuition title</Label>

              <Input placeholder="e.g. HSC Physics batch — English version" />

              <FieldError />
            </TextField>

            {/* Subject */}
            <TextField
              defaultValue={tuition.subject}
              isRequired
              fullWidth
              name="subject"
              validate={(value) => {
                const subject = value.trim();

                if (!subject) {
                  return "Add the subject you teach.";
                }

                if (subject.length < 2) {
                  return "The subject name is too short.";
                }

                return null;
              }}
            >
              <Label>Subject</Label>

              <Input placeholder="e.g. Physics" />

              <FieldError />
            </TextField>

            {/* Class level */}
            <Select
              defaultValue={tuition.classLevel}
              isRequired
              fullWidth
              name="classLevel"
              placeholder="Select a class level"
            >
              <Label>Class level</Label>

              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  {classLevels.map((level) => (
                    <ListBox.Item
                      key={level.id}
                      id={level.id}
                      textValue={level.label}
                    >
                      {level.label}

                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>

              <FieldError />
            </Select>

            {/* Mode */}
            <Select
              defaultValue={tuition.mode}
              isRequired
              fullWidth
              name="mode"
              placeholder="How will you teach?"
              validate={(value) => {
                if (!value) {
                  return "Choose how you will teach this batch.";
                }

                return null;
              }}
            >
              <Label>Mode</Label>

              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  {modes.map((option) => (
                    <ListBox.Item
                      key={option.id}
                      id={option.id}
                      textValue={option.label}
                    >
                      {option.label}

                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>

              <FieldError />
            </Select>

            {/* Location */}
            <TextField
              defaultValue={tuition.location}
              isRequired
              fullWidth
              name="location"
              validate={(value) => {
                if (!value.trim()) {
                  return "Add an area or say online.";
                }

                return null;
              }}
            >
              <Label>Location</Label>

              <Input placeholder="e.g. Dhanmondi, Dhaka" />

              <FieldError />
            </TextField>

            {/* Monthly fee */}
            <NumberField
              defaultValue={Number(tuition.monthlyFee)}
              isRequired
              fullWidth
              name="monthlyFee"
              minValue={500}
              maxValue={200000}
              step={500}
              validate={(value) => {
                if (value == null) {
                  return "Set a monthly fee.";
                }

                if (value < 500) {
                  return "The monthly fee must be at least ৳500.";
                }

                if (value > 200000) {
                  return "Keep the fee under ৳200,000.";
                }

                return null;
              }}
            >
              <Label>Monthly fee (৳)</Label>

              <NumberField.Group>
                <NumberField.DecrementButton aria-label="Decrease monthly fee" />

                <NumberField.Input placeholder="e.g. 5000" />

                <NumberField.IncrementButton aria-label="Increase monthly fee" />
              </NumberField.Group>

              <FieldError />
            </NumberField>

            {/* Days per week */}
            <NumberField
              defaultValue={Number(tuition.daysPerWeek)}
              isRequired
              fullWidth
              name="daysPerWeek"
              minValue={1}
              maxValue={7}
              step={1}
              validate={(value) => {
                if (value == null) {
                  return "Choose how many days you will take classes.";
                }

                if (value < 1 || value > 7) {
                  return "Choose between 1 and 7 days per week.";
                }

                return null;
              }}
            >
              <Label>Days per week</Label>

              <NumberField.Group>
                <NumberField.DecrementButton aria-label="Decrease days per week" />

                <NumberField.Input placeholder="e.g. 3" />

                <NumberField.IncrementButton aria-label="Increase days per week" />
              </NumberField.Group>

              <FieldError />
            </NumberField>
          </div>

          {/* Description */}
          <div className="mt-4">
            <TextField
              defaultValue={tuition.description}
              isRequired
              fullWidth
              name="description"
              validate={(value) => {
                const description = value.trim();

                if (!description) {
                  return "Describe the tuition.";
                }

                if (description.length < 40) {
                  return "Write at least 40 characters so students know what to expect.";
                }

                if (description.length > 800) {
                  return "Keep the description under 800 characters.";
                }

                return null;
              }}
            >
              <Label>Description</Label>

              <TextArea
                rows={4}
                placeholder="Cover the syllabus, batch size, class timing, and anything students should bring."
              />

              <Description>
                Mention the syllabus, batch size, timings, and any materials.
              </Description>

              <FieldError />
            </TextField>
          </div>

          {/* Banner Image */}
          <div className="mt-4">
            <label htmlFor="tuition-banner" className="text-sm font-medium">
              Banner image
            </label>

            <input
              ref={fileInputRef}
              id="tuition-banner"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              tabIndex={-1}
              className="sr-only"
              onChange={handleBannerChange}
            />

            {loading ? (
              <div className="mt-3 flex items-center justify-center py-8">
                <Spinner />
              </div>
            ) : previewUrl ? (
              <div className="mt-2 space-y-2">
                {/* Preview */}
                <div className="relative aspect-16/7 w-full overflow-hidden rounded-xl bg-[#e7f4ef] ring-1 ring-black/5">
                  <Image
                    src={previewUrl}
                    alt="Tuition banner preview"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>

                {/* Image details */}
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-black/5 bg-[#f4f9f7] px-3 py-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#04382f]">
                      {banner?.file.name ?? "Current banner"}
                    </p>

                    <p className="text-[11px] text-neutral-500">
                      {banner
                        ? `${formatFileSize(banner.file.size)} · New image`
                        : "Existing banner"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      ref={uploadButtonRef}
                      type="button"
                      size="sm"
                      variant="secondary"
                      onPress={openFilePicker}
                    >
                      <Pencil aria-hidden="true" className="h-3.5 w-3.5" />
                      Replace
                    </Button>

                    <Button
                      type="button"
                      size="sm"
                      variant="danger-soft"
                      onPress={clearBanner}
                    >
                      <TrashBin aria-hidden="true" className="h-3.5 w-3.5" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              /* Empty state */
              <button
                ref={uploadButtonRef}
                type="button"
                onClick={openFilePicker}
                className="mt-2 flex w-full flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-[#04382f]/15 bg-[#e7f4ef]/45 px-3 py-6 text-center transition hover:border-[#075144]/40 hover:bg-[#e7f4ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#075144]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#075144] shadow-sm">
                  <CloudArrowUpIn aria-hidden="true" className="h-5 w-5" />
                </span>

                <span className="text-sm font-semibold text-[#04382f]">
                  Upload a banner image
                </span>

                <span className="text-xs text-neutral-500">
                  PNG, JPG, or WebP · up to 5 MB
                </span>
              </button>
            )}

            {bannerError && (
              <p role="alert" className="mt-2 text-xs font-medium text-danger">
                {bannerError}
              </p>
            )}
          </div>

          {/* Form actions */}
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button
              slot="close"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              isDisabled={loading}
              className="w-full bg-[#04382f] text-white shadow-[0_18px_30px_-22px_rgba(4,56,47,0.9)] hover:bg-[#075144] sm:w-auto"
            >
              Update tuition
            </Button>
          </div>
        </Surface>
      </Form>
    </div>
  );
}
