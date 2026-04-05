import React, { use } from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className="py-20">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="reviewsSwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="transition-all duration-300">
              <ReviewCard review={review} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;