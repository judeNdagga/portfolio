import { AnimatedText } from "./ui/AnimatedText";

export function About() {
  return (
    <div className="sm:h-screen content-center text-white p-4 sm:p-0" id="about">
      <h1 className="text-center sm:text-left sm:ml-20 text-xl">ABOUT ME</h1>
      <p className="sm:p-10 uppercase text-3xl sm:text-5xl text-center">
        I'M A <AnimatedText text="FULLSTACK DEVELOPER"/> with ~3 years of experience, focusing on
        quality, minimalism and an enjoyable user experience
      </p>
      <p className="xl:ml-[20em] xl:mr-[20em] text-xl text-center">
        I take interest in creating attractive, interactive interfaces
        that seamlessly guide the user through the whole process. I also pay close
        attention to both user and employer expectations, as well as the ever-changing trends that might affect these expectations.
        <br />
        <br />
        If you’re
        looking for a professional to build your project from scratch or
        improve your current project, you can easily reach me by clicking <a href="mailto:ndaggajude88@gmail.com" className="underline">here</a>.
      </p>
    </div>
  );
}
