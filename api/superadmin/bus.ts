import axiosInstance from '@/services/axios/clientfetch';

export const createBusAdmin = async (data: object) =>
    await axiosInstance.post(`/admin/bus/admin-store`, data)

export const completeBusApplication = async (id: number) =>
    await axiosInstance.post(`/admin/bus/bus-application`, { id })
