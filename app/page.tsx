import styles from "./page.module.css";
import { BannerComponent } from "@/components/banner";
import { ServiceComponent } from "@/components/service";
import { CardThree } from "@/module/Animation/card";
import { FooterComponent } from "@/components/footer";
import { FormComponent } from "@/components/form";
import DentApp from "../assets/image/photo_2023-08-04_10-55-31.jpg";
import Breath from "../assets/image/61b1a4e68529d3b914d4d130d20fe7cd_640x480.jpg";
import Cheber from "../assets/image/iphone-640x480.jpeg";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div style={{ width: "100%", minHeight: "300px" }}>
        <img src="" alt="" />
      </div> */}
      <Header />

      <div
        style={{
          width: "80vw",
          minHeight: "650px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BannerComponent />
      </div>
      <div style={{ width: "100%", minHeight: "830px" }}>
        <FormComponent />
      </div>
      <div
        style={{
          width: "100%",
          minHeight: "650px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h1>Наши работы</h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="https://dentapp.online" target="_blank">
            <CardThree
              image={DentApp}
              name="DentApp"
              title="Приложение для автоматизации стоматологии."
            />
          </a>
          <CardThree
            image={Breath}
            name="Ондуруш деми"
            title="Приложение для автоматизации швейных цехов."
          />
          <a href="http://cheber.org" target="_blank">
            <CardThree
              image={Cheber}
              name="Чебер"
              title="Приложение для автоматизации бронирования."
            />
          </a>
        </div>
      </div>
      <ServiceComponent />
      <FooterComponent />
    </main>
  );
}
