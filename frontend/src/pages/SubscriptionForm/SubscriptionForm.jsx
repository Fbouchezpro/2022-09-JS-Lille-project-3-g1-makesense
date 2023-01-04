import "./style.scss";
import { useState } from "react";
import axios from "axios";
import { IoEye, IoEyeOff } from "react-icons/io5";
import logoMS from "../../assets/pills.svg";
import logoMS2 from "../../assets/pills2.svg";
import logoMS3 from "../../assets/pills3.svg";

export default function SubscriptionForm() {
  const [visible, setVisible] = useState(false);
  const [visibleTwo, setVisibleTwo] = useState(false);
  const [user, setUser] = useState({
    name: "",
    firstname: "",
    localisation: "",
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
    if (user.email !== user.confEmail) {
      alert("Error: Email is not valid");
    }
    if (user.password !== user.confPass) {
      alert("Error: Password is not valid");
    }
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/users`, user);
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
          <select
            className="localisationInput"
            value={user.localisation}
            onChange={(e) => setUser({ ...user, localisation: e.target.value })}
            required
          >
            <option value="---">Localisation</option>
            <option value="Abidjan">Abidjan</option>
            <option value="Beirut">Beirut</option>
            <option value="Dakar">Dakar</option>
            <option value="Lima">Lima</option>
            <option value="Manila">Manila</option>
            <option value="Mexico">Mexico</option>
            <option value="Paris">Paris</option>
          </select>
          <input
            className="emailInput"
            type="email"
            name="email"
            placeholder="email"
            value={user.email}
            onChange={hChange}
            required
          />
          <input
            className="emailConfInput"
            type="email"
            name="confEmail"
            placeholder="email confirmation"
            value={user.confEmail}
            onChange={hChange}
            required
          />
          <div className="password">
            <input
              className="passInput"
              type={visible ? "text" : "password"}
              name="password"
              placeholder="password"
              value={user.password}
              onChange={hChange}
              required
            />
            <button
              className="visibility"
              type="button"
              onClick={() => setVisible(!visible)}
            >
              {visible ? <IoEye /> : <IoEyeOff />}
            </button>
          </div>
          <div className="password">
            <input
              className="passConfInput"
              type={visibleTwo ? "text" : "password"}
              name="confPass"
              placeholder="password confirmation"
              value={user.confPass}
              onChange={hChange}
              required
            />
            <button
              className="visibility"
              type="button"
              onClick={() => setVisibleTwo(!visibleTwo)}
            >
              {visibleTwo ? <IoEye /> : <IoEyeOff />}
            </button>
          </div>
        </label>
        <button className="validation" type="submit">
          Register
        </button>
      </form>
    </section>
  );
}
