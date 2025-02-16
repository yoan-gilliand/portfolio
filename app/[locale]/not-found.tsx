'use client';

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import AnimatedTitle from "../animations/AnimatedTitle";  // Use this for Next.js 13+ client-side routing

const NotFound = () => {
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
                        "Wrong path ! You will be redirected to the homepage shortly..."
                    }
                    className={
                        "text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
            </div>
        </div>
    );
};

export default NotFound;
