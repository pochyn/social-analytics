import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./css/embla.css";

const Carousel = (props) => {
  const { slides, options, images } = props;
  const [emblaRef] = useEmblaCarousel(options);
  const colors = ["#23F0C7", "#EF767A", "#7D7ABC", "#6457A6", "#FFE347"];

  function generateRandomColor(index) {
    const randomShift = Math.floor(Math.random() * colors.length);
    const colorIndex = (index + randomShift) % colors.length;
    return colors[colorIndex];
  }

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <div
                style={{
                  backgroundColor: generateRandomColor(index),
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
