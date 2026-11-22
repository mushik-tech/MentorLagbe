"use client";
import React from "react";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SigninForm = () => {
  const router = useRouter();

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userInfo = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await signIn.email({
      email: userInfo.email,
      password: userInfo.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.danger(`Signin failed: ${error.message}`);
      return;
    }

    toast.success("Signin successful");
  };
  return (
    <Form onSubmit={onSubmit}>
      <Fieldset className="w-full">
        <Fieldset.Legend>Please Signin</Fieldset.Legend>
        <Description>Provide your account information.</Description>

        <Fieldset.Group>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" variant="secondary" />
            <FieldError />
          </TextField>

          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" variant="secondary" />
          </TextField>
        </Fieldset.Group>

        <Fieldset.Actions>
          <Button type="submit" className="w-full">
            Signin
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
};

export default SigninForm;
