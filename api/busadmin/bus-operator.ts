import axiosInstance from '@/services/axios/clientfetch';

export const createBusOperator = async (data: object) =>
  await axiosInstance.post(`/bus-operator/store-update`, data)

export const updateBusOperator = async (data: object) =>
  await axiosInstance.post(`/bus-operator/store-update`, data)
