import { jwtVerify } from "jose";

export default async function verifyToken(token: string) {
  const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_TOKEN_SECRET);

  try {
    const { payload } = await jwtVerify(token, secret);

    return payload;
  } catch (err) {
    return false;
  }
}
