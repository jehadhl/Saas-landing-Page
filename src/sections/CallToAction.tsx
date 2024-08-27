import ArrowRight from "@/assets/arrow-right.svg";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from white to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-des mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts
          </p>
          <Image
            src={starImage}
            alt="image"
            width={360}
            className="absolute  -left-[350px] -top-[137px]"
          />

          <Image
            src={springImage}
            alt="image"
            width={360}
            className="absolute  -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex items-center mt-10 gap-2 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span> <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
