import axiosInstance from "@/services/axios/clientfetch";

export const roomBookingApi = async (data: object) =>
  await axiosInstance.post(`/user/book-hotel`, data);

export const esewaPay = async () => {
  await axiosInstance.post("/user/esewa/pay");
};

export const holdSeats = async (data: any) =>
  await axiosInstance.post("/hold-seats", data);

export const releaseSeats = async (data: any) =>
  await axiosInstance.post("/release-seats", data);

export const bookSeats = async (data: any) =>
  await axiosInstance.post("/user/book-bus", data);

export const getBookingDetails = async (data: any) => {
  await axiosInstance.get("/");
};
