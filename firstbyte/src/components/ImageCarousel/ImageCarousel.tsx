/** @format */

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type CarouselProps = {
  images: Array<string>;
};

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  return (
    <>
      <div className="w-80 h-96 overflow-hidden rounded-lg md:h-96">
        <div ref={ref} className="keen-slider w-80 h-96">
          {images.map((image) => {
            return (
              <div className="w-80 h-96">
                <img src={image} className="keen-slider__slide" alt={image} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
