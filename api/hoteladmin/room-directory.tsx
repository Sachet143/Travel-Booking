import axiosInstance from "@/services/axios/clientfetch";

export const createHotelRoomDirectory = async (data: object) =>
  await axiosInstance.post(`/hotel/store-room-directory`, data);

export const updateHotelRoomDirectory = async (id: any, data: object) =>
  await axiosInstance.post(`/hotel/store-room-directory/${id}`, data);

export const deleteHotelRoomDirectory = async (id: number) =>
  await axiosInstance.delete(`/hotel/room-directory/${id}`);
