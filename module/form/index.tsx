"use client";

import { useState } from "react";
import styles from "./style.module.scss";

export const FormComponent = () => {
  const [fName, setFName] = useState<string>();
  const [fEmail, setFEmail] = useState<string>();
  const [fNumber, setFNumber] = useState<number | string>();
  return (
    <>
      <div className={styles.form}>
        <div className={styles.form_wrapper}>
          <div className={styles.form_title}>
            <h1 className={styles.h1}>Оставить заявку</h1>
          </div>
          <img
            src="https://mitapp.pro/static/img/mac.png"
            alt=""
            className={styles.img}
          />
          <div className={styles.inp_place}>
            <div className={styles.top_inp}>
              <input
                className={styles.input}
                type="text"
                placeholder="Имя"
                onChange={(e) => setFName(e.target.value)}
              />
              <input
                className={styles.input}
                type="text"
                placeholder="E-mail"
                onChange={(e) => setFEmail(e.target.value)}
              />
            </div>
            <input
              className={styles.input}
              type="text"
              placeholder="Номер телефона"
              onChange={(e) => setFNumber(e.target.value)}
            />
          </div>
          <button className={styles.form_btn}>Отправить</button>
        </div>
      </div>
    </>
  );
};
