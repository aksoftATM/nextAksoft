import Head from "next/head";
import styles from "./style.module.scss";

export default function Contact() {
  return (
    <>
      <Head>
        <title>IT компания Бишкек Aksoft контакты</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <base href="aksoft.dev" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Language" content="ru" />
        <meta
          name="description"
          content="IT компания Aksoft Бишкек -  Профессиональная команда разработчиков cоздaст
           для вac caйты, веб и мoбильные прилoжения. Рaзрaбoткa пoд ключ: aнaлиз, дизaйн, прoгрaммировaние. 
           Гaрaнтия кaчествa. "
        />
        <meta
          name="keywords"
          content="Разработка сайтов Бишкек, веб разработка Кыргызстан, создание сайтов Бишкек
          Создание приложений Бишкек, разработка приложений Кыргызстан
          Разработка мобильных приложений Кыргызстан, мобильные приложения Бишкек
          Программирование Бишкек, разработчики сайтов Кыргызстан
          Веб студия Бишкек, веб студия Кыргызстан, создание сайтов, создание сайтов Бишкек"
        />
        <meta
          property="og:title"
          content="IT компании Aksoft контакты"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aksoft.dev/" />
        <meta
          property="og:site_name"
          content="aksoft - разработка веб приложений Бишкек"
        />
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://aksoft.dev/"></link>
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
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab1b8e6820158e06920c9462510cdf8245f0259237a54e040c6093047fbc22a95&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
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
              
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
