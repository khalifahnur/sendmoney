export interface AuthData {
  firstname?: string;
  lastname?:string;
  email: string;
  phoneNumber?: string;
  password: string;
}

export interface AuthLoginResponse {
  token?: string;
  user: {
    userId?: string;
    name?: string;
    email?: string;
    phoneNumber?: string;
  };
}

export interface AuthSignUpResponse{
message:string;
}

export interface ErrorResponse {
  message: string;
  statusCode?: number;
  details?: Record<string, unknown>;
}

export interface paymentVariables {
  phone: string;
  amount: number;
  email: string;
}
