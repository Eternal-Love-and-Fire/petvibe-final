"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
export const ImageSlider = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className="mt-8 max-h-[533px] overflow-hidden"
    >
      <div>
        <Image
          src="/IMG_5330.PNG"
          alt="carousel image"
          width={600}
          height={900}
          className="h-96 object-cover"
        />
      </div>
      <div>
        <Image
          src="/IMG_5331.PNG"
          alt="carousel image"
          width={600}
          height={900}
          className="h-96 object-cover"
        />
      </div>
      <div>
        <Image
          src="/IMG_5333.PNG"
          alt="carousel image"
          width={600}
          height={900}
          className="h-96 object-cover"
        />
      </div>
      <div>
        <Image
          src="/IMG_5334.PNG"
          alt="carousel image"
          width={600}
          height={900}
          className="h-96 object-cover"
        />
      </div>
      <div>
        <Image
          src="/IMG_5335.PNG"
          alt="carousel image"
          width={600}
          height={900}
          className="h-96 object-cover"
        />
      </div>
      <div>
        <Image
          src="/IMG_5336.PNG"
          alt="carousel image"
          width={600}
          height={900}
          className="h-96 object-cover"
        />
      </div>
    </Carousel>
  );
};
