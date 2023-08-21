import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import { FooterComponent } from "@/components/module/footer";
import { Header } from "@/components/module/header";
import { Burger } from "@/components/module/burger";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    function smoothScrollTo(targetSelector: any) {
      const targetElement = document.querySelector(targetSelector);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "auto" });
      }
    }
    smoothScrollTo(".header");
  }, [router]);

  return (
    <>
      {/* // <AnimatePresence mode="wait">
    //   <motion.div
    //     key={router.route}
    //     initial="initialState"
    //     animate="animateState"
    //     exit="exitState"
    //     transition={{
    //       duration: 0.1,
    //     }}
    //     variants={{
    //       initialState: {
    //         opacity: 0,
    //       },
    //       animateState: {
    //         opacity: 1,
    //       },
    //       exitState: {
    //         opacity: 0,
    //       },
    //     }}
    //   > */}
      <div className="header"></div>
      <div className="header_container">
        <Header />
      </div>
      <div className="burger_container">
        <Burger />
      </div>
      <Component {...pageProps} />
      <FooterComponent />
      {/* </motion.div>
      </AnimatePresence> */}
    </>
  );
}
