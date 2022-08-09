import axiosInstance from '@/services/axios/clientfetch';

export const login = async (data: object) =>
    await axiosInstance.post(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, data)

export const logout = async () =>
    await axiosInstance.post(`${process.env.NEXT_PUBLIC_BASE_URL}/logout`)

export const registerUser = async (data: object) =>
    await axiosInstance.post(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, data)

export const forgotPassword = async (data: object) =>
    await axiosInstance.post(`${process.env.NEXT_PUBLIC_BASE_URL}/forgot-password`, data)

export const resetPassword = async (data: object) =>
    await axiosInstance.post(`${process.env.NEXT_PUBLIC_BASE_URL}/reset-password`, data)

