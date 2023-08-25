import Head from "next/head";
import styles from "./style.module.scss";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Контактны данные компании - aksoft</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <base href="aksoft.dev" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Language" content="ru" />
        <meta
          name="description"
          content="Контактные данные it компании aksoft, город Бишкек,Разработка приложений и сайтов aksoft, автоматизация бизнес машин"
        />
        <meta
          name="keywords"
          content="aksoft контакты,телефон номер whatsapp, it компания Бишкек, разработка сайтов, разработка сайтов бишкек, разработка 
          приложений бишкек, автоматизация бизнеса,Веб-разработка в Бишкеке, Разработка сайтов Бишкек, Создание CRM приложений, Профессиональные
           сайты и CRM,Разработка веб-приложений,Оптимизация бизнес-процессов"
        />
        <meta
          property="og:title"
          content="Контактные данные ИТ компании aksoft"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aksoft.dev/" />
        <meta
          property="og:site_name"
          content="aksoft - разработка веб приложений Бишкек"
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
                <h5>
                  Instagram{" "}
                  <a href="https://www.instagram.com/aksoftdev/" target="blank">
                    aksoftdev
                  </a>
                </h5>
              </li>
            </ul>
          </div>
          <div className={styles.location}>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  src="https://maps.google.com/maps?q=Aksoftdev&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  id="gmap_canvas"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
                <style>{`
        .mapouter {
          position: relative;
          text-align: right;
          height: 100%;
          width: 100%;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none!important;
          height: 100%;
          width: 100%;
        }
      `}</style>
                <a href="https://www.eireportingonline.com">
                  ei reporting online
                </a>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
