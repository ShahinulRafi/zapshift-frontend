import React from "react";
// import services from "../../../assets/data/services.json";
const Services = () => {
  return (
    <div className="px-28 py-24 bg-secondary mx-12.5 rounded-4xl my-25">
      <h1 className="font-extrabold text-[40px] text-center text-white">
        Our Services
      </h1>
      <p className="font-medium text-[16px] text-center text-[#DADADA]">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to <br /> business shipments — we deliver
        on time, every time.
      </p>

      {/* <div className="grid grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="">
            <h2 className="">{service.title}</h2>
            <p className="">{service.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Services;
