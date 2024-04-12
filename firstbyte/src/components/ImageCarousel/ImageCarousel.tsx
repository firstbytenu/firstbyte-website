/** @format */

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type CarouselProps = {
  images: Array<string>;
};

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="w-80 h-96 overflow-hidden rounded-lg md:h-96 cursor-pointer">
        <div ref={sliderRef} className="keen-slider w-80 h-96">
          {images.map((image) => {
            return (
              <img src={image} className="keen-slider__slide" alt={image} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
