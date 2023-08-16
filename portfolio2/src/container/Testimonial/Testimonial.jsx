import React from "react";
import "./Testimonial.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import {
  HiChevronLeft,
  HiChevronDoubleRight,
  HiChevronRight,
} from "react-icons/hi";
import { appWrap, motionWrap } from "../../wrapper";
import { useState, useEffect } from "react";

const brand = [{}];
const testimonial = [
  {
    name: "X",
    company: "Y",
    imgUrl: images.profile,
    feedback: "Soroosh is an awesome developer",
  },
  {
    name: "XY",
    company: "YX",
    imgUrl: images.amazon,
    feedback: "Soroosh is an awesome designer",
  },
];
const Testimonial = () => {
  const [brands, setBrands] = useState(brand);
  const [testimonials, setTestimonials] = useState(testimonial);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="app-testimonial-item app-flex">
        <img
          src={testimonials[currentIndex].imgUrl}
          alt="testimonial picture"
        />
        <div className="app-testimonial-content">
          <p className="p-text">{testimonials[currentIndex].feedback}</p>
          <div>
            <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
            <h5 className="p-text">{testimonials[currentIndex].company}</h5>
          </div>
        </div>
      </div>
      <div className="app-testimonial-btns app-flex">
        <div
          className="app-flex"
          onClick={() =>
            handleClick(
              currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
            )
          }
        >
          <HiChevronLeft />
        </div>
        <div
          className="app-flex"
          onClick={() =>
            handleClick(
              currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          <HiChevronRight />
        </div>
      </div>
    </>
  );
};

export default appWrap(
  motionWrap(Testimonial, "app-testimonial"),
  "testimonials"
);
