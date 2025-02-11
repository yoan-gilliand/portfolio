export type blogProps = {
  title: string;
  image: string;
  date: string;
  url: string;
  available: boolean;
  index: number;
};

export const blogDetails = [
  {
    title: "How to Publish a Next.js App on Vercel",
    image:
      "https://repository-images.githubusercontent.com/659798237/9a6acdfe-6f48-47a7-9420-08047878569c",
    date: "FEB 2025",
    url: "https://dev.to/yoan-gilliand/how-to-publish-a-nextjs-app-on-vercel-f5k",
    available: true,
  },
  {
    title: "Coming Soon",
    image:
      "https://citygem.app/wp-content/uploads/2024/08/placeholder-1-1.png",
    date: "",
    url: "",
    available: false,
  },
  {
    title:
      "Coming Soon",
    image:
      "https://citygem.app/wp-content/uploads/2024/08/placeholder-1-1.png",
    date: "",
    url: "",
    available: false,
  },
];
