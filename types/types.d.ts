// types.d.ts 
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    firstName: string;
    lastName: string;
  }

  interface Session {
    user: User & {
      firstName: string;
      lastName: string;
    };
    token: {
      firstName: string;
      lastName: string;
    };
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
  }
}
