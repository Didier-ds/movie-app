import {Link} from "react-router-dom";

export interface iMovie {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    // media_type: string,
    genre_ids: number[]
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}


const MovieCard = ({ movie }: { movie: iMovie }) => {
    return (
        <Link to={'/movies/' + movie.id} className="movie-card block" data-testid="movie-card">
            <div className="movie-card__image rounded overflow-hidden shadow mb-4">
                <img src={'http://image.tmdb.org/t/p/w500/' + movie.poster_path} data-testid="movie-poster" className="object-cover w-full h-full"  alt={''}/>
            </div>
            <p className="movie-card__title font-medium text-base" data-testid="movie-title">
                {movie.title}
            </p>
            <div className="movie-card__description text-gray-600 text-sm" data-testid="movie-release-date">
                {movie.release_date}
            </div>
        </Link>
    )
}

export default MovieCard