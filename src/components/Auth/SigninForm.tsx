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
} from "@heroui/react";

const SigninForm = () => {
  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert("Form submitted successfully!");
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
