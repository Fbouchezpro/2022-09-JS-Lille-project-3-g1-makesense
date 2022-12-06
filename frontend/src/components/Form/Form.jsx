import AvatarList from "@components/AvatarList/AvatarList";
import { IoIosPersonAdd } from "react-icons/io";

import "./style.scss";

export default function Form() {
  return (
    <>
      <p>Formulaire de sugestion</p>
      <form className="form">
        <label htmlFor="title">
          Titre:
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="description">
          Description:
          <textarea name="description" id="description" cols="30" rows="10" />
        </label>
        <label htmlFor="vote" className="vote">
          Would you like to add some votes?
          <input type="checkbox" name="vote" id="vote" />
        </label>
        <label className="add_button" htmlFor="expert">
          Experts:
          <button className="add" type="button">
            <IoIosPersonAdd />
          </button>
          <AvatarList />
        </label>
        <label className="add_button" htmlFor="impacted">
          Impactés:
          <button className="add" type="button">
            <IoIosPersonAdd />
          </button>
          <AvatarList />
        </label>
        <label htmlFor="impact">
          Potentiel répercution
          <textarea name="impact" id="impact" cols="30" rows="10" />
        </label>
        <button className="submit" type="submit">
          Send
        </button>
      </form>
    </>
  );
}
