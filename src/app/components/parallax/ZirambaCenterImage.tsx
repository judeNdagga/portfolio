import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import ziramba from "../../../../public/ziramba.png";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";
export default function ZirambaCenterImage() {
  const { scrollY } = useScroll();
  const SECTION_HEIGHT = 1500;
  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 1500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 1500],
    [1, 1]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url(/ziramba/homepage.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <a
        className="absolute flex bottom-[10%]
         text-4xl pl-9 text-white items-center h-[20%] w-full xl:w-[35%] bg-black bg-opacity-45
         hover:cursor-pointer hover:scale-110 hover:bg-rose-800 hover:bg-opacity-45 
         transition duration-500"
        href="https://ziramba.com/"
      >
        ZIRAMBA CONSTRUCTION
        <LuExternalLink className="ml-5" />
      </a>

      {/* <Image
        src={ziramba}
        width={1000}
        height={1000}
        alt="ziramba"
        className="bg-center"
        /> */}
    </motion.div>
  );
}
