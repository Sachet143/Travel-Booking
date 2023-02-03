import axiosInstance from '@/services/axios/clientfetch';

export const createBus = async (data: object) =>
  await axiosInstance.post(`/bus/bus-store`, data)

export const updateBus = async (id: number, data: object) =>
  await axiosInstance.post(`/bus/bus-update/${id}`, data)

export const deleteBus = async (id: number) =>
  await axiosInstance.delete(`/bus/bus-destroy/${id}`)
