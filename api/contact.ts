import axiosInstance from '@/services/axios/clientfetch';

export const hotelApplication = async (data: any) =>
  await axiosInstance.post(`/hotel-application`, data)
