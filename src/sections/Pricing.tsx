import { pricingTiers } from "@/utils/constant";
import CheckIcon from "@/assets/check.svg";

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title">Pricing</h2>
          <p className="section-des mt-5">
            Free forever, Upgrade for unlimited tasks, better security, and
            exlusive feetures.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((item, index) => {
            return (
              <div
                key={index}
                className={`card ${
                  item.inverse && "bg-black border-black text-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-lg font-bold  ${
                      item.inverse ? "text-white/60" : "text-black/50"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      {" "}
                      <span className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] text-transparent bg-clip-text font-medium">
                        Popular{" "}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${item.monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>
                <button
                  className={`btn ${
                    item.inverse ? "bg-white text-black" : "btn-primary"
                  }  mt-[30px] w-full `}
                >
                  {item.buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {item.features.map((feature, id) => {
                    return (
                      <li key={id} className="text-sm flex items-center gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
