import Head from "next/head";
import styles from "./style.module.scss";

export default function Contact() {
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

      <div className={styles.contact}>
        <div className={styles.contact_wrapper}>
          <div className={styles.contact_info}>
            <h1 className={styles.contact_desc}>Контакты</h1>
            <ul className={styles.contact_list}>
              <li className={styles.contact_item}>
                <h4>E-Mail</h4>
                <h5>aksoftkg@gmail.com</h5>
              </li>
              <li className={styles.contact_item}>
                <h4>Телефон</h4>
                <h5
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <a href="tel:+996999886644">+996999886644</a>
                  <a href="tel:+996505088099">+996505088099</a>
                </h5>
              </li>
              <li className={styles.contact_item}>
                <h4>Адрес</h4>
                <h5>г. Бишкек, ул. Байтик-Баатыра 86 / 4 этаж</h5>
              </li>
              <li className={styles.contact_item}>
                <h4>Соц. сети</h4>
                <h5>Instagram aksoftdev</h5>
              </li>
            </ul>
          </div>
          <div className={styles.location}>Локация</div>
        </div>
      </div>
    </>
  );
}
