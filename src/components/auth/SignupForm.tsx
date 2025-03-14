"use client";

import type React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useSignUp } from "@/hook/authhook/authhooks";

// Validation schema
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(
      /^\+2547\d{8}$/,
      "Phone number must be in format +2547XXXXXXXX (e.g., +254712345678)"
    )
    .required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const signUpMutation = useSignUp();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/">
              <span className="text-primary">Cash</span>Flow
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="/signin"
              className="text-sm font-medium hover:underline"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">
              Create an account
            </CardTitle>
            <CardDescription>
              Enter your information to create your account
            </CardDescription>
          </CardHeader>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              password: "",
              terms: false,
            }}
            validationSchema={SignUpSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await signUpMutation.mutateAsync({
                  email: values.email,
                  password: values.password,
                  firstname: values.firstName,
                  lastname: values.lastName,
                  phoneNumber: values.phoneNumber,
                });
              } catch (error) {
                console.error("Signup failed:", error);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Field
                        name="firstName"
                        as={Input}
                        placeholder="John"
                        required
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Field
                        name="lastName"
                        as={Input}
                        placeholder="Doe"
                        required
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Field
                      name="email"
                      as={Input}
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Field
                      name="phoneNumber"
                      as={Input}
                      type="tel"
                      placeholder="(254) 7456-7890"
                      required
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Field
                        name="password"
                        as={Input}
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </Button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Field name="terms">
                      {({ field }: FieldProps) => (
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={(checked) =>
                            field.onChange({
                              target: { name: field.name, value: checked },
                            })
                          } // Update Formik state
                        />
                      )}
                    </Field>
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-primary hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  <ErrorMessage
                    name="terms"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                  {signUpMutation.isError && (
                    <div className="text-red-600 text-sm">
                      {signUpMutation.error?.message ||
                        "Signup failed. Please try again."}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting || signUpMutation.isPending}
                  >
                    {signUpMutation.isPending
                      ? "Creating account..."
                      : "Create account"}
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link
                      href="/signin"
                      className="text-primary hover:underline"
                    >
                      Login
                    </Link>
                  </div>
                </CardFooter>
              </Form>
            )}
          </Formik>
        </Card>
      </main>
    </div>
  );
}
