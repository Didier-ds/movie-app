import {useParams} from "react-router-dom";
import Header from "../components/Header";
import {useQuery} from "react-query";
import HttpService from "../api/http.service.ts";
import Container from "../components/Container.tsx";
import MovieErrorCard from "../components/MovieErrorCard.tsx";

const MovieDetails = () => {
    const {movieId} = useParams();

    const {data, error} = useQuery(['movies', movieId], () => HttpService.getMovieDetails(movieId ?? ""))
    if (error) return <MovieErrorCard />
    if (!data) return <p>Is loading</p>
    return (
        <>
            <Header/>
            <Container className="pt-32">
                <div>
                    <div className="rounded-md shadow aspect-video overflow-hidden">
                        <img src={'http://image.tmdb.org/t/p/original/' + data.poster_path}
                             className="object-cover w-full h-full"/>
                    </div>
                    <div className="mt-10">
                        <div>
                            <div className="space-y-5">
                                <div className="flex justify-between items-center">
                                    <p className="text-2xl font-bold tracking-tight"
                                       data-testid="movie-title">{data.title}</p>
                                    <p data-testid="movie-release-date">{new Date(data.release_date).toISOString()}</p>
                                </div>
                                <p data-testid="movie-overview">{data.overview}</p>
                            </div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Spoken Languages
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 flex gap-2 sm:mt-0">
                                            {data.spoken_languages.map((language) => (
                                                <span>{language.name}</span>
                                            ))}
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Runtime</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.runtime}</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Status</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.status}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default MovieDetails