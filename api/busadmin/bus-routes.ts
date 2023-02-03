import axiosInstance from '@/services/axios/clientfetch';

export const createBusRoute = async (data: object) =>
  await axiosInstance.post(`/bus/route-store`, data)

export const updateBusRoute = async (id: any, data: object) =>
  await axiosInstance.post(`/bus/route-update/${id}`, data)

export const deleteBusRoute = async (id: number) =>
  await axiosInstance.delete(`/bus/route-destroy/${id}`)
