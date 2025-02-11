import { StaticImageData } from "next/image";
import avatar from "../../public/avatar.png";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "John Doe",
    role: "CEO",
    company: "Fake Corp",
    profileImg: avatar,
    testimonial:
      "Yoan is seriously one of the best frontend developers I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "John Doe",
    role: "CEO",
    company: "Fake Corp",
    profileImg: avatar,
    testimonial:
      "Yoan's work is truly outstanding, and I can't recommend him enough! He completely transformed our branding agency's website. Since launch, we've seen a significant jump in website traffic and, crucially, conversions.",
  },
  {
    name: "John Doe",
    role: "CEO",
    company: "Fake Corp",
    profileImg: avatar,
    testimonial:
      "Outstanding professional, developed our startup's website and delivered it in a very short time and with high quality.",
  }
];
