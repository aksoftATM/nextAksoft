"use client";

import Typer from "@/components/animation/Typer";
import styles from "./style.module.scss";

export const BannerComponent = ({ scroll }: any) => {
  return (
    <>
      <div className={styles.ser_bn}>
        <div className={styles.serbn_wrapper}>
          <div className={styles.serbn_info}>
            <h1 className={styles.top_text}>
              Разработка сайтов, веб-сервисов и
            </h1>
            <h1 className={styles.mid_text}>мобильных приложений</h1>
            <div className={styles.under_text}>
              <Typer text="Автоматизации бизнес-процессов с помощью современных технологии." />
            </div>
            <button className={styles.serbn_btn} onClick={scroll}>
              Бесплатная консультация
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
