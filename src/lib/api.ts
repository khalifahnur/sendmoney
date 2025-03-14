import { AuthData, AuthLoginResponse, AuthSignUpResponse, paymentVariables } from "@/types/auth";
import apiClient from "./axios";
import { AxiosError } from "axios";

export const loginAdmin = async (
  data: AuthData
): Promise<AuthLoginResponse> => {
  try {
    const response = await apiClient.post<AuthLoginResponse>(
      "/auth/admin/SignIn",
      data,
      { withCredentials: true }
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred");
  }
};

export const signUpAdmin = async (
  data: AuthData
): Promise<AuthSignUpResponse> => {
  try {
    const response = await apiClient.post<AuthSignUpResponse>(
      "/auth/admin/SignUp",
      data
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    if (axiosError.response) {
      console.error("Sign-up error details:", axiosError.response);
      // Show a more specific error message
      const errorMessage =
        axiosError.response.data?.message || "An error occurred during sign-up.";
      throw new Error(errorMessage);
    } else {
      console.error("Network error or no response:", axiosError);
      throw new Error("Network error or no response from server.");
    }
  }
};


export const makePayment = async ({ phone, amount, email }: paymentVariables) => {
  try {
    const response = await apiClient.post("/payment/initiate-payment", {
      phone,
      amount,
      email,
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error initiating payment:", error.message);
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred while making payment.");
  }
};
