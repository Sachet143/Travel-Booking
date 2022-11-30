import axiosInstance from '@/services/axios/clientfetch';

export const createRoomFacility = async (data: object) =>
  await axiosInstance.post(`/admin/room-feature/store`, data)

export const updateRoomFacility = async (id: number, data: object) =>
  await axiosInstance.post(`/admin/room-feature/${id}/update`, data)

export const deleteRoomFacility = async (id: number) =>
  await axiosInstance.post(`/admin/room-feature/delete/${id}`)
