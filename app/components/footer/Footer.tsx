import Link from "next/link";
import {motion} from "framer-motion";
import AnimatedBody from "../../animations/AnimatedBody";
import {useTranslations} from "next-intl";

const Footer = () => {

    const t = useTranslations('Footer');

    const year = new Date().getFullYear();

    return (
        <motion.section
            className="h-[15vh] w-full flex items-center justify-center border-t-[3px] border-[#e4ded7]/30 bg-[#0E1016] font-bold uppercase md:h-[20vh] lg:h-[10vh]"
            initial="initial"
            animate="animate"
        >
            <motion.div
                className="mx-auto flex w-[90%] flex-col items-center text-center text-[12px] text-[#e4ded7] sm:flex-row sm:justify-between sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
                <AnimatedBody text={`©Copyright ${year}`} className={"m-0 p-0"}/>
                <div className="flex flex-col sm:flex-row sm:gap-1 md:gap-2 items-center">
                    <AnimatedBody text={t("madeBy")} className={"m-0 p-0"}/>
                    <Link
                        href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                        target="_blank"
                        aria-label="Yoan's GitHub Profile"
                    >
        <span className="underline underline-offset-2 hover:no-underline">
          <AnimatedBody text={"Yoan Gilliand"} className={"m-0 p-0"}/>
        </span>
                    </Link>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Footer;
