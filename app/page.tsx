"use client";

import styles from "./page.module.css";
import { BannerComponent } from "@/module/banner";
import { ServiceComponent } from "@/module/service";
import { CardThree } from "@/module/Animation/card";
import { FooterComponent } from "@/module/footer";
import { FormComponent } from "@/module/form";
import DentApp from "../assets/image/photo_2023-08-04_10-55-31.jpg";
import Breath from "../assets/image/61b1a4e68529d3b914d4d130d20fe7cd_640x480.jpg";
import Cheber from "../assets/image/iphone-640x480.jpeg";
import { Header } from "@/module/header";
import Head from "next/head";
import { GoMoveToTop } from "react-icons/go";
import { useRef } from "react";

export default function Home() {
  const onTopRef = useRef<HTMLDivElement>(null);

  function handleTopClick() {
    if (onTopRef.current) {
      onTopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.icon_up_scroll} onClick={handleTopClick}>
        <GoMoveToTop size={50} />
      </div>
      <Head>
        <title>aksoft</title>
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
      <div ref={onTopRef} style={{ width: "100%" }}>
        <Header />
      </div>

      <div
        style={{
          width: "80vw",
          minHeight: "650px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BannerComponent />
      </div>
      <div style={{ width: "100%", minHeight: "830px" }}>
        <FormComponent />
      </div>
      <div
        style={{
          width: "100%",
          minHeight: "650px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h1>Наши работы</h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
      <FooterComponent />
    </main>
  );
}
