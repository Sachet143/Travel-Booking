import axiosInstance from '@/services/axios/clientfetch';

export const checkoutBooking = async (id: any) =>
  await axiosInstance.post(`/hotel/hotel-bookings`, { id })