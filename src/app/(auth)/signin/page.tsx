"use client";
import { Surface } from "@heroui/react";
import SocialLogin from "@/components/Auth/SocialLogin";
import Link from "next/link";
import SigninForm from "@/components/Auth/SigninForm";

const SigninPage = () => {
  return (
    <div className="flex items-center justify-center rounded-3xl bg-surface p-6 my-12">
      <Surface className="w-full min-w-95 max-w-lg rounded-3xl p-6 border">
        <SigninForm />
        <SocialLogin />

        <p className="text-center py-5 text-sm">
          Don&apos;t have an Account?{" "}
          <Link href={"/signup"} className="underline text-blue-500 font-bold">
            Signup
          </Link>
        </p>
      </Surface>
    </div>
  );
};

export default SigninPage;
