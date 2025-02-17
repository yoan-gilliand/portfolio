'use client';

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import AnimatedTitle from "../animations/AnimatedTitle";
import {useTranslations} from "next-intl";  // Use this for Next.js 13+ client-side routing

const NotFound = () => {
    const t = useTranslations("NotFound");
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 5000);
    }, [router]);

    return (
        <div className="flex h-[100vh] flex-col items-center justify-center bg-[#0E1016] text-[#e4ded7] gap-5">
            <div>
                <AnimatedTitle
                    text={
                        t("text")
                    }
                    className={
                        "text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase text-center px-5"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
            </div>
        </div>
    );
};

export default NotFound;
