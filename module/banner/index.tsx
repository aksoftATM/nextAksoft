"use client";

import Typer from "../../components/UI/Typer";
import "./style.scss";

export const BannerComponent = () => {
  return (
    <>
      <div className="ser-bn">
        <div className="serbn-wrapper">
          <div className="serbn-info">
            <h1 className="top-text">
              Разработка сайтов, веб-сервисов и мобильных приложений
            </h1>
            <h1 className="mid-text">JS & JAVA</h1>
            <div className="under-text">
              <Typer text="Автоматизации бизнес-процессов с помощью современных технологии." />
            </div>
            <button className="serbn-btn">Бесплатная консультация</button>
          </div>
        </div>
      </div>
    </>
  );
};
