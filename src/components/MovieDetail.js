import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css"

function MovieDetail({ title, src, description, genres, url, rating }) {
  return (
    <div className={styles.movie}>
      <h1>
        <a href={url} target="_blank">
          {title}
        </a>
      </h1>
      <img src={src} alt={title} className={styles.movie_img}/>
      <h4>description</h4>
      <p /> {description}
      <h4>Movie Rating: {rating}</h4>
      <div>
        <h4>genres</h4>
        <ul className={styles.movie_genres}>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
      <br />
      <hr />
      <a href={url} target="_blank">
        Go to the site&rarr;
      </a>
      <p />
      <Link to={`${process.env.PUBLIC_URL}/`}>Go to the Movie List &rarr;</Link>
    </div>
  );
}

export default MovieDetail;