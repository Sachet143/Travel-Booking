import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { PUBLIC_ROUTES } from './@core/services/constants';

const FORMATTED_PUBLIC_PATHNAME = PUBLIC_ROUTES.map(route => route + '/');

export async function middleware(request: NextRequest) {
    const { pathname: requestedPathname } = request.nextUrl;
    const url = request.nextUrl.clone();
    const token = request.cookies.get('token');

    if (token) {
        const visitingPublicRoutes = FORMATTED_PUBLIC_PATHNAME.includes(requestedPathname);
        if (visitingPublicRoutes) {
            url.pathname = "/admin";

            return NextResponse.redirect(url);
        }

        // `/pages/admin`
        const routeStartsWithAdmin = url.pathname.startsWith('/admin/');
        if (!routeStartsWithAdmin) {
            url.pathname = "/admin" + url.pathname;

            return NextResponse.redirect(url);
        }

    } else {
        const visitingAdminRoutes = requestedPathname.includes('/admin');
        if (visitingAdminRoutes) {
            url.pathname = "/login";

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
// export const config = {
//     matcher: [
//         // public routes
//         '/',
//         '/login',
//         '/register',
//         '/forgot-password',
//         '/reset-password',

//         // admin routes
//         '/admin',
//         '/admin/account-settings',
//         '/admin/courses',
//         '/admin/courses/create',
//     ]
// }