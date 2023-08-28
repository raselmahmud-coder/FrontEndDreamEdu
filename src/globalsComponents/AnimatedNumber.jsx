import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimatedNumber = ({ value, delay = 400 }) => {
  const { inView, ref } = useInView({ triggerOnce: true });

  const animatedProps = useSpring({
    number: inView ? value : 0,
    from: { number: 0 },
    delay,
    config: config.molasses,
  });

  return (
    < >
      <animated.span ref={ref}>
      {animatedProps.number.to((value) => Math.floor(value))}
      </animated.span>
    </>
  );
};

export default AnimatedNumber;
