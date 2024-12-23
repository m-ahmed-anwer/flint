// lib/session.ts
import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

const cookie = {
  name: "session",
  options: {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  } as const,
  duration: 24 * 60 * 60 * 1000, // 24 hours
};

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(session: string) {
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

  (await cookies()).set(cookie.name, session, {
    ...cookie.options,
    expires,
  });
}

export async function verifySession() {
  const session = (await cookies()).get(cookie.name)?.value;

  if (!session) {
    redirect("/login");
  }

  const payload = await decrypt(session);

  if (!payload?.userId) {
    (await cookies()).delete(cookie.name);
    redirect("/login");
  }

  return { userId: payload.userId };
}

export async function deleteSession() {
  (await cookies()).delete(cookie.name);
  redirect("/login");
}
