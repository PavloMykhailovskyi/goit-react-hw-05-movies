import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieReviews } from "services/API";

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState();

    useEffect(() => {
        async function getMovieInfo() {
            const reviews = await getMovieReviews(id);
            setReviews(reviews);
        }

        getMovieInfo()
    }, [id])

    if (!reviews) {
        return null;
    }

    return (
        <section>
            {reviews.length ? (<ul>
          {reviews.map(({ author, content, id }) => {
              return <li key={id}>
                  <h3>Author: {author}</h3>
                  <p>{content}</p>
            </li>;
          })}
        </ul>) : <p>We don't have any reviews for this movie.</p>}
        </section>
    );
}

export default Reviews;