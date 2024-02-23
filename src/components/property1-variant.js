import { motion } from "framer-motion";
import { useMemo } from "react";
import "./property1-variant.css"

const Background = ({
  propTop,
  propBackground,
  propLeft,
  propWidth,
  propHeight,
  propMargin,
  propRight,
  propBottom,
}) => {
  const property1Variant5Style = useMemo(() => {
    return {
      top: propTop,
      background: propBackground,
      left: propLeft,
      width: propWidth,
      height: propHeight,
      margin: propMargin,
      right: propRight,
      bottom: propBottom,
    };
  }, [
    propTop,
    propBackground,
    propLeft,
    propWidth,
    propHeight,
    propMargin,
    propRight,
    propBottom,
  ]);

  return (
    <motion.div
      className="property-1variant5"
      style={property1Variant5Style}
      animate={{
        background: [
          "linear-gradient(360deg, #000 53.53%, #16431d)",
          "linear-gradient(297.18deg, #000 53.53%, #16431d)",
          "linear-gradient(243.69deg, #000 53.53%, #16431d)",
          "linear-gradient(180deg, #000 53.53%, #16431d)",
          "linear-gradient(127.22deg, #000 53.53%, #16431d)",
          "linear-gradient(54.55deg, #000 53.53%, #16431d)",
          "linear-gradient(0deg, #000 53.53%, #16431d)",
        ]
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }}
    />
  );
};

export default Background;
