import axiosInstance from '@/services/axios/clientfetch';

export const createHotelFacility = async (data: object) =>
  await axiosInstance.post(`/admin/feature/store`, data)

export const updateHotelFacility = async (id: number, data: object) =>
  await axiosInstance.post(`/admin/feature/${id}/update`, data)

export const deleteHotelFacility = async (id: number) =>
  await axiosInstance.post(`/admin/feature/delete/${id}`)
