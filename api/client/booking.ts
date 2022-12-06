import axiosInstance from "@/services/axios/clientfetch";

export const roomBooking = async (data: object) =>
  await axiosInstance.post(`/user/booking`, data);

export const esewaPay = async () => {
  await axiosInstance.post("/user/esewa/pay");
};
