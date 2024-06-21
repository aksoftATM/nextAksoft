"use client";
import Link from "next/link";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <Link href="/">
            <h3 className={styles.h3}>aksoft</h3>
          </Link>
        </div>
        <div className={styles.header_menu}>
          <ul className={styles.menu_list}>
            <Link href="/">
              <li className={styles.menu_item}>Главная</li>
            </Link>
            <Link href="/news">
              <li className={styles.menu_item}>Новости</li>
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
        </div>
      </div>
    </header>
  );
};
