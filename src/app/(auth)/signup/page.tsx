import SignupForm from "@/components/Auth/SignupForm";
import SocialLogin from "@/components/Auth/SocialLogin";
import { Surface } from "@heroui/react";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center rounded-3xl bg-surface p-6 my-12">
      <Surface className="w-full min-w-95 max-w-lg rounded-3xl p-6 border">
        <SignupForm />

        <SocialLogin />

        <p className="text-center py-2 text-sm">
          Already have an Account?{" "}
          <Link href={"/signin"} className="underline text-blue-500 font-bold">
            Signin
          </Link>
        </p>
      </Surface>
    </div>
  );
};

export default SignupPage;
