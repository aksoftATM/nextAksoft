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
import Image from "next/image";

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
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <base href="aksoft.dev" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Language" content="ru" />
        <title>
          Aksoft - разработка мобильного приложения и CRM систем Бишкек
        </title>
        <meta
          name="description"
          content="Компания Aksoft предлагает разработку сайтов, 
        CRM систем, мобильных приложений под Android и iOS, а также автоматизацию 
        бизнеса в Бишкеке. Работаем с передовыми технологиями, гарантируем высокое качество."
        ></meta>
        <meta
          name="keywords"
          content="разработка сайтов Бишкек, разработка CRM Бишкек, приложения под Android,
         приложения под iOS, автоматизация бизнеса, разработка приложений, Создание CRM систем, мобильное приложение для продажи,
         Аренда инструментов, Продажа в рассрочку, интегрированные сайты "
        ></meta>
        <meta
          property="og:title"
          content="Разработка сайтов, CRM и мобильных приложений"
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aksoft.dev/" />
        <meta
          property="og:site_name"
          content="Aksoft - разработка мобильного приложения Бишкек"
        />
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://aksoft.dev/"></link>
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
        <div
          style={{
            width: "100%",
            marginBottom: "50px",
            paddingTop: "100px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            maxWidth: "1100px",
            fontSize: "18px",
            padding: "0 20px 0 20px",
          }}
          className="forma"
        >
          <p>
            Компания Aksoft предоставляет услуги по разработке
            высокотехнологичных веб-приложений, сайтов и мобильных приложений.
            Мы специализируемся на создании индивидуальных программных
            продуктов, автоматизированных систем и цифровых сервисов для решения
            бизнес-задач любого масштаба.{" "}
          </p>
          <p>
            Наш подход основан на гибкости и полной ориентации на потребности
            заказчика. Мы быстро реагируем на изменение требований,
            совершенствуем продукты «на лету».
          </p>
          <p>
            Благодаря отлаженным процессам на основе agile-методологий, вы
            получаете нужный результат быстро и без лишних затрат. Мы специально
            исключаем бюрократические проволочки, чтобы сконцентрироваться на
            главном - создании продукта мирового уровня с передовыми
            технологиями.
          </p>
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
