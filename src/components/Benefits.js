import TransitionUp from "./animations/TransitionUp";
export default function Benefits() {
  return (
    <section className="w-full bg-main-background mt-20">
      <div className="flex justify-center items-center flex-col max-w-[1400px] mx-auto px-10 md:px-5 py-16">
        <div className="flex justify-between items-center gap-10 lg:flex-col">
          <Item
            img="/images/icons/star.gif"
            title="Excellent Quality"
            description="Transform your car's appearance with our premium polish, giving it a glossy, flawless finish and long-lasting protection against dirt, scratches, and UV damage."
            color="rgba(68,34,25,0.8)"
            delay={0.1}
          />
          <Item
            img="/images/icons/coin.gif"
            title="Reasonable Pricing"
            description="Transform your car's appearance with our premium polish, giving it a glossy, flawless finish and long-lasting protection against dirt, scratches, and UV damage."
            color="rgba(255,215,0,0.15)"
            delay={0.2}
          />
          <Item
            img="/images/icons/location.gif"
            title="Only in Jesenice"
            description="Transform your car's appearance with our premium polish, giving it a glossy, flawless finish and long-lasting protection against dirt, scratches, and UV damage."
            color="rgba(20,179,125,0.15)"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function Item({ img, title, description, color, delay }) {
  return (
    <TransitionUp delay={delay}>
      <div className="rounded-3xl px-10 py-5 glass-effect-border relative">
        <img src={img} className="w-14 md:w-8" />
        <h2 className="text-main-secondary text-xl my-3 md:text-lg">{title}</h2>
        <p className="text-main-tertiary text-sm">{description}</p>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(40% 40% at 20% 20%, ${color}, transparent)`,
            opacity: 1,
            zIndex: -10,
          }}
        ></div>
      </div>
    </TransitionUp>
  );
}
