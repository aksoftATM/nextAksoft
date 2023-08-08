"use client";

import React, { useEffect, useRef } from "react";
import { Header } from "@/module/header";
import { CardThree } from "@/module/Animation/card";
import DentApp from "../assets/image/photo_2023-08-04_10-55-31.jpg";
import Breath from "../assets/image/61b1a4e68529d3b914d4d130d20fe7cd_640x480.jpg";
import Cheber from "../assets/image/iphone-640x480.jpeg";
import { GoMoveToTop } from "react-icons/go";
import { motion } from "framer-motion";
import Head from "next/head";
import "../app/globals.css";
import styles from "../styles/works.module.scss";

export default function works() {
  const dentappRef = useRef<HTMLDivElement>(null);
  const breathRef = useRef<HTMLDivElement>(null);
  const cheberRef = useRef<HTMLDivElement>(null);
  const onTopRef = useRef<HTMLDivElement>(null);

  function handleDentappClick() {
    if (dentappRef.current) {
      (dentappRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
    }
  }
  function handleBreathClick() {
    if (breathRef.current) {
      breathRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleCheberClick() {
    if (cheberRef.current) {
      cheberRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleTopClick() {
    if (onTopRef.current) {
      onTopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  //sdfs
  return (
    <div className={styles.works_main}>
      <Head>
        <title>aksofts works</title>
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
      <div className={styles.icon_up_scroll} onClick={handleTopClick}>
        <GoMoveToTop size={50} />
      </div>
      <div ref={onTopRef}>
        <Header />
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
          <div onClick={handleDentappClick}>
            <CardThree
              image={DentApp}
              name="DentApp"
              title="Приложение для автоматизации стоматологии."
            />
          </div>
          <div onClick={handleBreathClick}>
            <CardThree
              image={Breath}
              name="Ондуруш деми"
              title="Приложение для автоматизации швейных цехов."
            />
          </div>
          <div onClick={handleCheberClick}>
            <CardThree
              image={Cheber}
              name="Чебер"
              title="Приложение для автоматизации бронирования."
            />
          </div>
        </div>
        <div className={styles.more_info}>
          <div
            ref={dentappRef}
            className={styles.dentapp}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <h1>DentApp</h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3>Для чего был создан DentApp:</h3>
              <p style={{ color: "gray" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores itaque vitae suscipit facere alias, placeat a fuga id
                quos quasi.
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <h3>На чем был создан DentApp:</h3>
              <p style={{ color: "gray" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores itaque vitae suscipit facere alias, placeat a fuga id
                quos quasi.
              </p>
            </div>
          </div>
          <div
            ref={breathRef}
            className={styles.breath}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <h1>Breate of prodiction</h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3>Для чего был создан Breate of prodiction:</h3>
              <p style={{ color: "gray" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores itaque vitae suscipit facere alias, placeat a fuga id
                quos quasi.
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3>На чем был создан Breate of prodiction:</h3>
              <p style={{ color: "gray" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores itaque vitae suscipit facere alias, placeat a fuga id
                quos quasi.
              </p>
            </div>
          </div>
          <div
            ref={cheberRef}
            className={styles.cheber}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <h1>Cheber</h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3>Для чего был создан Cheber:</h3>
              <p style={{ color: "gray" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores itaque vitae suscipit facere alias, placeat a fuga id
                quos quasi.
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3>На чем был создан Cheber:</h3>
              <p style={{ color: "gray" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores itaque vitae suscipit facere alias, placeat a fuga id
                quos quasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
