import { Header } from "@/components/header";
import "../styles/contact.scss";
import "../app/globals.css";

export default function contact() {
  return (
    <>
      <Header />

      <div className="contact">
        <div className="wrapper">
          <div className="contact">
            <div className="contact-wrapper">
              <div className="contact-info">
                <h1 className="contact-desc">Контакты</h1>
                <ul className="contact-list">
                  <li className="contact-item">
                    <h4>E-Mail</h4>
                    <h5>mitapp@mitapp.pro</h5>
                  </li>
                  <li className="contact-item">
                    <h4>Телефон</h4>
                    <h5>
                      +996556112212
                      <br />
                      +996501112212
                    </h5>
                  </li>
                  <li className="contact-item">
                    <h4>Адрес</h4>
                    <h5>г. Бишкек, ул. 7-апреля д.4/4. 7-й этаж 2 кабинет</h5>
                  </li>
                  <li className="contact-item">
                    <h4>Соц. сети</h4>
                    <h5>Facebook / Instagram</h5>
                  </li>
                </ul>
              </div>
              <div className="contact-location">место для карты</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
