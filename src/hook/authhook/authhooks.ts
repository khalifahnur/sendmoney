import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AuthData, AuthLoginResponse, AuthSignUpResponse, ErrorResponse } from "@/types/auth";
import { loginAdmin, signUpAdmin } from "@/lib/api";
import { useRouter } from "next/navigation";

export function useLogin(): UseMutationResult<
  AuthLoginResponse,
  ErrorResponse,
  AuthData
> {
  const router = useRouter();
  
  return useMutation<AuthLoginResponse, ErrorResponse, AuthData>({
    mutationFn: loginAdmin,
    onSuccess: (data: AuthLoginResponse) => {
      console.log("Login successful:", data);
      // if (data.token) {
      //   localStorage.setItem("authToken", data.token);
      // }
      if (data.token) {
        //document.cookie = `token=${data.token}; path=/; max-age=${24 * 60 * 60}; secure=${process.env.NODE_ENV === 'production'}; sameSite=${process.env.NODE_ENV === 'production' ? 'none' : 'lax'}`;
        localStorage.setItem("authToken", data.token); // Optional
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      router.replace('/dashboard');
    },
    onError: (error: ErrorResponse) => {
      console.error(
        `Login error (${error.statusCode || "Unknown"}): ${error.message}`
      );
      alert(error.message || "An unexpected error occurred. Please try again."); // Display error to user
      if (error.details) {
        console.error("Additional error details:", error.details);
      }
    },
  });
}

export function useSignUp(): UseMutationResult<
  AuthSignUpResponse,
  ErrorResponse,
  AuthData
> {
  const router = useRouter();
  return useMutation<AuthSignUpResponse, ErrorResponse, AuthData>({
    mutationFn: signUpAdmin,
    onSuccess: () => {
      console.log("Sign-up successful:");
      router.replace('/signin')
    },
    onError: (error: ErrorResponse) => {
      console.error("Sign-up error:", error.message);
    },
  });
}