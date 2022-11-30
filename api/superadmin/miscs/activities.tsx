import axiosInstance from '@/services/axios/clientfetch';

export const createHotelActivities = async (data: object) =>
  await axiosInstance.post(`/admin/activity/store`, data)

export const updateHotelActivities = async (id: number, data: object) =>
  await axiosInstance.post(`/admin/activity/${id}/update`, data)

export const deleteHotelActivity = async (id: number) =>
  await axiosInstance.post(`/admin/activity/delete/${id}`)
