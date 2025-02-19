import SongCarousel from "./SongCarousel";
import "../../animations/animate.css";
import AnimatedBody from "../../animations/AnimatedBody";
import AnimatedTitle from "../../animations/AnimatedTitle";
import technologies from "./technologies.json";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  const generateSkillIconsUrl = (skills: string[], theme: string = "light") => {
    return `https://skillicons.dev/icons?i=${skills.join(",")}&theme=${theme}`;
  };
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={t("title")}
          className={
            "mb-10 text-center text-[40px] font-bold uppercase leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-left lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-center text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-left lg:text-[24px]">
            <AnimatedBody text={t("desc1")} />
            <AnimatedBody text={t("desc2")} />
            <AnimatedBody text={t("desc3")} />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-center text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-left lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={t("skills.languages")}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                <img
                  src={generateSkillIconsUrl(technologies.languages)}
                  alt="Languages"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={t("skills.frameworks")}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                <img
                  src={generateSkillIconsUrl(technologies.frameworks)}
                  alt="Frameworks"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={t("skills.databases")}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                <img
                  src={generateSkillIconsUrl(technologies.databases)}
                  alt="Databases"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={t("skills.tools")}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                <img
                  src={generateSkillIconsUrl(technologies.tools)}
                  alt="Tools"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text={t("carouselCaption")}
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
