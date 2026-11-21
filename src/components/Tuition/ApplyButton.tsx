"use client";

import { useState } from "react";
import { AlertDialog, Button, toast } from "@heroui/react";
import { CircleCheck, PaperPlane } from "@gravity-ui/icons";
import { useSession } from "@/lib/auth-client";

type ApplyButtonProps = {
  tuitionTitle: string;
};

export default function ApplyButton({ tuitionTitle }: ApplyButtonProps) {
  const [hasApplied, setHasApplied] = useState(false);

  const { data: session } = useSession();

  if (session?.user.role !== "student") {
  }

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

  return (
    <AlertDialog>
      <Button
        variant="primary"
        size="lg"
        fullWidth
        isDisabled={session?.user.role !== "student"}
      >
        <PaperPlane aria-hidden="true" className="h-4 w-4" />
        {session?.user.role === "student" ? "Apply for this tuition" : "Sorry, Only Student can apply"}
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-110">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="accent" />
              <AlertDialog.Heading>Send your application?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                You are about to apply for <strong>{tuitionTitle}</strong>. The
                tuition poster will see your profile and can reach out to you
                with the next steps.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                slot="close"
                variant="primary"
                onClick={() => {
                  setHasApplied(true);
                  toast.success("Application sent successfully");
                }}
              >
                Send application
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
