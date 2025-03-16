import TransitionUp from "@/components/animations/TransitionUp";

export default function SecImage({ src, alt, className, delay }) {
  return (
    <TransitionUp
      className={`${className} flex-grow w-full h-96 object-cover rounded-xl  `}
      delay={delay}
    >
      <img
        src={src}
        alt={alt}
        className={`${className} flex-grow w-full h-96 object-cover rounded-xl  `}
      />
    </TransitionUp>
  );
}
