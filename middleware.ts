import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TOKEN_KEY, USER_TYPE_KEY } from "@/services/constants";
import { appDecrypt } from "./services/helper";

export async function middleware(request: NextRequest) {

}

/*
    middleware gets triggered only in these routes,
    exclude all the routes of assets and chunks
 */
export const config = {
  matcher: [
    // public routes
    "/",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/tour",
    "/hotels",
    "/hotels/:path",
    "/room/:path",
    "/room/:path/book",
    "/login",
    "/register",
    "/search",
    "/profile",
    "/become-partner",
    "/bus",
    "/trip",
    "/bus/create",

    // superadmin routes
    "/superadmin",
    "/superadmin/login",

    // hoteladmin routes
    "/hoteladmin",
    "/hoteladmin/login",
    "/hoteladmin/hotel/create",
  ],
};
