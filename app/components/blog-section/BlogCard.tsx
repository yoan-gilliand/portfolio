import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "../../globals.css";
import { BlogPost } from "./BlogPost";

interface BlogCardProps extends BlogPost {
  available: boolean;
  index: number;
}

const BlogCard = ({
  title,
  cover_image,
  url,
  readable_publish_date,
  available,
  index,
  reading_time_minutes,
  public_reactions_count,
  tags,
  description,
}: BlogCardProps) => {
  const tagsArray = tags.split(",").map((tag) => tag.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.1 * index,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="relative flex flex-col items-center justify-start rounded-2xl bg-[#212531]"
      style={{ height: "100%" }}
    >
      <div className="mt-4 flex h-full w-[90%] flex-col lg:mt-5 lg:w-[92%]">
        <div className="aspect-[800/420] w-full">
          {" "}
          <Image
            src={cover_image}
            alt={title}
            width={1600}
            height={840}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        <h3 className="mt-4 break-all text-lg uppercase leading-[1em] tracking-tight line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <div className="mt-3 text-sm text-[#95979D] line-clamp-3">
          {description}
        </div>

        <div className="mt-3 flex min-h-[14px] flex-wrap gap-2">
          {" "}
          {tagsArray.length > 0 &&
            tagsArray[0] !== "" &&
            tagsArray.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-[#0E1016] px-3 py-1 text-[12px] text-[#95979D]"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>

      <div className="mt-auto mb-4 flex w-[90%] items-center justify-between text-[14px] font-bold text-[#95979D]">
        {available ? (
          <>
            <div className="flex items-center gap-2">
              <p>{readable_publish_date}</p>
              <span>•</span>
              <p>{reading_time_minutes} min</p>
              <span>•</span>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faHeart} className="text-[12px]" />
                <p>{public_reactions_count}</p>
              </div>
            </div>
            <Link
              href={url}
              target="_blank"
              className="rounded-full"
              aria-label="Open Blog Post"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-[16px] rounded-full bg-[#0E1016] p-3 text-[16px] text-[#fff] md:w-[20px] md:text-[20px] lg:w-[18px] lg:p-4 lg:text-[18px]"
                data-blobity
                data-blobity-radius="30"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="false"
              />
            </Link>
          </>
        ) : (
          <>
            <p>Coming soon</p>
            <div className="mb-10 md:mb-14"></div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default BlogCard;
