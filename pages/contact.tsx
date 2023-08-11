import { Header } from "@/module/header";
import "../app/globals.css";
import Head from "next/head";
import styles from "../styles/contact.module.scss";
import { Burger } from "@/module/burger";

export default function contact() {
  return (
    <>
      <Head>
        <title>aksofts contacts</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <base href="aksoft.dev" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
      <div className={styles.header_container}>
        <Header />
      </div>
      <div className={styles.burger_container}>
        <Burger />
      </div>

      <div className={styles.contact}>
        <div className={styles.contact_wrapper}>
          <div className={styles.contact_info}>
            <h1 className={styles.contact_desc}>Контакты</h1>
            <ul className={styles.contact_list}>
              <li className={styles.contact_item}>
                <h4>E-Mail</h4>
                <h5>aksoft@gmail.com</h5>
              </li>
              <li className={styles.contact_item}>
                <h4>Телефон</h4>
                <h5>
                  +996556112212
                  <br />
                  +996501112212
                </h5>
              </li>
              <li className={styles.contact_item}>
                <h4>Адрес</h4>
                <h5>г. Бишкек, ул. Байтик-Баатыра 86 / 4 этаж</h5>
              </li>
              <li className={styles.contact_item}>
                <h4>Соц. сети</h4>
                <h5>Instagram</h5>
              </li>
            </ul>
          </div>
          <div className={styles.location}>Локация</div>
        </div>
      </div>
    </>
  );
}
