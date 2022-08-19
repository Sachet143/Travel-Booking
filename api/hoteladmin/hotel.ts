import axiosInstance from '@/services/axios/clientfetch';

export const createHotel = async (data: object) =>
  await axiosInstance.post(`/hotel/store-update`, data)
