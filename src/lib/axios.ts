import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fb69-41-90-44-113.ngrok-free.app/sendmoney",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  withCredentials: true,
});

// Attach token to API requests
// apiClient.interceptors.request.use((config) => {
//   const token = document.cookie
//     .split("; ")
//     .find((row) => row.startsWith("token="))
//     ?.split("=")[1];

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export default apiClient;
