import React from "react";
import Banner1 from "../../../assets/banner/banner1.png";
import Banner2 from "../../../assets/banner/banner2.png";
import Banner3 from "../../../assets/banner/banner3.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="h-4/5 w-4/5 mx-32">
      <Carousel
      //  autoPlay={true} infiniteLoop={true}
      >
        <div className="relateive">
          <img src={Banner1} height={32} width={32} />
          <button className="absolute btn btn-primary text-[16px] text-black font-bold rounded-[99px] top-74 left-14">
            Track your percel{" "}
          </button>
          <BsArrowUpRightCircleFill className="absolute top-75 left-55 text-3xl" />{" "}
          <button className="absolute btn font-bold rounded-xl text-[16px] top-74 left-68">
            Be a rider
          </button>
        </div>
        <div>
          <img src={Banner2} />
        </div>
        <div>
          <img src={Banner3} />
        </div>
      </Carousel>
    </div>
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
