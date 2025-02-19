import { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import BlogCard from "./BlogCard";
import AnimatedWords2 from "../../animations/AnimatedWords2";
import { monaSans } from "../../fonts/monaSans";
import AnimatedBody from "../../animations/AnimatedBody";
import { useTranslations } from "next-intl";
import { BlogPost } from "./BlogPost";

const BLOG_QUERY = gql`
  query GetBlogPosts($username: String!) {
    user(username: $username) {
      publications(first: 1) {
        edges {
          node {
            posts(first: 3) {
              edges {
                node {
                  id
                  title
                  url
                  publishedAt
                  coverImage {
                    url
                  }
                  brief
                  readTimeInMinutes
                  reactionCount
                  tags {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface GraphQLResponse {
  user: {
    publications: {
      edges: Array<{
        node: {
          posts: {
            edges: Array<{
              node: {
                id: string;
                title: string;
                url: string;
                publishedAt: string;
                coverImage?: { url: string };
                brief: string;
                readTimeInMinutes: number;
                reactionCount: number;
                tags: Array<{ name: string }>;
              };
            }>;
          };
        };
      }>;
    };
  };
}

const Blog = () => {
  const t = useTranslations("Blog");

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const data = await request<GraphQLResponse>(
          "https://gql.hashnode.com",
          BLOG_QUERY,
          { username: process.env.NEXT_PUBLIC_BLOG_USERNAME }
        );

        const posts: BlogPost[] =
          data.user.publications.edges[0]?.node.posts.edges.map((edge) => ({
            id: edge.node.id,
            title: edge.node.title,
            url: edge.node.url,
            readable_publish_date: new Date(
              edge.node.publishedAt
            ).toLocaleDateString(),
            cover_image: edge.node.coverImage?.url || "",
            description: edge.node.brief,
            reading_time_minutes: edge.node.readTimeInMinutes,
            public_reactions_count: edge.node.reactionCount,
            tags: edge.node.tags.map((tag) => tag.name).join(", "),
          })) || [];

        console.log("Fetched posts:", posts);
        setBlogPosts(posts);
      } catch (err) {
        setError("Failed to fetch blog posts");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        {" "}
        <AnimatedWords2
          title={"Blog"}
          style={`flex max-w-[500px] pr-5 flex-col items-start text-left ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,10vw,155.04px)]`}
        />
        <AnimatedBody
          text={t("description")}
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <div className="lg:w- [850px] grid w-[90%] max-w-[1200px] grid-cols-1 grid-rows-3 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          blogPosts.map((blog, index) => (
            <BlogCard key={blog.id} {...blog} available={true} index={index} />
          ))
        )}
      </div>
    </section>
  );
};

export default Blog;
