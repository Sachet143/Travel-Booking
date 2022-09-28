import axiosInstance from '@/services/axios/clientfetch';

export const uploadImage = async (files: any) =>
  await axiosInstance.post(`/hotel/store-hotel-image`, files)