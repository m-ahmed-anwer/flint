import { signOut } from "@/auth";
import React from "react";

const LogoutButton = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut({ redirect: true, redirectTo: "/login" });
        }}>
        <button
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition-all hover:text-red-900"
          type="submit">
          Logout
        </button>
      </form>
    </>
  );
};

export default LogoutButton;
