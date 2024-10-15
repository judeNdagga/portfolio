import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";


export default function PelumParallaxImages() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/pelum/dash.png"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="sm:w-4/6"
      />
      <ParallaxImg
        src="/pelum/about.png"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto sm:w-2/3"
      />
      <ParallaxImg
        src="/pelum/team.png"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto sm:w-2/3"
      />
      <ParallaxImg
        src="/pelum/emp.png"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="sm:ml-24 sm:w-8/12"
      />
    </div>
  );
}

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
