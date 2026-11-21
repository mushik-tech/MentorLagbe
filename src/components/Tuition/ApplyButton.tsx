"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Label,
  TextArea,
  TextField,
  TimeField,
  toast,
} from "@heroui/react";
import { CircleCheck, Clock, PaperPlane } from "@gravity-ui/icons";
import { useSession } from "@/lib/auth-client";
import { ITuition } from "@/types/tuitions";
import { Envelope } from "@gravity-ui/icons";
import { Modal, Surface } from "@heroui/react";
import { postApplication } from "@/lib/actions/applications";
import { getApplicationsCount } from "@/lib/api/applications";
import { usePathname, useRouter } from "next/navigation";

type ApplyButtonProps = {
  tuition: ITuition;
};

export default function ApplyButton({ tuition }: ApplyButtonProps) {
  const [hasApplied, setHasApplied] = useState(false);

  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const info = Object.fromEntries(formData.entries()) as {
      preferredSchedule: string;
      studentNote: string;
      studentPhone: string;
    };

    const { count } = await getApplicationsCount(session?.user.email as string);

    if (count > 4 && session?.user.subscriptionPlan !== "pro") {
      toast.danger(
        "You’ve reached your 4-tuition Apply limit on the free plan. Please upgrade to continue.",
      );
      router.push(`/payments`);
      return;
    } else {
      const applicationInfo = {
        ...info,
        tuitionId: tuition._id,
        tuitionTitle: tuition.title,
        subject: tuition.subject,
        monthlyFee: tuition.monthlyFee,
        tutorName: tuition.tutorName,
        tutorEmail: tuition.tutorEmail,
        studentName: session?.user.name as string,
        studentEmail: session?.user.email as string,
      };

      const data = await postApplication(applicationInfo);

      if (data.insertedId) {
        setHasApplied(true);
        toast.success("Application sent successfully");
      } else {
        setHasApplied(true);
        toast.danger("Already applied this tuition");
      }
    }
  };

  if (hasApplied) {
    return (
      <div
        role="status"
        className="flex items-center justify-center gap-2 rounded-xl bg-[#e7f4ef] px-4 py-3 text-sm font-semibold text-[#075144]"
      >
        <CircleCheck aria-hidden="true" className="h-4 w-4" />
        Application sent
      </div>
    );
  }

  if (session?.user.role !== "student") {
    return (
      <div
        role="status"
        className="flex items-center justify-center gap-2 rounded-xl bg-[#e7f4ef] px-4 py-3 text-sm font-semibold text-[#075144]"
      >
        <CircleCheck aria-hidden="true" className="h-4 w-4" />
        Sorry, Only Student can apply
      </div>
    );
  }

  return (
    <Modal>
      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={() => {
          if (!session) {
            router.push(`/signin?redirectTo=${pathname}`);
          }
        }}
      >
        <PaperPlane aria-hidden="true" className="h-4 w-4" />
        Apply for this tuition
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Send your application?</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="py-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                  <TextField isRequired name="studentPhone" type="tel">
                    <Label>Phone Number</Label>
                    <Input placeholder="+880 1645-743205" />
                  </TextField>
                  <TimeField isRequired name="preferredSchedule">
                    <Label>Preferred Schedule</Label>
                    <TimeField.Group>
                      <TimeField.Input>
                        {(segment) => <TimeField.Segment segment={segment} />}
                      </TimeField.Input>
                      <TimeField.Suffix>
                        <Clock className="size-4 text-muted" />
                      </TimeField.Suffix>
                    </TimeField.Group>
                  </TimeField>

                  <TextField isRequired name="studentNote">
                    <Label>Learning Note</Label>
                    <TextArea placeholder="Drop your learning queries" />
                  </TextField>

                  <div className="flex gap-4">
                    <Button slot="close" variant="tertiary">
                      Cancel
                    </Button>

                    <Button type="submit" variant="primary">
                      Send application
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
