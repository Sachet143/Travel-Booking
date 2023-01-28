import axiosInstance from "@/services/axios/clientfetch";

export const createBusAdmin = async (data: object) =>
  await axiosInstance.post(`/admin/bus/admin-store`, data);

export const completeBusApplication = async (id: number) =>
  await axiosInstance.post(`/admin/bus/bus-application`, { id });

export const addBusCategory = async (data: any) =>
  await axiosInstance.post(`/admin/bus/bus-category-store`, data);

export const deleteBusCategory = async (id: any) =>
  await axiosInstance.delete(`admin/bus/bus-category-delete/${id}`);
