"use client";

import React from "react";
import { useClerk } from "@clerk/nextjs";

const LogoutButton = () => {
  const { signOut } = useClerk();

  return (
    <button
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition-all hover:text-red-900"
      onClick={() => signOut()}>
      Logout
    </button>
  );
};

export default LogoutButton;
