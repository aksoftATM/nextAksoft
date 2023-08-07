import { Header } from "@/components/header";
import "../app/globals.css";
import { ServiceComponent } from "@/components/service";

export default function Service() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header />
      <h1>Наши услуги</h1>
      <ServiceComponent />
    </div>
  );
}
