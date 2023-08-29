import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const SlidingCard = ({ children }) => {
  const { inView, ref } = useInView({ triggerOnce: true });

  const slideAnimation = useSpring({
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    opacity: inView ? 1 : 0,
    delay: 500,
    duration:5000,
  });

  return (
    <animated.div style={slideAnimation} ref={ref}>
      {children}
    </animated.div>
  );
};

export default SlidingCard;
