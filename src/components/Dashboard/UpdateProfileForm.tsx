"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type SyntheticEvent,
} from "react";
import {
  Avatar,
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Spinner,
  Surface,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import { CloudArrowUpIn, TrashBin } from "@gravity-ui/icons";
import { useSession } from "@/lib/auth-client";
import { updateUserProfile } from "@/lib/actions/users";
import { useRouter } from "next/navigation";

const MAX_AVATAR_BYTES = 5 * 1024 * 1024;
const ACCEPTED_AVATAR_TYPES = ["image/jpeg", "image/png", "image/webp"];

const DEMO_AVATAR = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
    <rect width="160" height="160" fill="#d7eee6"/>
    <circle cx="80" cy="62" r="30" fill="#5b9b86"/>
    <path d="M22 152c0-32 26-58 58-58s58 26 58 58z" fill="#5b9b86"/>
  </svg>`,
)}`;

const fieldSurface =
  "rounded-3xl border border-black/5 p-5 shadow-[0_30px_70px_-60px_rgba(4,56,47,0.7)] sm:p-6 lg:p-7";

function formatFileSize(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default function UpdateProfileForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const avatarUrlRef = useRef<string | null>(null);
  const { data: session, refetch } = useSession();

  const router = useRouter();

  console.log(session?.user);

  const [avatar, setAvatar] = useState<{ file: File; url: string } | null>(
    null,
  );
  const [avatarError, setAvatarError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (avatarUrlRef.current) {
        URL.revokeObjectURL(avatarUrlRef.current);
        avatarUrlRef.current = null;
      }
    };
  }, []);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) {
      return;
    }

    if (!ACCEPTED_AVATAR_TYPES.includes(file.type)) {
      setAvatarError("Choose a PNG, JPG, or WebP image.");
      return;
    }

    if (file.size > MAX_AVATAR_BYTES) {
      setAvatarError("That image is larger than 5 MB. Choose a smaller file.");
      return;
    }

    if (avatarUrlRef.current) {
      URL.revokeObjectURL(avatarUrlRef.current);
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );

    const result = await res.json();

    const url = result.data.url;

    avatarUrlRef.current = url;
    setAvatar({ file, url });
    setAvatarError(null);

    setLoading(false);
  };

  const removeAvatar = () => {
    if (avatarUrlRef.current) {
      URL.revokeObjectURL(avatarUrlRef.current);
      avatarUrlRef.current = null;
    }

    setAvatar(null);
    setAvatarError(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const profile = Object.fromEntries(
      [...formData.entries()].filter(([_, value]) => value !== ""),
    ) as {
      name?: string;
      phone?: string;
      bio?: string;
      image?: string;
    };

    if (avatar?.url) {
      profile.image = avatar.url;
    }

    if (!profile.name && !profile.bio && !profile.image && !profile.phone) {
      toast.danger("Please Provide information for update");
      return;
    }

    const data = await updateUserProfile(session?.user.id as string, profile);

    if (data.modifiedCount > 0) {
      toast.success("Profile updated successfull");
      form.reset();
      refetch();
      router.refresh();
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl pb-10">
      <Form onSubmit={handleSubmit} className="space-y-5">
        <Surface className={fieldSurface}>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-[#04382f]">
              Personal information
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Update the details that other people see on your profile.
            </p>
          </div>

          <div className="mt-5">
            <label htmlFor="profile-picture" className="text-sm font-medium">
              Profile picture
            </label>

            <input
              ref={fileInputRef}
              id="profile-picture"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              tabIndex={-1}
              className="sr-only"
              onChange={handleAvatarChange}
            />

            <div className="mt-2 flex flex-wrap items-center gap-4 rounded-2xl border border-black/5 bg-[#f4f9f7] px-4 py-3">
              <Avatar size="lg" color="accent" className="h-16 w-16 shrink-0">
                <Avatar.Image
                  alt="Profile picture preview"
                  src={avatar?.url ?? DEMO_AVATAR}
                />
                <Avatar.Fallback className="text-lg font-semibold">
                  RA
                </Avatar.Fallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[#04382f]">
                  {loading ? (
                    <Spinner />
                  ) : avatar ? (
                    avatar.file.name
                  ) : (
                    "demo-profile.png"
                  )}
                </p>
                <p className="text-[11px] text-neutral-500">
                  {avatar
                    ? `${formatFileSize(avatar.file.size)} · Ready to upload`
                    : "Demo image shown · PNG, JPG, or WebP up to 5 MB"}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  onPress={openFilePicker}
                >
                  <CloudArrowUpIn aria-hidden="true" className="h-3.5 w-3.5" />
                  Upload
                </Button>
                {avatar && (
                  <Button
                    type="button"
                    size="sm"
                    variant="danger-soft"
                    onPress={removeAvatar}
                  >
                    <TrashBin aria-hidden="true" className="h-3.5 w-3.5" />
                    Remove
                  </Button>
                )}
              </div>
            </div>

            {avatarError && (
              <p role="alert" className="mt-2 text-xs font-medium text-danger">
                {avatarError}
              </p>
            )}
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TextField
              fullWidth
              name="name"
              validate={(value) => {
                const name = value.trim();

                if (name && name.length < 3) {
                  return "Name must be at least 3 characters.";
                }

                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="e.g. Rahim Ahmed" variant="secondary" />
              <FieldError />
            </TextField>

            <TextField
              fullWidth
              type="tel"
              name="phone"
              validate={(value) => {
                const phone = value.trim();

                if (phone && !/^[0-9+()\s-]{7,20}$/.test(phone)) {
                  return "Enter a valid phone number.";
                }

                return null;
              }}
            >
              <Label>Phone</Label>
              <Input placeholder="e.g. +880 1712 345678" variant="secondary" />
              <FieldError />
            </TextField>
          </div>

          <div className="mt-5">
            <TextField
              fullWidth
              name="bio"
              validate={(value) => {
                if (value.trim().length > 500) {
                  return "Keep your bio under 500 characters.";
                }

                return null;
              }}
            >
              <Label>Bio</Label>
              <TextArea
                rows={5}
                placeholder="Tell people a little about yourself, your experience, and what you teach."
                variant="secondary"
              />
              <Description>
                A short introduction helps students and parents know you better.
              </Description>
              <FieldError />
            </TextField>
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button
              type="submit"
              className="w-full bg-[#04382f] text-white shadow-[0_18px_30px_-22px_rgba(4,56,47,0.9)] hover:bg-[#075144] sm:w-auto"
            >
              Save changes
            </Button>
          </div>
        </Surface>
      </Form>
    </div>
  );
}
