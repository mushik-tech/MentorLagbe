"use client";

import { updateTuitionStatus } from "@/lib/actions/tuitions";
import { ITuition, TStatus } from "@/types/tuitions";
import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const TuitionTableRowAction = ({ tuition }: { tuition: ITuition }) => {
  console.log(tuition);
  const router = useRouter();

  const handleUpdateStatus = async (status: TStatus) => {
    const data = await updateTuitionStatus(tuition._id, status);

    if (data.modifiedCount > 0) {
      router.refresh();
      toast.success(`${status} the ${tuition.title}`);
    }
  };

  return (
    <>
      <AlertDialog>
        <Button
          size="sm"
          variant="secondary"
          isDisabled={tuition.approvalStatus === "approved"}
          aria-label={`Approve ${tuition.title}`}
        >
          Approve
        </Button>{" "}
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="accent" />
                <AlertDialog.Heading>
                  Approve this tuition <b>{tuition.title}</b>
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  slot="close"
                  variant="primary"
                  onClick={() => handleUpdateStatus("approved")}
                >
                  Yes, Approve
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>

      <AlertDialog>
        <Button
          size="sm"
          variant="danger"
          aria-label={`Reject ${tuition.title}`}
          isDisabled={tuition.approvalStatus === "rejected"}
        >
          Reject
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Reject this tuition <b>{tuition.title}</b>
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  slot="close"
                  variant="danger"
                  onClick={() => handleUpdateStatus("rejected")}
                >
                  Yes, Reject
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </>
  );
};

export default TuitionTableRowAction;
