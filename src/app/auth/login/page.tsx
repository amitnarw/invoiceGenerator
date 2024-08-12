"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await fetch('/api/v1/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        // Handle errors here
        const errorData = await res.json();
        setError(errorData.message || "Something went wrong, please try again!");
        return;
      }

      let data = await res.json();
      console.log(data, "DATA")
      localStorage.setItem('token', data.result);
      router.push('/');
    } catch (error) {
      setError("Something went wrong, please try again!");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#3498db]/10">
      <div className="w-[700px] mx-3 mb-28">
        <h1 className="font-semibold sm:text-4xl text-xl text-center mb-8">
          NEXINVOICE
        </h1>
        <div className="bg-white rounded-xl shadow-lg sm:px-10 px-4 pb-10 pt-6 border border-gray-100">
          <h1 className="text-center font-semibold sm:text-3xl text-xl">Sign in</h1>
          <p className="text-center text-gray-500 text-sm mt-1">
            Welcome back!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-2 ml-2">Email</p>
              <input
                name="email"
                type="text"
                className="inputNonHoverShow !text-lg"
                required
              />
            </div>
            <p className="text-sm text-gray-500 mb-2 ml-2 mt-5">Password</p>
            <input
              name="password"
              type="password"
              className="inputNonHoverShow !text-lg"
              required
            />
              {/* <div className="text-red-500 text-center mt-2 h-3">
            {error}
              </div> */}
            <div className="text-end mt-2 flex md:flex-row flex-col justify-between items-center">
              <p className="text-red-500 text-sm text-center">{error}</p>
              <button className="text-sm text-end text-gray-500 hover:text-black cursor-pointer px-5 duration-300">
                Forgot password?
              </button>
            </div>
            <button className="bg-[#3498db] hover:bg-[#2980b9] text-white w-full p-2 rounded-md mt-4 duration-300">
              Sign in
            </button>
            <div className="text-center mt-5 text-sm">
              <span>Don{"'"}t have an account yet?</span>
              <Link
                href="/auth/register"
                className="text-[#34495e] hover:text-[#2c3e50] cursor-pointer duration-300 font-medium px-2"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
