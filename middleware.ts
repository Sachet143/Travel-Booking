import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { EXCLUDE_ROUTES, TOKEN_KEY, USER_TYPE_KEY } from '@/services/constants';
import { appDecrypt } from './services/helper';

const FORMATTED_PUBLIC_PATHNAME = EXCLUDE_ROUTES.map(route => route + '/');

export async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    // @ts-ignore
    const token = request.cookies.get(TOKEN_KEY);
    const userType = request.cookies.get(USER_TYPE_KEY);
    // user types
    const isSuperAdmin = userType && appDecrypt(userType) === "superadmin";
    const isHotelAdmin = userType && appDecrypt(userType) === "hoteladmin";
    const isUser = userType && appDecrypt(userType) === "user";
    // route types
    const isSuperAdminRoutes = url.pathname.includes("/superadmin") || url.pathname.includes("/superadmin/");
    const isHotelAdminRoutes = url.pathname.includes("/admin") || url.pathname.includes("/hoteladmin/");

    // protect superadmin routes
    if (isSuperAdminRoutes) {
        // if (token && isSuperAdmin) {
        if (1) {
            const responseMain = NextResponse.next();
            return responseMain;

        } else {
            url.pathname = "/client";
            return NextResponse.rewrite(url);

        }
    }
    // protect hoteladmin routes
    if (isHotelAdminRoutes) {
        if (token && isHotelAdmin) {
            const responseMain = NextResponse.next();
            return responseMain;

        } else {
            url.pathname = "/client";
            return NextResponse.rewrite(url);

        }
    }

    url.pathname = "/client";
    return NextResponse.rewrite(url);
}

/*
    middleware gets triggered only in these routes,
    exclude all the routes of assets and chunks
 */
export const config = {
    matcher: [
        // public routes
        '/',
        '/login',
        '/register',
        '/forgot-password',
        '/reset-password',

        // superadmin routes
        '/superadmin',
        '/superadmin/login',

        // hoteladmin routes
        '/hoteladmin/login',

    ]
}