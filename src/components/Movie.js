import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";
function Movie({ id,coverImg, title, summary, genres ,year}) {
    return (
      <div className="movie">
        <Link to={{pathname:`/movie/${id}`,
        state: {coverImg,title,summary,genres}
      }}>
        
        <img src={coverImg} alt={title} title={title}></img>
        <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genres,index)=>(
              <li key={index} className="genres__genres">{genres}</li>
            ))}

          </ul>
          <p className="movie__summary">{summary.slice(0,180)}...</p>

        </div>
        </Link>
        {/* <img src={coverImg} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  Movie.propTypes  = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Movie;