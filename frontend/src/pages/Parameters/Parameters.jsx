import Myhome from "@components/Myspace/Myspace";
import "./Style.scss";
import logoMS from "../../assets/pills.svg";
import logoMS2 from "../../assets/pills2.svg";
import logoMS3 from "../../assets/pills3.svg";
export default function Home() {
  return (
    <>
      <Myhome />
      <img className="logoxMS" src={logoMS} alt="logoMS" />
      <img className="logoxMS2" src={logoMS2} alt="logoMS" />
      <img className="logoxMS3" src={logoMS3} alt="logoMS" />

      <section className="titlehome">
        <h1 className="settingstitle"></h1>
        <p className="settingsp">
          {" "}
          <span className="parsty">P</span>aramètre
          <span className="parstyt">s</span>
        </p>
        <div className="mainsettitle">
          <div className="mainset4">
            <p className="mainset">Langues </p>
            <p className="mainset3">Fr 🇫🇷 En 🇬🇧 Es 🇪🇸</p>
          </div>
          <div className="borde">.</div>
          <div className="mainset6">
            <p className="mainset2">Affichage</p>
            <p className="mainset5">Light Mode / Dark Mode </p>
          </div>
        </div>
      </section>
    </>
  );
}
