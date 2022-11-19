import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieCast } from "services/API";

const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState();

    useEffect(() => {
        async function getMovieInfo() {
            const movieCast = await getMovieCast(id);
            setCast(movieCast);
        }

        getMovieInfo();
    }, [id])

    if (!cast) {
        return null;
    }

    return (
      <section>
        <ul>
          {cast.map(({ character, id, name, profile_path }) => {
            return (
              <li key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                ) : (
                  '-'
                )}
                <div>
                  <h3>{name}</h3>
                  <h4>Character:</h4>
                  <p>{character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
}

export default Cast;