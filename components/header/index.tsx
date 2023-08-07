"use client";
import Link from "next/link";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <h3 className={styles.h3}>aksoft</h3>
        </div>
        <div className={styles.header_menu}>
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              <Link href="/">Главная</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/works">Наши работы</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/service">Услуги</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/about">О нас</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/contact">Контакты</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
