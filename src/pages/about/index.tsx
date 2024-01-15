import Head from "next/head";
import { motion } from "framer-motion";
import AnimatedCharacters from "@/components/animation/text";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";

export default function About() {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  // const placeholderText = [
  //   {
  //     type: "heading2",
  //     text: "Добро пожаловать в мир инноваций и технологий с компанией Aksoft ! Мы — команда вдохновленных и творческих профессионалов, специализирующихся на разработке сайтов, веб-сервисов и мобильных приложений. Мы знаем, как сделать ваше присутствие в интернете неповторимым и эффективным. В мире, где технологии развиваются с невероятной скоростью, нам важно обеспечить вас самыми передовыми решениями. Наша молодая и амбициозная команда стоит у истоков инноваций, готовая воплощать в жизнь самые смелые идеи. Мы верим, что всякий проект — это возможность создать нечто уникальное и полезное для вас и ваших клиентов. Наш подход основан на автоматизации. Мы понимаем, что ваше время ценно, и поэтому стремимся избавить вас от рутинных и повторяющихся задач. Благодаря интеллектуальным технологиям и современным методикам разработки, мы создаем продукты, которые не только красивы, но и эффективно выполняют свои функции  Мы гордимся нашими успешными проектами, которые приносят реальные результаты нашим клиентам. Благодаря нашим решениям, бизнесы расширяются, клиенты находятся легко, а процессы становятся более эффективными. Наше стремление к качеству и инновациям позволяет нам оставаться на переднем крае технологического прогресса  Мы готовы стать вашим надежным партнером в мире цифровых решений. Независимо от того, нужен ли вам современный сайт, удобное веб-приложение или инновационное мобильное приложение, мы готовы воплотить вашу идею в реальность  С нами ваши возможности неограничены. Давайте вместе создадим будущее, в котором технологии работают на вас, а не наоборот. Свяжитесь с нами сегодня, и давайте начнем работу над вашим следующим великим проектом!",
  //   },
  // ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    setAnimationCompleted(true);
  }, []);

  return (
    <div>
      <Head> 
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <base href="aksoft.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Компания AKSOFT — разработка сайтов и приложений в Бишкеке</title>
        <meta name="description" content="Компания AKSOFT специализируется на разработке сайтов,
         веб и мобильных приложений в Бишкеке. Работаем с React, Java. Опытные разработчики, 
         полный цикл разработки от анализа до внедрения."></meta>
        <meta name="keywords" content="разработка сайтов Бишкек, разработка приложений Кыргызстан, IT компания Aksoft Бишкек,"></meta>
        <meta name="revisit-after" content="7 days"></meta>
        <meta name="robots" content="index,follow"></meta>
        <meta name="author" content="AKSOFT"></meta>
      </Head>

      <motion.div
        className={styles.about}
        initial={animationCompleted ? "visible" : "hidden"}
        animate={animationCompleted ? "visible" : "hidden"}
        variants={container}>
        <h1>О компании Aksoft</h1>

        <div class="columns">

        <div>

        <h3>Наша миссия - воплощать самые смелые идеи в цифровой жизнь!</h3>
        <br/>
        <p>Мы - команда профессионалов, специализирующихся на разработке сайтов, веб-сервисов и приложений. Мы знаем как сделать ваше присутствие в интернете эффективным.</p>

        <p>Вдохновленные технологиями, мы создаем красивые и функциональные продукты, которые приносят результаты нашим клиентам. </p>

        </div>

        <div>
        <br/>
        <h3>Наши преимущества:</h3>
        <br/>
        <ul>
          <li>🎯 Фокус на автоматизацию бизнес-процессов</li>
          <li>💡 Инновационный подход и современные технологии</li>
          <li>⚡️Команда профессиональных разработчиков</li>
          <li>💵 Ориентация на результат клиента</li>
        </ul>

        </div>
        </div>

        <p>Мы готовы стать вашим технологическим партнером и воплотить любые идеи в жизнь - от сайтов до веб и мобильных приложений.</p>

        <a href="/contact" class="button">Связаться с нами</a>
        {/* {placeholderText.map((item, index) => (
          <AnimatedCharacters key={index} {...item} />
        ))} */}
      </motion.div>
    </div>
  );
}
