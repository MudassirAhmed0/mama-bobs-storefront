"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import the Navigation module
import { Navigation, Autoplay } from "swiper/modules";
type Testimonial = {
  profile: string;
  review: string;
  name: string;
};

const testimonials: Testimonial[] = [
  {
    profile: "/images/home/testimonials/profiles/place-holder.png",
    review:
      "Amazing customer service! The product quality exceeded my expectations, and the delivery was faster than expected. Highly recommended!",
    name: "Jessica Morgan",
  },
  {
    profile: "/images/home/testimonials/profiles/place-holder.png",
    review:
      "Great selection of products at unbeatable prices. I've been shopping here for months and have never been disappointed.",
    name: "Michael Thompson",
  },
  {
    profile: "/images/home/testimonials/profiles/place-holder.png",
    review:
      "I love the seamless shopping experience. The website is easy to navigate, and the checkout process is hassle-free.",
    name: "Samantha Lee",
  },
  {
    profile: "/images/home/testimonials/profiles/place-holder.png",
    review:
      "The product descriptions were accurate, and the quality was top-notch. Will definitely shop here again!",
    name: "Daniel Carter",
  },
  {
    profile: "/images/home/testimonials/profiles/place-holder.png",
    review:
      "Fast shipping and great packaging. The customer support team was very helpful when I had a query.",
    name: "Emily Davis",
  },
  {
    profile: "/images/home/testimonials/profiles/place-holder.png",
    review:
      "I was skeptical at first, but this store proved me wrong. Reliable service and fantastic products!",
    name: "John Reynolds",
  },
];

export default function Testimonials() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center items-center flex-col py-12">
        <h1
          data-aos="fade-up"
          className="text-2xl md:text-4xl 2xl:text-5xl leading-10 text-black"
        >
          <span className="font-bold">Testimonials</span>
        </h1>
        <Swiper
          data-aos="fade"
          modules={[Navigation, Autoplay]}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ disableOnInteraction: false }}
          slidesPerView={"auto"}
          spaceBetween={"20"}
          className="mt-12 md:mt-10 2xl:mt-20 swiper mySwiper !w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide lg:!w-1/2 !w-[85%]"
            >
              <div className="flex justify-center items-center flex-col select-none">
                <div className="flex w-full border h-18 rounded text-left text-black border-black bg-white justify-between items-start flex-col px-4 md:px-6">
                  <div
                    dangerouslySetInnerHTML={{ __html: testimonial.review }}
                    className="mt-10 text-lg leading-normal lg:h-[100px] sm:h-[120px] h-[180px] overflow-y-auto w-full"
                  ></div>
                  <div className="flex justify-end pb-6 space-y-11 items-end w-full flex-col h-28">
                    <div className="flex grow-0 w-6">
                      <img
                        src="/images/home/testimonials/quote.svg"
                        alt="quotes"
                      />
                    </div>
                    <div className="w-full flex justify-center items-center gap-4">
                      <div className="size-8 lg:size-12">
                        <img src={testimonial.profile} alt="woman avatar" />
                      </div>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-lg font-medium leading-none">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div
          data-aos="fade"
          className="flex justify-center mt-20 items-center space-x-6 w-full text-white"
        >
          <button className="rounded-full scale-x-[-1] p-2 flex justify-center items-center bg-black swiper-button-prev active:bg-opacity-55">
            <img
              className="w-6 h-6 "
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-6_next.svg"
              alt="prev"
            />
          </button>
          <button className="rounded-full p-2 flex justify-center items-center bg-black swiper-button-next active:bg-opacity-55">
            <img
              className="w-6 h-6"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-6_next.svg"
              alt="next"
            />
          </button>
        </div>
      </div>
      <style>
        {`
        .swiper-button-next::after,
        .swiper-button-prev::after {
            content: "";
        }
        

        .swiper-button-next,
        .swiper-button-prev {
            position: relative;
            right: 0;
            height: 30px;
            width: 30px;
            color:white;
        }
            .swiper-button-next, .swiper-button-prev {
  z-index: 10;  
}
  .swiper-button-lock{
  display:block
  }
        `}
      </style>
    </div>
  );
}
