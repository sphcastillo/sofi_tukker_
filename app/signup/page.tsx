"use client";
import STBread from "@/images/header/st_logo.png";
import { useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";

const franklinGothicCondensed = localFont({
  src: "../../public/fonts/FGC.ttf",
});

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    city: "",
    state: "",
    country: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    
  };

  return (
    <div className="bg-[#000000] pt-6 pb-[86px]">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl"
        >
          <div className="flex justify-center pb-5 pt-8">
            <h2 className="text-[18px] font-semibold text-[#EB3D3B] text-center">
              Sign up below to receive SOFI TUKKER exclusives & personal
              newsletters written by Sophie.
            </h2>
          </div>
          <div className="flex justify-center pb-5">
            <h2 className="text-[#DD90E1] text-[18px] text-center">
              Text Soph & Tuck at +1 617-249-7556 (US Only)
            </h2>
          </div>
          <div className="mb-4">
            <label
              className={`${franklinGothicCondensed.className} block text-gray-700 mb-2 tracking-wide`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className={`${franklinGothicCondensed.className} block text-gray-700 mb-2 tracking-wide`}
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className={`${franklinGothicCondensed.className} block text-gray-700 mb-2 tracking-wide`}
              htmlFor="city"
            >
              City
            </label>
            <input
              type="tel"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className={`${franklinGothicCondensed.className} block text-gray-700 mb-2 tracking-wide`}
              htmlFor="state"
            >
              State/Province
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />
          </div>
          <div className="mb-4">
            <label
              className={`${franklinGothicCondensed.className} block text-gray-700 mb-2 tracking-wide`}
              htmlFor="country"
            >
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className={`${franklinGothicCondensed.className} block text-gray-700 mb-2 tracking-wide`}
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              required
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="rounded-2xl px-6 py-2 bg-[#EB3D3B] text-[#fff2e7] hover:bg-[#DD90E1] hover:text-[#000000]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center pt-4 sm:pt-7">
        <Image 
          src={STBread}
          alt="Sofi Tukker - Bread Logo"
          width={200}
          height={100}
          priority
          className="w-[120px] sm:w-[164px]"
        />
      </div>
    </div>
  );
}
