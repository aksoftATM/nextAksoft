import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import { FooterComponent } from "@/components/module/footer";
import { Header } from "@/components/module/header";
import { Burger } from "@/components/module/burger";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
