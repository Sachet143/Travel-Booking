import axiosInstance from '@/services/axios/clientfetch';

export const deleteServerFile = async (fileId: any) =>
  await axiosInstance.delete(`/hotel/file/${fileId}`)