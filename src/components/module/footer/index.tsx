"use client";

import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import styles from "./style.module.scss";
import Link from "next/link";
import Typer from "@/components/animation/Typer";

export const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mini_slogan}>
        <Typer text="Создавать - это наша страсть, это то, что делает нас живыми." />
      </div>
      <div className={styles.contact}>
        <Link href="/" className={styles.footer_logo}>
          <h1 className={styles.logo}>aksoft</h1>
          <span className={styles.footer_sub_text}>
            © 2023 aksoft <br /> Все права защищены.
          </span>
        </Link>
        <ul className={styles.menu_list}>
          <Link href="/">
            <li className={styles.menu_item}>Главная</li>
          </Link>
          <Link href="/works">
            <li className={styles.menu_item}>Наши работы</li>
          </Link>
          <Link href="/service">
            <li className={styles.menu_item}>Услуги</li>
          </Link>
          <Link href="/about">
            <li className={styles.menu_item}>О нас</li>
          </Link>
          <Link href="/contact">
            <li className={styles.menu_item}>Контакты</li>
          </Link>
        </ul>
        <div className={styles.social}>
          <a target="blank" href="https://www.instagram.com/aksoftdev/">
            <FaInstagram size={30} />
          </a>
          <a target="blank" href="tg://resolve?domain=jakshybala">
            <LiaTelegramPlane size={30} />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/company/aksoft/?originalSubdomain=kg"
          >
            <AiOutlineLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};
