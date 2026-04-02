import React from "react";
import bookingIcon from "../../../assets/bookingIcon.png";
const HowItWorks = () => {
  return (
    <div className="mx-40">
      <h1 className="font-extrabold text-[32px]">How it Works</h1>
      <div className="flex justify-between gap-6 mt-8">
        <div className="p-8 bg-white rounded-3xl">
          <img src={bookingIcon} alt="" />
          <h2 className="mt-6 font-bold text-[20px]">Booking Pick & Drop</h2>
          <p className="mt-4 text-[16px]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="p-8 bg-white rounded-3xl">
          <img src={bookingIcon} alt="" />
          <h2 className="mt-6 font-bold text-[20px]">Cash On Delivery</h2>
          <p className="mt-4 text-[16px]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="p-8 bg-white rounded-3xl">
          <img src={bookingIcon} alt="" />
          <h2 className="mt-6 font-bold text-[20px]">Delivery Hub</h2>
          <p className="mt-4 text-[16px]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="p-8 bg-white rounded-3xl">
          <img src={bookingIcon} alt="" />
          <h2 className="mt-6 font-bold text-[18px]">Booking SME & Corporate</h2>
          <p className="mt-4 text-[16px]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default HowItWorks;
