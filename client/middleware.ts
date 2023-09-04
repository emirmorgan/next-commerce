import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import verifyToken from "./lib/verifyToken";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const hasVerifiedToken = token && (await verifyToken(token));

  if (!hasVerifiedToken) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("token");
    return response;
  }
}

export const config = {
  matcher: ["/profile/:path*", "/dashboard/:path*", "/favorites/:path*"],
};
