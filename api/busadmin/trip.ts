import axiosInstance from '@/services/axios/clientfetch';

export const createTrip = async (data: object) =>
  await axiosInstance.post(`/bus/trip-store`, data)

export const updateTrip = async (id: number, data: object) =>
  await axiosInstance.post(`/bus/trip-update/${id}`, data)

export const deleteTrip = async (id: number) =>
  await axiosInstance.delete(`/bus/trip-destroy/${id}`)
