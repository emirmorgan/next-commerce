"use server";

import { cookies } from "next/headers";

type ICookie = {
  type: string;
  tag: string;
  data: string;
};

export default async function setCookies({ type, tag, data }: ICookie) {
  if (type === "GET") {
    return await cookies().get(tag)?.value;
  } else if (type === "SET") {
    cookies().set(tag, data);
  } else if (type === "DELETE") {
    return await cookies().delete(tag);
  } else {
    return "Unknown type.";
  }
}
