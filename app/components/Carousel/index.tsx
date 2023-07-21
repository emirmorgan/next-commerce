"use client";

import { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Link from "next/link";

import { carouselItems } from "@/app/constants/Index";
import { CarouselProps, CarouselPropsDefault } from "./carouselProps";

import { CarouselArrow } from "./Arrow";

export default function Carousel(userProps: CarouselProps) {
  const props: Required<CarouselProps> = {
    ...CarouselPropsDefault,
    ...userProps,
  };

  const carousel = useRef<Slider>(null);

  return (
    <div className="relative w-full h-full">
      <Slider
        ref={carousel}
        arrows={props.arrows}
        autoplay={props.autoplay}
        dots={props.dots}
        infinite={props.infinite}
        speed={props.speed}
        slidesToShow={props.slidesToShow}
        slidesToScroll={props.slidesToScroll}
        prevArrow={<CarouselArrow carousel={carousel} direction="left" />}
        nextArrow={<CarouselArrow carousel={carousel} direction="right" />}
      >
        {carouselItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[550px]">
              <Image
                fill
                src={item.src}
                alt={item.alt}
                className="object-cover overflow-hidden"
              />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
