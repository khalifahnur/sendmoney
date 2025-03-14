import { makePayment } from "@/lib/api";
import { ErrorResponse } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";

type paymentParams = {
  phone: string;
  amount: number;
  email: string;
};

type paymentResponse = {
  status: boolean;
  message?: string;
  data?: {
    reference: string;
    amount: number;
    currency: string;
    status: string;
  };
};

export function usePaymentHook() {
  return useMutation<paymentResponse, ErrorResponse, paymentParams>({
    mutationFn: makePayment,
    onSuccess: () => {
        console.log("success")
    },
    onError: (error) => {
      // Handle errors
      console.error("Failed to initiate payment:", error.message);
    },
  });
}
