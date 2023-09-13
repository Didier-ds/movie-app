import {Link} from "react-router-dom";
import {useState} from "react";
import {HeartIcon} from "@heroicons/react/24/solid";

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

function classNames(...classes: Array<string>) {
    return classes.filter(Boolean).join(' ')
}

const MovieCard = ({movie}: { movie: iMovie }) => {

    const [favourite, setFavourite] = useState(false)

    return (
        <div className="relative">
            <Link to={'/movies/' + movie.id} className="movie-card block" data-testid="movie-card">
                <div className="movie-card__image rounded overflow-hidden shadow mb-4">
                    <img src={'http://image.tmdb.org/t/p/w500/' + movie.poster_path} data-testid="movie-poster"
                         className="object-cover w-full h-full" alt={''}/>
                </div>
                <p className="movie-card__title font-medium text-base" data-testid="movie-title">
                    {movie.title}
                </p>
                <div className="movie-card__description text-gray-600 text-sm" data-testid="movie-release-date">
                    {movie.release_date}
                </div>
            </Link>
            <button onClick={() => setFavourite(!favourite)}
                    className={'absolute top-2 right-2 z-[2] active:scale-75 transition-all'}>
                <HeartIcon
                    className={classNames(favourite ? 'fill-red-500 hover:fill-red-500' : 'fill-white', 'w-8')}/>
            </button>
        </div>
    )
}

export default MovieCard