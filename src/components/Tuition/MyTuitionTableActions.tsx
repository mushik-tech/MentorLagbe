"use client";

import UpdateTuitionForm from "@/components/Tuition/UpdateTuitionForm";
import { deleteTuition } from "@/lib/actions/tuitions";
import { ITuition } from "@/types/tuitions";
import { Envelope, Pencil, TrashBin } from "@gravity-ui/icons";
import {
  AlertDialog,
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  toast,
  useOverlayState,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const MyTuitionTableActions = ({ tuition }: { tuition: ITuition }) => {
  const modalState = useOverlayState();

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
      <Modal state={modalState}>
        <Button
          isIconOnly
          size="sm"
          variant="secondary"
          aria-label={`Edit ${tuition.title}`}
          onPress={modalState.open}
        >
          <Pencil aria-hidden="true" className="h-4 w-4" />
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-lg">
              <Modal.CloseTrigger />
              <Modal.Body>
                <Surface variant="default">
                  <UpdateTuitionForm
                    tuition={tuition}
                    onSuccess={modalState.close}
                  />
                </Surface>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>

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
