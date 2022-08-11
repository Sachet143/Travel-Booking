import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { EXCLUDE_ROUTES } from '@/services/constants';

const FORMATTED_PUBLIC_PATHNAME = EXCLUDE_ROUTES.map(route => route + '/');

export async function middleware(request: NextRequest) {
    const { pathname: requestedPathname } = request.nextUrl;
    const url = request.nextUrl.clone();
    const token = request.cookies.get('token');
    const userType = request.cookies.get('user_type');
    // user types
    const isSuperAdmin = userType === "superadmin";
    const isHotelAdmin = userType === "hoteladmin";
    const isUser = userType === "user";
    // route types
    const isSuperAdminRoutes = url.pathname.includes("/superadmin") || url.pathname.includes("/superadmin/");
    const isHotelAdminRoutes = url.pathname.includes("/admin") || url.pathname.includes("/hoteladmin/");

    if (token) {
        // protect superadmin and hoteladmin routes
        if (
            (!isSuperAdmin && isSuperAdminRoutes) ||
            (!isHotelAdmin && isHotelAdminRoutes)) {

            url.pathname = "/";
            return NextResponse.redirect(url);
        }

    } else {
        if (isSuperAdminRoutes || isHotelAdminRoutes) {
            url.pathname = "/";
            return NextResponse.redirect(url);
        }
    }

    const responseMain = NextResponse.next()
    return responseMain;
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
        '/superadmin/login',
        '/hoteladmin/login',
        // '/register',
        // '/forgot-password',
        // '/reset-password',

        // admin routes
    ]
}