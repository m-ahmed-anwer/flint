//@lib/session.ts
import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/User";

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
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(payload.expires / 1000)
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    if ((error as any).code === "ERR_JWT_EXPIRED") {
      return null;
    }
    throw error;
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

export async function deleteSession() {
  (await cookies()).set(cookie.name, "", { expires: new Date(0) });
}

export async function getSession() {
  const sessionToken = (await cookies()).get(cookie.name)?.value;
  if (!sessionToken) return null;

  const session = await decrypt(sessionToken);
  if (!session || session.expires < Date.now()) {
    await deleteSession(); // Cleanup expired session
    return null;
  }

  return { session: sessionToken };
}

export async function updateSession(request: NextRequest) {
  const sessionToken = request.cookies.get(cookie.name)?.value;
  if (!sessionToken) return;

  const session = await decrypt(sessionToken);
  if (!session || session.expires < Date.now()) {
    return deleteSession();
  }

  session.expires = Date.now() + cookie.duration;
  const newSessionToken = await encrypt(session);

  const response = NextResponse.next();
  response.cookies.set({
    name: cookie.name,
    value: newSessionToken,
    ...cookie.options,
    expires: new Date(session.expires),
  });

  return response;
}
