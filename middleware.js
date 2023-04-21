import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    // Token will exist if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET })

    const { pathname } = req.nextUrl
    const url = req.nextUrl.clone()
    url.pathname = '/login'

    if (pathname.includes("/api/auth") || token) {
        return NextResponse.next();
    }

    if (!token && pathname !== '/login') {
        return NextResponse.redirect(url)
    }
}

export const config = {
    matcher: "/",
};
    