"use client";

import { FaInstagram } from "react-icons/fa";
import Typer from "../../components/UI/Typer";
import styles from "./style.module.scss";

export const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.h1}>Aksoft</h1>
      <div className={styles.mini_slogan}>
        <Typer text="Создавать - это наша страсть, это то, что делает нас живыми." />
      </div>
      <div className={styles.contact}>
        <p className={styles.p}>+996999886644</p>
        <p className={styles.p}>aksoft@gmail.com</p>
        <p className={styles.p}>г. Бишкек, ул. Байтик-Баатыра 86 / 4 этаж</p>
        <a target="blank" href="https://www.instagram.com/aksoftdev/">
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  );
};
