import React from "react";
import Banner1 from "../../../assets/banner/banner1.png";
import Banner2 from "../../../assets/banner/banner2.png";
import Banner3 from "../../../assets/banner/banner3.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={Banner1} />
      </div>
      <div>
        <img src={Banner2} />
      </div>
      <div>
        <img src={Banner3} />
      </div>
    </Carousel>
  );
};

// const Banner = () => {
//   return (
//     <div className="flex justify-between mx-8 px-[109px] py-[80px] items-center">
//       <div>
//         <img src={tinyDeliveryman} alt="" width="220px" height="100px" />
//         <h1 className="font-extrabold text-[56px]" text->
//           We Make Sure Your <br />
//           <span>Parcel Arrives</span> On Time <br />– No Fuss.
//         </h1>
//         <p className="text-[16px]">
//           Enjoy fast, reliable parcel delivery with real-time tracking and zero
//           hassle. From personal <br /> packages to business shipments — we
//           deliver on time, every time.
//         </p>

//         <div className="flex my-[32px] gap-8">
//           <button className="btn btn-primary text-[20px] text-black font-bold w-[224px] h-[56px] rounded-[99px] px-[32px] py-[16px]">
//             Track your percel
//           </button>
//           <BsArrowUpRightCircleFill className="-ml-6.5 text-4xl mt-2" />

//           <button className="btn font-bold text-[20px] w-[158px] h-[56px] px-[32px] py-[16px] rounded-[16px]">Be a rider</button>
//         </div>
//       </div>
//       <div>
//         <img src={BannerImage} alt="" width="473.46" height="450" />
//       </div>
//     </div>
//   );
// };

export default Banner;
