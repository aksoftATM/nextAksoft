"use client";

import { useState } from "react";
import Link from "next/link";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import "react-modern-drawer/dist/index.css";
import styles from "./style.module.scss";
import dynamic from "next/dynamic";

const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

export const Burger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className={styles.burger}>
        <div className={styles.burger_logo}>
          <Link href="/">
            <h3 className={styles.h3}>aksoft</h3>
          </Link>
        </div>
        <div className={styles.burger_icon} onClick={() => setIsOpen(true)}>
          <RxHamburgerMenu size={40} />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        style={{ width: "100vw", height: "100vh", background: "black" }}
      >
        <div className={styles.drawer_wrapper}>
          <div className={styles.cross} onClick={() => setIsOpen(false)}>
            <RxCross1 size={40} />
          </div>
          <ul className={styles.menu_list} onClick={() => setIsOpen(false)}>
            <div className={styles.burger_logo}>
              <Link href="/">
                <h3 className={styles.h3}>aksoft</h3>
              </Link>
            </div>
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
        </div>
      </Drawer>
    </>
  );
};
