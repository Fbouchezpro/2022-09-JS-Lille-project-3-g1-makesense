import AvatarList from "@components/AvatarList/AvatarList";
import { useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";

import "./style.scss";

export default function Form() {
  const [search, setSearch] = useState(true);
  const [visibility, setVisibility] = useState(true);

  return (
    <section className="form_idea">
      <p>Suggestion form</p>
      <form className="form">
        <div className="input">
          <div className="left">
            <label htmlFor="title">
              Title:
              <input type="text" name="title" id="title" />
            </label>
            <label htmlFor="description">
              Description:
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
              />
            </label>
            <label htmlFor="impact">
              Potential répercution:
              <textarea name="impact" id="impact" cols="30" rows="10" />
            </label>
          </div>
          <div className="right">
            <label htmlFor="vote" className="vote">
              Would you like to add some votes?
              <input type="checkbox" name="vote" id="vote" />
            </label>
            <label className="add_button" htmlFor="expert">
              Experts:
              <AvatarList />
              <button
                onClick={() => {
                  setSearch(!search);
                }}
                className="add"
                type="button"
              >
                <IoIosPersonAdd />
              </button>
            </label>
            <input
              className={search ? "search" : null}
              type="search"
              placeholder="name"
            />
            <label className="add_button" htmlFor="impacted">
              Impacted:
              <AvatarList />
              <button
                className="add"
                type="button"
                onClick={() => {
                  setVisibility(!visibility);
                }}
              >
                <IoIosPersonAdd />
              </button>
            </label>
            <input
              className={visibility ? "search" : null}
              type="search"
              placeholder="name"
            />
          </div>
        </div>
        <button className="submit" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
