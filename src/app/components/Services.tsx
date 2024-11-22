import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "./ui/AnimatedText";
export function Services() {
  return (
    <main className="mb-20 text-white">
      <HorizontalScrollCarousel />
      <Skills />
    </main>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex space-x-40">
          <div className="p-10 w-[30em] md:w-[90em]">
            <h1 className="text-5xl md:text-8xl text-center italic">
              How I make <span className="md:ml-20">successful </span>
              <br /> <span>projects with my</span>
              <br /> <span>clients</span>{" "}
            </h1>
          </div>
          <div className="w-[25em] md:w-[40em]">
            <h1 className="sm:pt-[10em] text-4xl italic font-bold">
              1. COMMUNICATION
            </h1>
            <p>
              Clear and open communication enables a swift determination of
              requirements as well as prompt and beneficial feedback
            </p>
          </div>
          <div className="w-[25em] md:w-[40em]">
            <h1 className="sm:pt-[1em] text-4xl italic font-bold">
              2. ANALYSIS
            </h1>
            <p>
              An in-depth analysis of the available options to determine the
              best way forward always goes a long way.
            </p>
          </div>
          <div className="w-[25em] md:w-[40em]">
            <h1 className="sm:pt-[10em] text-4xl italic font-bold">
              3. DESIGN
            </h1>
            <p>
              Before we get to the development, we need to establish the best
              user interface and experience. This is obviously subject to change
              depending on the client's interests.
            </p>
          </div>
          <div className="w-[25em] md:w-[40em]">
            <h1 className="sm:pt-[1em] text-4xl italic font-bold">
              4. DEVELOPMENT
            </h1>
            <p>
              With my fullstack skills, I'm confident I can deliver any task you
              give me.
            </p>
          </div>
          {/* {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })} */}
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillsVariant = {
    initial: {
      y: "10%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        type: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="relative"
      // variants={skillsVariant}
      // initial="initial"
      // whileInView="animate"
      // viewport={{
      //   once: false,
      // }}
      id="services"
    >
      <h1 className="text-center pt-20 sm:pt-0 sm:text-left sm:ml-20 sm:mb-20 text-xl">
        SERVICES
      </h1>
      <h1 className="text-center pt-20 sm:pt-0 sm:text-left sm:ml-20 text-4xl md:text-6xl xl:text-9xl">
        FRONTEND <br />
        DEVELOMENT
      </h1>
      <h1 className="text-center pt-20 sm:pt-0 sm:text-right sm:mr-20 text-4xl md:text-6xl xl:text-9xl">
        BACKEND <br />
        DEVELOPMENT
      </h1>
      <h1 className="text-center pt-20 sm:pt-0 sm:text-left sm:ml-20 text-4xl md:text-6xl xl:text-9xl">
        MOBILE <br />
        DEVELOPMENT
      </h1>
      <h1 className="text-center pt-20 sm:pt-0 sm:text-right sm:mr-20 text-4xl md:text-6xl xl:text-9xl">
        UNITY <br />
        DEVELOPMENT
      </h1>
    </motion.div>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
