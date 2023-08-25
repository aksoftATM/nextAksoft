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
import { useEffect, useRef } from "react";
import styles from "@/styles/home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  function smoothScrollTo(targetSelector: any) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <Head>
        <title>aksoft - Разработка веб приложений Бишкек</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <base href="aksoft.dev" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Language" content="ru" />
        <meta
          name="description"
          content="Разработка приложений и сайтов, Современное решение для автоматизации бизнес задач.
                    Индивидуальное решение под ваши нужды"
        />
        <meta
          name="keywords"
          content="Веб приложение Бишкек, aksoft, разработка приложений, разработка сайтов, разработка 
          сайтов бишкек, разработка приложений бишкек, автоматизация бизнеса,Веб-разработка в Бишкеке,
          Разработка сайтов Бишкек,Создание CRM приложений,Профессиональные сайты и CRM,
          Разработка веб-приложений,Оптимизация бизнес-процессов,Адаптивный дизайн сайтов,
          Лучшие CRM решения,Цифровые решения для бизнеса,Комплексное веб-продвижение,
          Кастомные CRM инструменты,Интеграция CRM и сайтов,Решения для эффективного 
          управления клиентами,Мобильные CRM приложения,Веб-технологии для бизнеса,
          Компания по разработке сайтов и CRM,Управление продажами и клиентами,Индивидуальный дизайн и разработка"
        />
        <meta
          property="og:title"
          content="Разработка веб приложении для автоматизации бизнеса"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aksoft.dev/" />
        <meta
          property="og:site_name"
          content="aksoft - разработка приложений Бишкек"
        />
      </Head>
      <main className={styles.main}>
        <div
          style={{
            width: "80vw",
            minHeight: "650px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BannerComponent scroll={smoothScrollTo} />
        </div>
        <div
          style={{ width: "100%", marginBottom: "50px", paddingTop: "100px" }}
          className="forma"
        >
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
