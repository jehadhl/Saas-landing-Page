"use client";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyrmidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={productRef}
      className="bg-gradient-to-b overflow-x-clip from-[#ffffff] to-[#d2dcff] py-24"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title  mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-des mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            nostrum perspiciatis impedit reiciendis saepe accusamus. Corrupti,
            commodi.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product_image" className="mt-10" />
          <motion.img
            src={pyrmidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tube Image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
