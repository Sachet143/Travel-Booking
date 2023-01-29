import axiosInstance from "@/services/axios/clientfetch";

export const roomBookingApi = async (data: object) =>
  await axiosInstance.post(`/user/book`, data);

export const esewaPay = async () => {
  await axiosInstance.post("/user/esewa/pay");
};

export const holdSeats = async (data: any) =>
  await axiosInstance.post("/hold-seats", data);
