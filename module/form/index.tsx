"use client";

import { useEffect, useRef, useState } from "react";
import AnimateItem from "@/assets/image/animation_llb2867x.json";
import Lottie from "lottie-web";
import PhoneImg from "@/assets/image/phone.png";
import emailjs from "emailjs-com";
import styles from "./style.module.scss";

export const FormComponent = () => {
  const [fName, setFName] = useState<string>("");
  const [fEmail, setFEmail] = useState<string>("");
  const [fNumber, setFNumber] = useState<number | string>("");
  const [fText, setFText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const AnimateContainer = useRef<any>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      await Lottie.loadAnimation({
        container: AnimateContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: AnimateItem,
      });
    };

    loadAnimation();
  }, []);

  const ResetState = () => {
    setFName("");
    setFEmail("");
    setFNumber("");
    setFText("");
    setIsLoading(false);
  };

  const sendEmail = () => {
    setIsLoading(true);
    emailjs
      .send(
        "service_w0i4r4l",
        "template_gft7y0j",
        {
          from_name: fName,
          email: fEmail,
          phone: fNumber,
          text: fText,
        },
        "3NB3jo4m9L0Ja5pb2"
      )
      .then(
        (result) => {
          console.log(result);
          ResetState();
        },
        (error) => {
          console.log(error);
          ResetState();
        }
      );
  };
  return (
    <>
      <div className={styles.form}>
        <div className={styles.form_wrapper}>
          <div className={styles.form_title}>
            <h1 className={styles.h1}>Оставить заявку</h1>
          </div>
          <img src={PhoneImg.src} alt="" className={styles.img} />

          <div className={styles.inp_place}>
            <div className={styles.top_inp}>
              <input
                className={styles.input}
                type="text"
                placeholder="Имя"
                onChange={(e) => setFName(e.target.value)}
              />
              <input
                className={styles.input}
                type="text"
                placeholder="E-mail"
                onChange={(e) => setFEmail(e.target.value)}
              />
            </div>
            <input
              className={styles.input}
              type="text"
              placeholder="Номер телефона"
              onChange={(e) => setFNumber(e.target.value)}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Сопроводительное письмо"
              onChange={(e) => setFText(e.target.value)}
            />
          </div>
          <button className={styles.form_btn} onClick={sendEmail}>
            Отправить
          </button>
        </div>
      </div>
    </>
  );
};
