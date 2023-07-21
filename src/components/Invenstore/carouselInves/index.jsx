import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselIvestore() {
  function SampleArrow() {
    return <div style={{ display: "none" }} />;
  }
  return (
    <Slider
      dots={false}
      infinite={true}
      slidesToShow={3}
      slidesToScroll={1}
      autoplay={true}
      speed={2000}
      autoplaySpeed={2000}
      cssEase={"linear"}
      nextArrow={<SampleArrow />}
      prevArrow={<SampleArrow />}
    >
      <div>
        <img src="/images/GFC.png" alt="" />
      </div>
      <div>
        <img src="/images/golden-gate-ventures.png" alt="" />
      </div>
      <div>
        <img src="/images/Alpha.png" alt="" />
      </div>
      <div>
        <img src="/images/Insigna.png" alt="" />
      </div>
      <div>
        <img src="/images/sequoia.png" alt="" />
      </div>
      <div>
        <img src="/images/Sginnovate.png" alt="" />
      </div>
      <div>
        <img src="/images/wavemaker.png" alt="" />
      </div>
    </Slider>
  );
}
