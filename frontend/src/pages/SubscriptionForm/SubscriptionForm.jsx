import "./style.scss";
import { useState } from "react";
import axios from "axios";
import logoMS from "../../assets/pills.svg";
import logoMS2 from "../../assets/pills2.svg";
import logoMS3 from "../../assets/pills3.svg";

export default function SubscriptionForm() {
  const [user, setUser] = useState({
    name: "",
    firstname: "",
    // localisation: "",
    email: "",
    confEmail: "",
    password: "",
    confPass: "",
    role: "Valid",
  });
  const hChange = (evt) => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users`, user)
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <section className="subscriptionForm">
      <img className="logoMS" src={logoMS} alt="logoMS" />
      <img className="logoMS2" src={logoMS2} alt="logoMS" />
      <img className="logoMS3" src={logoMS3} alt="logoMS" />
      <img
        className="avatarLogo"
        src="https://via.placeholder.com/300"
        alt="avatar"
      />

      <form onSubmit={hSubmit}>
        <label className="inputFields">
          <section className="identityInputs">
            <input
              className="nameInput"
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={hChange}
              required
            />
            <input
              className="fNameInput"
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={user.firstname}
              onChange={hChange}
              required
            />
          </section>
          {/* <select className="localisationInput" onChange={hChange} required>
            <option value="---">Localisation</option>
            <option value="Africa">Abidjan</option>
            <option value="Asia">Beirut</option>
            <option value="Africa">Dakar</option>
            <option value="America">Lima</option>
            <option value="Asia">Manila</option>
            <option value="America">Mexico</option>
            <option value="Europe">Paris</option>
          </select> */}
          <input
            className="emailInput"
            type="text"
            name="email"
            placeholder="email"
            value={user.email}
            onChange={hChange}
            required
          />
          <input
            className="emailConfInput"
            type="text"
            name="confEmail"
            placeholder="email confirmation"
            value={user.confEmail}
            onChange={hChange}
            required
          />
          <input
            className="passInput"
            type="text"
            name="password"
            placeholder="password"
            value={user.password}
            onChange={hChange}
            required
          />
          <input
            className="passConfInput"
            type="text"
            name="confPass"
            placeholder="password confirmation"
            value={user.confPass}
            onChange={hChange}
            required
          />
        </label>
        <button className="validation" type="submit">
          Register
        </button>
      </form>
    </section>
  );
}
