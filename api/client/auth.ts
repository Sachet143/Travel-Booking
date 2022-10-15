import axiosInstance from "@/services/axios/clientfetch";

export const clientLogin = async (data: object) =>
  await axiosInstance.post(`/login`, data);

export const clientRegister = async (data: object) =>
  await axiosInstance.post(`/register`, data);
