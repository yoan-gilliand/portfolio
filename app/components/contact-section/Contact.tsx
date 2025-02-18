import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../../fonts/monaSans";
import "../../animations/animate.css";
import AnimatedBody from "../../animations/AnimatedBody";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedWords2 from "../../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../../public/heart icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {useTranslations} from "next-intl";

const Contact = () => {
  const t = useTranslations('Contact');
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[75vh] md:py-20 lg:h-[75vh] lg:pt-0 lg:pb-28 3xl:h-[60vh]"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
            className={`flex flex-col items-start justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px] `}
        >
          <AnimatedWords2
              title={t('title')}
              style={
                "flex max-w-[500px] flex-col items-start text-left text-[150px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[170px] md:text-[200px] lg:text-center lg:text-[270px] xl:text-[390px]"
              }
          />
          <Image
              src={heartIcon}
              alt="Heart Icon"
              className="heartbeat md:-bottom-18 absolute -bottom-5 left-64 w-[120px] sm:-bottom-14 sm:left-[40%] md:left-[40%] md:w-[150px] lg:-bottom-16 lg:left-[42%] lg:w-[230px]"
          />
        </div>

        <div
            className="mt-20 flex w-full flex-col items-center justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div
              className="flex w-[350px] max-w-[90%] flex-col items-center text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
                text={
                  t('description')
                }
                className={
                  "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                }
            />
            <div className="mt-5 flex w-full justify-center md:justify-start">
              <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=${encodeURIComponent(t("email.subject"))}&body=${encodeURIComponent(t("email.body"))}`}
                  target="_blank"
                  aria-label={t('emailText')}
                  className="underline underline-offset-2 hover:no-underline"
              >
                <AnimatedBody text={t('emailText')} className={"text-center"}/>
              </Link>
            </div>
          </div>

          <div
              className="flex flex-col items-center gap-10 text-[16px] font-bold text-[#e4ded7] sm:flex-row sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <Link
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                target="_blank"
                aria-label="View GitHub Profile"
                className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5"
            >
              <FontAwesomeIcon
                  icon={faGithub as IconProp}
                  className="text-[16px] h-[1em] sm:text-[20px] md:text-[16px] lg:text-[28px] text-[#e4ded7]"
              />
              <AnimatedTitle
                  text={"GITHUB"}
                  className={
                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                  }
                  wordSpace={"mr-[0.25em]"}
                  charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"}
                target="_blank"
                aria-label="View LinkedIn Profile"
                className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5"
            >
              <FontAwesomeIcon
                  icon={faLinkedin as IconProp}
                  className="text-[16px] h-[1em] sm:text-[20px] md:text-[16px] lg:text-[28px] text-[#e4ded7]"
              />
              <AnimatedTitle
                  text={"LINKEDIN"}
                  className={
                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                  }
                  wordSpace={"mr-[0.25em]"}
                  charSpace={"mr-[0.01em]"}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
