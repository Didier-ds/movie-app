import MovieCardSkeletonContainer from "./MovieCardSkeletonContainer.tsx";
import Container from "./Container.tsx";
import {useQuery} from "react-query";
import HttpService from "../api/http.service.ts";
import MovieCard from "./MovieCard.tsx";
import {IError, IGetMovieResponse} from "../types";

const MovieContainer = () => {
    const {isLoading, data, error} = useQuery('movies', () => HttpService.getMovies()) as {
        isLoading: boolean,
        data: IGetMovieResponse,
        error: IError
    }
    if (error as unknown as IError) return <Container>
        <h1 className="py-24 text-center text-2xl font-medium text-red-500">
            {error?.message}
        </h1>
    </Container>
    if (isLoading) return <MovieCardSkeletonContainer/>
    else return (
        <Container>
            <div className="mt-20">
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10'>
                    {data?.results.slice(0, 10).map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default MovieContainer;