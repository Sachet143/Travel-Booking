import axiosInstance from '@/services/axios/clientfetch';

export const createHotelRoom = async (data: object) =>
  await axiosInstance.post(`/hotel/store-room`, data)

export const updateHotelRoom = async (id: any, data: object) =>
  await axiosInstance.post(`/hotel/store-room/${id}`, data)

export const deleteHotelRoom = async (id: number) =>
  await axiosInstance.delete(`/hotel/room/${id}`)

