"use client";

import { BannerComponent } from "@/module/banner";
import { ServiceComponent } from "@/module/service";
import { CardThree } from "@/module/Animation/card";
import { FooterComponent } from "@/module/footer";
import { FormComponent } from "@/module/form";
import DentApp from "../assets/image/photo_2023-08-04_10-55-31.jpg";
import Breath from "../assets/image/61b1a4e68529d3b914d4d130d20fe7cd_640x480.jpg";
import Cheber from "../assets/image/iphone-640x480.jpeg";
import { Header } from "@/module/header";
import { GoMoveToTop } from "react-icons/go";
import { useRef } from "react";
import styles from "./page.module.css";
import "../app/globals.css";
import "../app/page.module.css";
import { Burger } from "@/module/burger";

export default function Home() {
  const onTopRef = useRef<HTMLDivElement>(null);
  const onFormRef = useRef<HTMLDivElement>(null);

  function handleTopClick() {
    if (onTopRef.current) {
      onTopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  function handleFormClick() {
    if (onFormRef.current) {
      onFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <main className={styles.main}>
        <div ref={onTopRef} className={styles.header_container}>
          <Header />
        </div>
        <div className={styles.icon_up_scroll} onClick={handleTopClick}>
          <GoMoveToTop size={50} />
        </div>
        <div className={styles.burger_container} ref={onTopRef}>
          <Burger />
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
          <BannerComponent scroll={handleFormClick} />
        </div>
        <div style={{ width: "100%", minHeight: "830px" }} ref={onFormRef}>
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
        <FooterComponent />
      </main>
    </>
  );
}
