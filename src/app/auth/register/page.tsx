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
    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await fetch('/api/v1/auth/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ firstname, lastname, email, password })
      });

      if (!res.ok) {
        // Handle errors here
        const errorData = await res.json();
        setError(errorData.message || "Something went wrong, please try again!");
        return;
      }

      let data = await res.json();
      localStorage.setItem('token', data.result);
      router.push('/');
    } catch (error) {
      setError("Something went wrong, please try again!");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#3498db]/10">
      {/* <div className="absolute z-[-1] w-full h-full">
        <Image 
        src={"/wall3.jpg"}
        alt="background image"
        height={500}
        width={500}
        className="w-full h-full object-cover"
        />
      </div> */}
      <div className="w-[700px] mx-3 mb-2">
        <h1 className="font-semibold sm:text-4xl text-xl text-center mb-8">
          NEXINVOICE
        </h1>
        <div className="bg-white rounded-xl shadow-lg sm:px-10 px-4 pb-10 pt-8">
          <h1 className="text-center font-semibold sm:text-3xl text-xl">
            Create a free account
          </h1>
          <p className="text-center text-gray-500 text-sm mt-1">
            Gain access to more features with an account.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="sm:mt-10 mt-5 flex sm:flex-row flex-col sm:gap-5 gap-2">
              <div className="w-full">
                <p className="text-sm text-gray-500 mb-2 ml-2">First Name</p>
                <input
                  name="firstname"
                  type="text"
                  className="inputNonHoverShow !text-lg"
                  required
                />
              </div>
              <div className="w-full">
                <p className="text-sm text-gray-500 mb-2 ml-2">Last Name</p>
                <input
                  name="lastname"
                  type="text"
                  className="inputNonHoverShow !text-lg"
                  required
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-2 ml-2 sm:mt-5 mt-2">Email</p>
            <input
              name="email"
              type="text"
              className="inputNonHoverShow !text-lg"
              required
            />
            <p className="text-sm text-gray-500 mb-2 ml-2 sm:mt-5 mt-2">Password</p>
            <input
              name="password"
              type="password"
              className="inputNonHoverShow !text-lg"
              required
            />
            <div className="mt-3 flex items-center gap-2 ml-1">
              <input
                type="checkbox"
                name="tac"
                id="tac"
                className="cursor-pointer w-4 h-4 text-gray-500"
                required
              />
              <label
                htmlFor="tac"
                className="cursor-pointer text-sm text-gray-500"
              >
                I agree to the{" "}
                <a
                  className="hover:text-blue-500 duration-300"
                  href="https://www.google.co.in/"
                  target="_blank"
                >
                  Terms of Service
                </a>
              </label>
            </div>
            <button className="bg-[#3498db] hover:bg-[#2980b9] text-white w-full p-2 rounded-md mt-6 duration-300 text-md">
              Sign up
            </button>
            <div className="text-center mt-5 text-sm">
              <span>Already have an account?</span>
              <Link
                href={"/auth/login"}
                className="text-[#34495e] hover:text-[#2c3e50] cursor-pointer duration-300 font-medium px-2"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
