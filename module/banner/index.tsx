"use client";

import Typer from "../../components/UI/Typer";
import "./style.scss";

export const BannerComponent = () => {
  return (
    <>
      <div className="ser-bn">
        <div className="serbn-wrapper">
          <div className="serbn-info">
            <h1 className="top-text">Услуги по созданию сайтов и приложений</h1>
            <h1 className="mid-text">нашей Веб студии</h1>
            <div className="under-text">
              <Typer
                text="Создание сайтов и
                Веб приложений
                под ключ в Бишкеке"
              />
              <Typer
                text="Мы разработаем вам под ключ сайт и мобильное
                приложение любой сложности за адекватную стоимость и поможем запустить
                в сеть."
              />
            </div>
            <button className="serbn-btn">Бесплатная консультация</button>
          </div>
        </div>
      </div>
    </>
  );
};
