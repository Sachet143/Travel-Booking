import axiosInstance from '@/services/axios/clientfetch';

export const createHotelAdmin = async (data: object) =>
    await axiosInstance.post(`/admin/hotel/admin-store`, data)

export const completeHotelApplication = async (id: number) =>
    await axiosInstance.post(`/admin/hotel/hotel-application`, { id })
