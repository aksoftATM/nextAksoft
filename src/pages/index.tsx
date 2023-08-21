"use client";

import Head from "next/head";
import DentApp from "@/assets/image/photo_2023-08-04_10-55-31.jpg";
import Breath from "@/assets/image/61b1a4e68529d3b914d4d130d20fe7cd_640x480.jpg";
import Cheber from "@/assets/image/iphone-640x480.jpeg";
import { Header } from "@/components/module/header";
import { Burger } from "@/components/module/burger";
import { BannerComponent } from "@/components/module/banner";
import { FormComponent } from "@/components/module/form";
import { CardThree } from "@/components/animation/card";
import { ServiceComponent } from "@/components/module/cardService";
import { FooterComponent } from "@/components/module/footer";
import { useRef } from "react";
import { GoMoveToTop } from "react-icons/go";
import styles from "@/styles/home.module.css";

export default function Home() {
  // const onTopRef = useRef<HTMLDivElement>(null);
  const onFormRef = useRef<HTMLDivElement>(null);

  // function handleTopClick() {
  //   if (onTopRef.current) {
  //     onTopRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }
  function handleFormClick() {
    if (onFormRef.current) {
      onFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <Head>
        <title>aksofts</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <base href="aksoft.dev" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Разработка приложений и сайтов aksoft, автоматизация бизнес машин"
        />
        <meta
          name="keywords"
          content="разработка приложений, разработка сайтов, разработка сайтов бишкек, разработка приложений бишкек, автоматизация бизнеса"
        />
        <meta property="og:title" content="Разработка приложений" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aksoft.dev/" />
        <meta
          property="og:site_name"
          content="aksoft - разработка приложений"
        />
      </Head>
      <main className={styles.main}>
        {/* <div className={styles.icon_up_scroll} onClick={handleTopClick}>
          <GoMoveToTop size={50} />
        </div> */}
        {/* <div ref={onTopRef} style={{ width: "100%" }}></div> */}
        <div
          style={{
            width: "80vw",
            minHeight: "650px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BannerComponent scroll={handleFormClick} />
        </div>
        <div style={{ width: "100%", marginBottom: "50px" }} ref={onFormRef}>
          <FormComponent />
        </div>
        <div className={styles.our_work}>
          <h1>Наши работы</h1>
          <div className={styles.our_work_card}>
            <a href="https://dentapp.online" target="_blank">
              <CardThree
                image={DentApp}
                name="DentApp"
                title="Приложение для автоматизации стоматологии."
              />
            </a>
            <CardThree
              image={Breath}
              name="Ондуруш деми"
              title="Приложение для автоматизации швейных цехов."
            />
            <a href="http://cheber.org" target="_blank">
              <CardThree
                image={Cheber}
                name="Чебер"
                title="Приложение для автоматизации бронирования."
              />
            </a>
          </div>
        </div>
        <ServiceComponent />
      </main>
    </>
  );
}
