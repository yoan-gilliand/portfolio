"use client";
import Hero from "../components/hero-section/Hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
import { ScrollerMotion } from "scroller-motion";
import PreLoader from "../animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "../utils/BlobityConfig";
import NavBar from "../components/navbar/NavBar";
import {useTranslations} from 'next-intl';
import {Link} from '../../i18n/routing';


import dynamic from "next/dynamic";
import Reviews from "../components/reviews-section/ReviewGrid";
const Work = dynamic(() => import("../components/work-section/Work"));
const About = dynamic(() => import("../components/about-section/About"));
const Blog = dynamic(() => import("../components/blog-section/BlogGrid"));
const Contact = dynamic(() => import("../components/contact-section/Contact"));
const Footer = dynamic(() => import("../components/footer/Footer"));

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <PreLoader />

      <NavBar />

      {/* <ScrollerMotion> */}
      <main className="flex flex-col items-center justify-center">
        <Hero/>
        <Work/>
        {/*<Reviews/>*/}
        <About/>
        <Blog/>
        <Contact/>
        <Footer/>
      </main>
      {/* </ScrollerMotion> */}
    </>
  );
}