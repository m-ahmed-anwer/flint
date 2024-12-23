"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form>
      <div className="mt-6">
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="border rounded-lg p-2 w-full"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="border rounded-lg p-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-2 top-2"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <Button className="w-full">Login</Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
