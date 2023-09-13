import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../Redux/AuthRedux/action';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleSignup = () => {
    const userData = { email, password };
    dispatch(signupUser(userData,navigate));
  };

  return (
    <div className="bg-gradient-to-b from-pink-200 to-blue-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 h-96">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Sign Up
        </h2>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            onClick={handleSignup}
          >
            Register
          </button>
          <p className="text-gray-600 text-center">
            Already have an account?{" "}
            <a href="/" className="text-blue-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
