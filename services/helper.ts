import { toast } from 'react-toastify';
import Cryptr from 'cryptr'

const cryptr = new Cryptr(process.env.NEXT_PUBLIC_ENCRYPT_HASH + "");

export function responseErrorHandler(res: any, setError?: any) {

    if (res && res?.data && res?.data?.errors) {

        // set error in field
        if (setError) {
            Object.keys(res.data.errors).map(key => setError(
                key,
                { message: res.data.errors[key][0] }
            ))
        }

        // fire alert
        const firstErrorKey = Object.keys(res.data.errors)[0];
        throw toast.error(res.data.errors[firstErrorKey][0]);
    }

    if (res && res?.data && res?.data?.message) {
        throw toast.error(res.data.message);
    }

    if (res && res?.message) {
        throw toast.error(res.message);
    }

    throw toast.error("Something went wrong. Please try again later!");
}

export function kyleEncrypt(data: string) {
    return cryptr.encrypt(data);

}
export function kyleDecrypt(data: string) {
    return cryptr.decrypt(data);
}
