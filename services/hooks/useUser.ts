import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import useSWR from 'swr'
import axiosInstance from '@/services/axios/clientfetch';
import { EXCLUDE_ROUTES } from '@/services/constants';

interface IReturnType {
    user: any;
    mutateUser: any;
    errorUser: any;
    validatingUser: any;
}

const fetcher = (url: any) => axiosInstance(url).then(res => res);

function useUser(fallbackData = null, options = {}): IReturnType {
    const router = useRouter();
    const isPrivateRoute = !EXCLUDE_ROUTES.includes(router.pathname);
    const token = getCookie('token');

    const { data: user, mutate: mutateUser, error: errorUser, isValidating: validatingUser } =
        useSWR(
            isPrivateRoute && !fallbackData && token
                ? `/users/${token}`
                : null,
            fetcher,
            { ...options, fallbackData }
        )

    return { user, mutateUser, errorUser, validatingUser }
}

export default useUser;