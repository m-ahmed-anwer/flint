import React from "react";

const LoginForm = () => {
  return (
    <div className="mt-6">
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Enter Email"
          className="border rounded-lg p-2 w-full"
        ></input>
        <input
          type="password"
          placeholder="Enter Passowrd"
          className="border rounded-lg p-2 w-full"
        ></input>
      </div>
    </div>
  );
};

export default LoginForm;
