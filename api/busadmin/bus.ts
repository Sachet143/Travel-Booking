import axiosInstance from '@/services/axios/clientfetch';

export const createBus = async (data: object) =>
  await axiosInstance.post(`/bus-operator/store-update`, data)

export const updateBus = async (data: object) =>
  await axiosInstance.post(`/bus-operator/store-update`, data)
