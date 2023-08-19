"use client";

import React, { useEffect, useRef } from "react";
import { Header } from "@/module/header";
import { CardThree } from "@/module/Animation/card";
import DentApp from "../assets/image/photo_2023-08-04_10-55-31.jpg";
import Breath from "../assets/image/61b1a4e68529d3b914d4d130d20fe7cd_640x480.jpg";
import Cheber from "../assets/image/iphone-640x480.jpeg";
import { GoMoveToTop } from "react-icons/go";
import Head from "next/head";
import "../app/globals.css";
import styles from "../styles/works.module.scss";
import { Burger } from "@/module/burger";
import { FooterComponent } from "@/module/footer";

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
    <>
      <div className={styles.works_main}>
        <Head>
          <title>aksofts works</title>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
          <base href="aksoft.dev" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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
        <div ref={onTopRef} className={styles.header_container}>
          <Header />
        </div>
        <div ref={onTopRef} className={styles.burger_container}>
          <Burger />
        </div>
        <div
          style={{
            width: "100%",
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
              flexWrap: "wrap",
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
              <h1 className={styles.title_name}>DentApp</h1>
              <div className={styles.title}>
                <p className={styles.phara}>
                  Добро пожаловать в будущее стоматологической заботы с нашим
                  инновационным приложением! Мы с гордостью представляем вам
                  революционное решение для стоматологических клиник, которое
                  упростит и усовершенствует ваши операции, обеспечивая
                  беспрецедентный уровень комфорта для вас и ваших пациентов.
                  <br /> 🏥 Наше приложение - это интеллектуальная центральная
                  система для управления вашей стоматологической клиникой. С
                  момента, как пациент пересекает ваш порог, и до момента, как
                  уходит с улыбкой, наше приложение предоставляет безупречный
                  сервис и оптимизированные процессы. <br /> 💼 Система учета
                  клиентов позволяет вам легко и удобно хранить всю важную
                  информацию о ваших пациентах: контакты, историю зубов,
                  процедуры и даже предпочтения. Никогда больше не теряйте
                  данные или забывайте детали. <br /> 📅 Предварительная запись
                  клиентов теперь максимально удобна. Ваши пациенты могут
                  выбрать удобное для них время и день, и система автоматически
                  учитывает доступные слоты. Никакой головной боли с
                  организацией расписания! <br /> 📲 Наши уведомления через
                  WhatsApp и SMS держат ваших пациентов в курсе. Они получат
                  напоминания о предстоящей записи, а также важные сообщения от
                  клиники. Коммуникация становится легкой и эффективной. <br />{" "}
                  📊 Аналитика и отчеты - это инструмент, который помогает вам
                  принимать информированные решения. Вы сможете анализировать
                  данные по посещениям, процедурам, доходам и многому другому.
                  Это помогает вам улучшить качество обслуживания и
                  оптимизировать бизнес-процессы. <br /> 🚀 Мы готовы помочь
                  вашей стоматологической клинике взлететь на новый уровень.
                  Ваша эффективность, удовлетворенность пациентов и рост бизнеса
                  - вот наши главные приоритеты. <br /> 🌟 Откройте двери в
                  будущее стоматологии с нашим приложением. Свяжитесь с нами
                  сегодня, чтобы узнать, как мы можем адаптировать наше решение
                  под ваши потребности.
                </p>
              </div>
            </div>
            <div ref={breathRef} className={styles.breath}>
              <h1 className={styles.title_name}>Breate of prodiction</h1>
              <div className={styles.title}>
                <p className={styles.phara}>
                  Добро пожаловать в мир инновационной текстильной
                  автоматизации! Представляем вам наше уникальное приложение,
                  разработанное специально для оптимизации и улучшения
                  производства в вашем швейном цехе. <br /> 🔌 Связь в режиме
                  реального времени: Наше приложение позволяет вам подключиться
                  к вашему производству в любой точке мира. Теперь вы можете
                  мониторить статус производства, отслеживать ход выполнения
                  заказов и получать уведомления о важных событиях – все это в
                  режиме онлайн. <br /> 📊 Отчетность и аналитика: Применяя
                  передовые аналитические инструменты, приложение генерирует
                  подробные отчеты о производственной деятельности. Вы сможете
                  оценить эффективность каждого сотрудника, контролировать
                  расход материалов, а также оптимизировать рабочие процессы для
                  достижения максимальной производительности. <br /> 👩‍🔧 Учет
                  рабочего времени: Отслеживайте рабочее время сотрудников в
                  режиме реального времени. Вы точно узнаете, сколько времени
                  каждый работник провел за задачами, повышая точность учета и
                  обеспечивая справедливую оплату труда.
                  <br />
                  🌐 Глобальное сотрудничество: Приложение создает возможность
                  для эффективного сотрудничества с партнерами и клиентами по
                  всему миру. Вы сможете легко обмениваться информацией,
                  делиться обновлениями и координировать производство даже на
                  больших расстояниях.
                </p>
              </div>
            </div>
            <div ref={cheberRef} className={styles.cheber}>
              <h1 className={styles.title_name}>Cheber</h1>
              <div className={styles.title}>
                <p className={styles.phara}>
                  Добро пожаловать в мир уникальной автоматизации для вашего
                  бизнеса! Представляем вам наше инновационное приложение,
                  специально разработанное для всех типов компаний,
                  предоставляющих услуги, будь то барбершоп, салон красоты,
                  студия массажа или что-либо еще. Позвольте вашему бизнесу
                  войти в новую эру эффективности и удобства.
                  <br />
                  🗓️ Никаких сложных телефонных звонков или личных визитов
                  больше не нужно. Наше приложение позволяет вашим клиентам
                  предварительно записаться на услуги прямо из дома или в любом
                  другом удобном месте. Просто пара касаний – и вы в списке
                  ожидания.
                  <br />
                  📩 С легкостью поддерживайте активную связь с вашими клиентами
                  через SMS и WhatsApp уведомления. Напоминания о предстоящих
                  записях, акциях или специальных предложениях будут
                  доставляться напрямую в их карманы.
                  <br />
                  📊 Наша мощная аналитика поможет вам лучше понять ваш бизнес.
                  Получайте детальные отчеты по активности клиентов,
                  анализируйте популярные услуги, оценивайте эффективность
                  сотрудников и принимайте обоснованные решения для дальнейшего
                  роста.
                  <br />⏰ Организуйте свой рабочий день по минутам! С нашим
                  приложением вы можете легко управлять расписанием сотрудников,
                  благодаря функции предварительной организации рабочего дня.
                  Никаких недоразумений или перекрестных записей – только
                  четкость и планирование ваших ресурсов. Не упустите шанс
                  сделать ваш бизнес более доступным и удобным для ваших
                  клиентов. Переходите на новый уровень с нашим уникальным
                  приложением для автоматизации услуг. Создайте более
                  эффективное рабочее окружение, где клиенты могут наслаждаться
                  беззаботным процессом заказа и получения услуг.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
