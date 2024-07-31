"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    const dummyEmail = "jgardner@gmail.com";
    const dummyPassword = "12345678";

    if (email === dummyEmail && password === dummyPassword) {
      try {
        console.log("Redirecting to /dashboard");
        router.push("/dashboard"); // Redirect to dashboard
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gradient-to-t from-[#AFA3FF] to-[#FFFFFF]">
      <div className="border rounded-2xl space-y-4 bg-white w-[35%] p-10 border-[#CECECE]">
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold">
            <span className="text-black">Welcome back to </span>
            <span className="text-[#4534AC]">Workflo!</span>
          </h1>
        </div>
        <form className="space-y-3 mt-4" onSubmit={handleSubmit}>
          <input
            className="w-full bg-[#EBEBEB] outline-[#999999] p-2 h-10 rounded-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full bg-[#EBEBEB] outline-[#999999] p-2 h-10 rounded-lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full h-10 border rounded-lg bg-[#7667D0] text-white"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-center items-center mt-4">
          <p className="text-sm font-normal text-[#606060]">
            <span>Don&apos;t have an account? </span>
            <Link className="text-[#0054A1]" href="/signup">
              <span>Sign up.</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
