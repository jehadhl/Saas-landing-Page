import { testimonials } from "@/utils/constant";
import clsx from "clsx";
import Image from "next/image";

export const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  const TestimonialsColoum = (props: {
    className?: string;
    testimonials: typeof testimonials;
  }) => (
    <div
      className={clsx(
        `flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]`,
        props.className
      )}
    >
      {props.testimonials.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div>{item.text}</div>
            <div className="flex items-center gap-2 mt-5">
              <Image
                src={item.imageSrc}
                width={40}
                height={40}
                alt={item.name}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">
                  {item.name}
                </div>
                <div className="leading-5 tracking-tight">{item.username}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-des mt-5">
            From intuitive design tp powerful features ,our app has become an
            essentail tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <TestimonialsColoum testimonials={firstColumn} />
          <TestimonialsColoum
            testimonials={secondColumn}
            className="hidden md:flex"
          />
          <TestimonialsColoum
            testimonials={thirdColumn}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};
