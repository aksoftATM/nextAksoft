"use client";
import { useState } from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbSettingsAutomation, TbDeviceMobileCode } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import styles from "./style.module.scss";

export const ServiceComponent = () => {
  const [data, setData] = useState([
    {
      id: 1,
      icon: <FaLaptopCode size={70} />,
      name: "Веб разработка",
      title:
        "В современном мире веб приложения играют колоссальную роль. Сейчас вы уже не сможете представить информационное пространство без новостных блогов, интернет-магазинов и социальных сетей.",
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
  return (
    <div className={styles.service}>
      {data.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.icon}>{item.icon}</div>
          <h5 className={styles.name}>{item.name}</h5>
          <p className={styles.title}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
