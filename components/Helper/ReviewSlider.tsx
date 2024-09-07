import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const ReviewSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="item"
    >
      <ClientReviewCard
        image="https://github.com/SajalTalukder/portfolio_yt_2024_starter/blob/main/public/images/user1.jpg?raw=true"
        user="Shokirxon Oppoxonov"
        role="Project Manager"
      />
      <ClientReviewCard
        image="https://github.com/SajalTalukder/portfolio_yt_2024_starter/blob/main/public/images/user2.jpg?raw=true"
        user="Zebo Yusupove"
        role="Web Developer"
      />
      <ClientReviewCard
        image="https://github.com/SajalTalukder/portfolio_yt_2024_starter/blob/main/public/images/user3.jpg?raw=true"
        user="Alisher Egamberdiyev"
        role="Fullstack Developer"
      />
      <ClientReviewCard
        image="https://github.com/SajalTalukder/portfolio_yt_2024_starter/blob/main/public/images/user4.jpg?raw=true"
        user="Robiya Abdusamatova"
        role="Project Manager"
      />
      <ClientReviewCard
        image="https://github.com/SajalTalukder/portfolio_yt_2024_starter/blob/main/public/images/user1.jpg?raw=true"
        user="Jalolov Firdavs"
        role="Fullstack Developer"
      />
    </Carousel>
  );
};

export default ReviewSlider;
