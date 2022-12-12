import "./Style.scss";
import logoMS from "../../assets/pills.svg";
import logoMS2 from "../../assets/pills2.svg";
import logoMS3 from "../../assets/pills3.svg";

import SugestCard from "@components/SugestCard/SugestCard";

export default function Home() {
  return (
    <>
      <Myhome />

      <img className="logoxMS" src={logoMS} alt="logoMS" />
      <img className="logoxMS2" src={logoMS2} alt="logoMS" />
      <img className="logoxMS3" src={logoMS3} alt="logoMS" />

      <section className="titlehome">
        <h1 className="settingstitle"></h1>
        <h2 className="titlesuggest">Suggestions</h2>
        <div className="cardx">
          <SugestCard />
          <SugestCard />
          <SugestCard />
          <SugestCard />
          <SugestCard />
          <SugestCard />
          <SugestCard />
          <SugestCard />
          <SugestCard />
        </div>
      </section>
    </>
  );
}
