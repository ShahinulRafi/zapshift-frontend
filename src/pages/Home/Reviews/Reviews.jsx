import React, { use } from "react";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return <div>Review</div>;
};

export default Reviews;
