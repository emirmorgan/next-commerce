import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import verifyToken from "./lib/verifyToken";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const protectedPaths = ["/dashboard"];

  const token = request.cookies.get("token")?.value;
  const verifiedToken = token && (await verifyToken(token));

  const matchesProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (!verifiedToken) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("token");
    return response;
  }

  if (matchesProtectedPath && verifiedToken.userRole !== "ADMIN") {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("token");
    return response;
  }
}

export const config = {
  matcher: ["/profile/:path*", "/dashboard/:path*", "/favorites/:path*"],
};
