import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const SlidingCard = ({ children, animationA, animationB, delay = 400 }) => {
  const { inView, ref } = useInView({ triggerOnce: true });
  // console.log(children, "from sliding card children");
  const slideAnimation = useSpring({
    transform: inView ? `${animationA}` : `${animationB}`,
    transition: "transform 2s ease-in-out",
    opacity: inView ? 1 : 0,
    delay: delay,
    duration: 5000,
    tension: 170,
    friction: 26,
  });

  return (
    <animated.div style={slideAnimation} ref={ref}>
      {children}
    </animated.div>
  );
};

export default SlidingCard;
