import { Header } from "@/module/header";
import "../app/globals.css";
import Head from "next/head";
import styles from "../styles/about.module.scss";
import { Burger } from "@/module/burger";

export default function about() {
  return (
    <div>
      <Head>
        <title>aksofts info</title>
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
      about
    </div>
  );
}
