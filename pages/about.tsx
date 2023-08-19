import { Header } from "@/module/header";
import Head from "next/head";
import { Burger } from "@/module/burger";
import { motion } from "framer-motion";
import styles from "../styles/about.module.scss";
import "../app/globals.css";
import AnimatedCharacters from "@/module/Animation/text/animationText";

export default function about() {
  const placeholderText = [
    {
      type: "heading2",
      text: "Добро пожаловать в мир инноваций и технологий с компанией Aksoft ! Мы — команда вдохновленных и творческих профессионалов, специализирующихся на разработке сайтов, веб-сервисов и мобильных приложений. Мы знаем, как сделать ваше присутствие в интернете неповторимым и эффективным. В мире, где технологии развиваются с невероятной скоростью, нам важно обеспечить вас самыми передовыми решениями. Наша молодая и амбициозная команда стоит у истоков инноваций, готовая воплощать в жизнь самые смелые идеи. Мы верим, что всякий проект — это возможность создать нечто уникальное и полезное для вас и ваших клиентов. Наш подход основан на автоматизации. Мы понимаем, что ваше время ценно, и поэтому стремимся избавить вас от рутинных и повторяющихся задач. Благодаря интеллектуальным технологиям и современным методикам разработки, мы создаем продукты, которые не только красивы, но и эффективно выполняют свои функции  Мы гордимся нашими успешными проектами, которые приносят реальные результаты нашим клиентам. Благодаря нашим решениям, бизнесы расширяются, клиенты находятся легко, а процессы становятся более эффективными. Наше стремление к качеству и инновациям позволяет нам оставаться на переднем крае технологического прогресса  Мы готовы стать вашим надежным партнером в мире цифровых решений. Независимо от того, нужен ли вам современный сайт, удобное веб-приложение или инновационное мобильное приложение, мы готовы воплотить вашу идею в реальность  С нами ваши возможности неограничены. Давайте вместе создадим будущее, в котором технологии работают на вас, а не наоборот. Свяжитесь с нами сегодня, и давайте начнем работу над вашим следующим великим проектом!",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
      <motion.div
        className={styles.about}
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <h1>О компании Aksoft</h1>
        {placeholderText.map((item, index) => (
          <AnimatedCharacters key={index} {...item} />
        ))}
      </motion.div>
    </div>
  );
}
