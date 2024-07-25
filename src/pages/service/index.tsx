import Head from "next/head";
import { useRef, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode, TbSettingsAutomation } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function Service() {
  const TitleRef = useRef<HTMLDivElement>(null);

  function handleDentappClick() {
    if (TitleRef.current) {
      const headerHeight = 200;
      const element = TitleRef.current as HTMLElement;
      
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
  
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
  
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 300);
    }
  }
  

  const [data, setData] = useState([
    {
      id: 1,
      icon: <FaLaptopCode size={70} />,
      name: "Веб разработка",
      title:
        "Мы - энергичная и талантливая команда веб-разработчиков, предлагаем вам уникальные решения для вашего цифрового присутствия. Наша цель - превратить вашу визию в современный, функциональный и привлекательный онлайн-опыт. Мы вдохнем жизнь в ваш проект, обеспечивая удобную навигацию, стильный дизайн и передовые технологии. Независимо от того, нужен ли вам корпоративный сайт, интернет-магазин или веб-приложение, мы обладаем знаниями и опытом для успешной реализации. Что делает нас особенными: • Индивидуальный подход: Мы не ищем готовых решений, а создаем технологические шедевры, соответствующие вашим уникальным потребностям. • Прозрачность: Мы ценим открытость и честность, поэтому на каждом этапе разработки вы будете в курсе процесса и принимаете важные решения. • Качество и инновации: Мы постоянно следим за последними тенденциями и используем передовые инструменты для достижения высокого стандарта веб-разработки.  Работая с нами, вы получите не просто веб-сайт, а мощный инструмент для достижения ваших целей. Доверьтесь нашей команде, и ваш онлайн-мир станет ярким и эффективным. Свяжитесь с нами сегодня и давайте начнем создавать будущее вместе!",
    },
    {
      id: 2,
      icon: <TbDeviceMobileCode size={70} />,
      name: "Разработка мобильных приложений",
      title:
        "Смартфоны и планшеты стали неотъемлемой частью жизни современного человека, а для бизнеса – прекрасной возможностью «достучаться» до потенциального клиента в любое время дня и ночи.",
    },
    {
      id: 3,
      icon: <MdOutlineDesignServices size={70} />,
      name: "Разработка дизайна",
      title:
        "Можно создать самое функциональное IT решение, но без отличного дизайна, конечного пользователя не привлечь. Дизайн должен быть простым, понятным, и совершенным.",
    },
    {
      id: 4,
      icon: <TbSettingsAutomation size={70} />,
      name: "Автоматизация бизнес процессов",
      title:
        "Благодаря грамотной автоматизации бизнес процессов и внедрения IT решений, предприниматели и крупные компании могут работать эффективнее и зарабатывать гораздо большую прибыль.",
    },
  ]);

  const [selectItem, setSelectItem] = useState<number>(1);

  const SelectedText = data.filter((item: any) => item.id === selectItem);

  const enterText = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Head>
        <title>Разработка мобильного приложения - aksofts it компания</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <base href="aksoft.dev" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Language" content="ru" />
        <meta
          name="description"
          content="Разработка современных приложений и сайтов aksoft, автоматизация бизнес машин"
        />
        <meta
          name="keywords"
          content="мобильное приложение, aksoft услуги, разработка сайтов, разработка сайтов бишкек, разработка приложений 
          бишкек, автоматизация бизнеса,Веб-разработка в Бишкеке,Разработка сайтов Бишкек,Создание CRM приложений,Профессиональные сайты и CRM,Разработка веб-приложений,Оптимизация бизнес-процессов,Адаптивный дизайн сайтов,Лучшие CRM решения,Цифровые решения для бизнеса,Комплексное веб-продвижение,Кастомные CRM инструменты,Интеграция CRM и сайтов,Решения для эффективного управления клиентами,Мобильные CRM приложения,Веб-технологии для бизнеса,Компания по разработке сайтов и CRM,Управление продажами и клиентами,Индивидуальный дизайн и разработка"
        />
        <meta
          property="og:title"
          content="Разработка мобильного приложения в Бишкеке"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aksoft.dev/" />
        <meta property="og:site_name" content="aksoft - IT компания " />
      </Head>

      <div className={styles.service}>
        <div className={styles.navigation}>
          {data.map((item) => (
            <div
              className={styles.card}
              key={item.id}
              onClick={() => (setSelectItem(item.id), handleDentappClick())}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h5 className={styles.name}>{item.name}</h5>
            </div>
          ))}
        </div>
        {SelectedText.map((item: any) => (
          <motion.div
            key={item.id}
            variants={enterText}
            initial="hidden"
            whileInView="visible"
            className={styles.text_place}
            ref={TitleRef}
          >
            <p className={styles.title}>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
