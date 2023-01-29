import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";
import ProgressBar from "@components/ProgressBar/ProgressBar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SuggestCard({ data }) {
  const [, setCount] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/comments/count/${data.id}`)
      .then(({ Data }) => {
        setCount(Data);
      });
  }, []);
  return (
    <Link to={`/suggestionDetails/${data.id}`} className="suggestBlock">
      <article className="card">
        <h2 className="titleCard">{data.title}</h2>
        <ProgressBar priority={data.priority} />
        <div className="footerCard">
          <p className="opinion">Opinions(5)</p>
        </div>
      </article>
    </Link>
  );
}

SuggestCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
};
