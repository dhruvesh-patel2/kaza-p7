import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../utils/useFetch";
import "./cards.scss";

const Card = () => {
  const { fetchedData, isLoading, error } = useFetch("/data.json");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="container">
        {error ? (
          navigate("/*")
        ) : (
          <>
            {fetchedData &&
              fetchedData.map((data) => (
                <figure key={data.id} className="container_card">
                  <Link to={`/housing/${data.id}`} className="card">
                    <img
                      src={data.cover}
                      alt={`Photo de la location : ${data.title}`}
                      className="card__img"
                    />
                    <figcaption className="card__title">
                      {data.title}
                    </figcaption>
                  </Link>
                </figure>
              ))}
          </>
        )}
      </section>
    </>
  );
};

export default Card;
