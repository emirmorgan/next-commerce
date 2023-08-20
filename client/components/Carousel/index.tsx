"use client";

import { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Link from "next/link";

import { carouselItems } from "@/lib/constants";
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
            <div className="relative aspect-square w-full h-full max-h-[450px] overflow-hidden">
              <Image
                fill
                src={item.src}
                alt={item.alt}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
