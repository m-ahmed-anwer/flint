import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <section className="bg-white relative">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12 leading-4 tracking-normal">
        <aside className="relative block h-16 lg:order-first lg:col-span-5 lg:h-full xl:col-span-6 lg:w-4/5">
          <img
            alt="Pattern"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl w-full">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Create an Account
            </h1>
            <div className="mt-4 leading-relaxed text-gray-500">
              Already have an account?{" "}
              <Link
                className="text-blue-600 hover:text-blue-800"
                href={"/login"}>
                Login
              </Link>
            </div>

            <SignUpForm />

            <div className="w-full flex items-center justify-between my-10 sm:my-8">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                OR
              </p>
              <hr className="w-full bg-gray-400" />
            </div>

            <div className="flex flex-col gap-4">
              <button className="max-sm:w-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center">
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="Google logo"
                />
                <p className="text-base font-medium ml-4 text-gray-700">
                  Continue with Google
                </p>
              </button>
              <button className="max-sm:w-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center">
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/linkedin.svg"
                  loading="lazy"
                  alt="LinkedIn logo"
                />
                <p className="text-base font-medium ml-4 text-gray-700">
                  Continue with LinkedIn
                </p>
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Signup;
