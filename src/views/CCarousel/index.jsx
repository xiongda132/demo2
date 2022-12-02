import { Carousel, Button } from "antd";
import { useRef } from "react";

const commonStyle = {
  height: "180px",
  lineHeight: "180px",
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#364d79",
};

export default () => {
  const carouselRef = useRef();

  const handleChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  return (
    <>
      <Carousel
        afterChange={handleChange}
        effect="fade"
        ref={(ref) => {
          carouselRef.current = ref;
        }}
        autoplay
      >
        <div>
          <h3 style={commonStyle}>1</h3>
        </div>
        <div>
          <h3 style={commonStyle}>2</h3>
        </div>
        <div>
          <h3 style={commonStyle}>3</h3>
        </div>
        <div>
          <h3 style={commonStyle}>4</h3>
        </div>
      </Carousel>
      <Button onClick={handlePrev}>上滑</Button>
      <Button onClick={handleNext}>下滑</Button>
    </>
  );
};
