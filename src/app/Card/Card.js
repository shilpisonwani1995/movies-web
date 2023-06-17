import { useState } from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const { movieCard } = props;
  const [showTitle, setShowTitle] = useState(false);
  const displayTitle = (val) => {
    setShowTitle(val);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={() => displayTitle(true)}
      onMouseLeave={() => displayTitle(false)}
    >
      {/* <h1>{movieCard.Title}</h1> */}
      <div className={styles.image}>
        <img src={movieCard.Poster} alt={movieCard.Poster} />
      </div>
      <div className={styles.content}>
        {showTitle && <p className={styles.Title}>{movieCard.Title}</p>}
      </div>
    </div>
  );
};

export default Card;
