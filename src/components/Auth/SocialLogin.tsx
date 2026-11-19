import { Button, Separator } from "@heroui/react";
import { Icon } from "@iconify/react";

const SocialLogin = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-4 pt-6 pb-4 w-50 mx-auto text-gray-400">
        <Separator />
        <h1 className="text-sm">OR</h1>
        <Separator />
      </div>

      <Button className="w-full" variant="tertiary">
        <Icon icon="devicon:google" />
        Continue with Google
      </Button>
    </>
  );
};

export default SocialLogin;
