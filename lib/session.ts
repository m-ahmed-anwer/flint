import { jwtVerify, SignJWT } from "jose";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const key = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

const cookie = {
  name: "session",
  options: { httpOnly: true, sameSite: "lax", secure: true, path: "/" },
  duration: 24 * 60 * 60 * 1000,
};

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

export async function decrypt(session: any) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function createSession(userId: string) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ userId, expires });

  cookies().set(cookie.name, session, { ...cookie.options, expires });
  redirect("/home");
}

export async function verifySesssion() {
  const cookie = cookies().get(cookie.name)?.value;
  const session = await decrypt(cookie);
  if (session?.userId) {
    redirect("/login");
  }
  return { userId: session?.userId || null };
}
