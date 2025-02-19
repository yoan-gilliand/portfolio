"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import AnimatedTitle from "../animations/AnimatedTitle";
import { useTranslations } from "next-intl";

const NotFound = () => {
  const t = useTranslations("NotFound");
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-5 bg-[#0E1016] text-[#e4ded7]">
      <div>
        <AnimatedTitle
          text={t("text")}
          className={
            "px-5 text-center text-[25px] uppercase sm:text-[30px] md:text-[35px] lg:text-[40px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />
      </div>
    </div>
  );
};

export default NotFound;
