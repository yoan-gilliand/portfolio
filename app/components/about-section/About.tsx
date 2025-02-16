import SongCarousel from "./SongCarousel";
import "../../animations/animate.css";
import AnimatedBody from "../../animations/AnimatedBody";
import AnimatedTitle from "../../animations/AnimatedTitle";
import technologies from './technologies.json';

const About = () => {
    const generateSkillIconsUrl = (skills: string[], theme: string = 'light') => {
        return `https://skillicons.dev/icons?i=${skills.join(',')}&theme=${theme}`;
    };
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={
                        "I MAKE CODE EFFORTLESS, WEBSITES SEAMLESS AND EXPERIENCES IMPACTFUL."
                    }
                    className={
                        "mb-10 text-center lg:text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-center lg:text-left text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
                        <AnimatedBody
                            text={
                                "I specialize in full-stack development, building web applications and user-centric solutions for modern businesses. I’m passionate about leveraging the power of technology to solve problems and create seamless digital experiences."
                            }
                        />
                        <AnimatedBody
                            text={
                                "Currently, I’m a software engineering student at the Haute école d'ingénierie et d'architecture de Fribourg (HEIA-FR), gaining valuable experience in both front-end and back-end development. I'm constantly exploring new technologies, from Node.js and Vue.js to MySQL, ensuring that I stay at the forefront of industry best practices."
                            }
                            className={"hidden"}
                        />
                        <AnimatedBody
                            text={
                                "When I’m not coding, I love collaborating with peers in tech communities, discovering innovative solutions, and keeping up with the latest in UI/UX design. In my free time, I’m often tinkering with personal projects, enjoying time with friends, or diving into new music genres."
                            }
                        />
                        <AnimatedBody
                            text={
                                "I’m always looking for exciting opportunities to collaborate and create meaningful applications. Feel free to reach out!"
                            }
                        />
                    </div>

                    <div
                        className="mb-24 flex w-[100%] flex-col gap-4 text-center lg:text-left text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
                        <div className="flex flex-col gap-4 md:gap-3">
                            <AnimatedTitle
                                text={"Languages"}
                                className={
                                    "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                <img
                                    src={generateSkillIconsUrl(technologies.languages)}
                                    alt="Languages"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                        <AnimatedTitle
                                text={"Frameworks & Libraries"}
                                className={
                                    "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                <img
                                    src={generateSkillIconsUrl(technologies.frameworks)}
                                    alt="Frameworks"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                        <AnimatedTitle
                                text={"Databases"}
                                className={
                                    "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                <img
                                    src={generateSkillIconsUrl(technologies.databases)}
                                    alt="Databases"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                        <AnimatedTitle
                                text={"Tools"}
                                className={
                                    "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                <img
                                    src={generateSkillIconsUrl(technologies.tools)}
                                    alt="Tools"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
                    <SongCarousel/>
                    <AnimatedBody
                        text="A few songs I can recommend if you're looking for some fresh and hard tunes :)"
                        className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
