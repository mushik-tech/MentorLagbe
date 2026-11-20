"use client";

import { deleteTuition } from "@/lib/actions/tuitions";
import { ITuition } from "@/types/tuitions";
import { Pencil, TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const MyTuitionTableActions = ({ tuition }: { tuition: ITuition }) => {
  const router = useRouter();

  const handleDeleteTuition = async () => {
    const data = await deleteTuition(tuition._id);

    if (data.deletedCount) {
      router.refresh();
      toast.success(`${tuition.title} deleted from tuition list`);
    }
  };

  return (
    <>
      <Button
        isIconOnly
        size="sm"
        variant="secondary"
        aria-label={`Edit ${tuition.title}`}
      >
        <Pencil aria-hidden="true" className="h-4 w-4" />
      </Button>

      <AlertDialog>
        <Button
          isIconOnly
          size="sm"
          variant="danger-soft"
          aria-label={`Delete ${tuition.title}`}
        >
          <TrashBin aria-hidden="true" className="h-4 w-4" />
        </Button>{" "}
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete tuition permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>{tuition.title}</strong>
                  and all of its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  slot="close"
                  variant="danger"
                  onClick={handleDeleteTuition}
                >
                  Delete Tuition
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </>
  );
};

export default MyTuitionTableActions;
