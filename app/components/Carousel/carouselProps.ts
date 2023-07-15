export interface CarouselProps {
  arrows?: boolean;
  autoplay?: boolean;
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
}

export const CarouselPropsDefault: Required<CarouselProps> = {
  arrows: true,
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
