import axiosInstance from "@/services/axios/clientfetch";

export const clientLogin = async (data: object) =>
  await axiosInstance.post(`/login`, data);

export const clientRegister = async (data: object) =>
  await axiosInstance.post(`/register`, data);

export const googleLogin = async () => await axiosInstance.get(`/auth/google`);

export const editClientData = async (editData: any) =>
  await axiosInstance.post("/user/udpate-profile", editData);
