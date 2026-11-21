"use client";

import { deleteApplication } from "@/lib/actions/applications";
import { IApplication } from "@/types/applications";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const MyApplicationsTableActions = ({
  application,
}: {
  application: IApplication;
}) => {
  const router = useRouter();

  const handleDeleteTuition = async () => {
    const data = await deleteApplication(application._id);
    if (data.deletedCount) {
      router.refresh();
      toast.success(`${application.tuitionTitle} deleted from tuition list`);
    }
  };


  return (
    <>
      <AlertDialog>
        <Button
          isDisabled={application.status !== "pending"}
          size="sm"
          variant="danger-soft"
          aria-label={`Delete ${application.tuitionTitle}`}
        >
          <TrashBin aria-hidden="true" className="h-4 w-4" />
          Cancel
        </Button>{" "}
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Cancel application?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will cancel <strong>{application.tuitionTitle}</strong>{" "}
                  application and all of its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Close
                </Button>
                <Button
                  slot="close"
                  variant="danger"
                  onClick={handleDeleteTuition}
                >
                  Cancel Application
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </>
  );
};

export default MyApplicationsTableActions;
