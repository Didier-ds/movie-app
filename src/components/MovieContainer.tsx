import MovieCardSkeletonContainer from "./MovieCardSkeletonContainer.tsx";
import Container from "./Container.tsx";
import {useQuery} from "react-query";
import HttpService from "../api/http.service.ts";
import MovieCard from "./MovieCard.tsx";

const MovieContainer = () => {
    const {isLoading, data, error} = useQuery('movies', () => HttpService.getMovies())
    if (error) return <h1>Something went wrong!</h1>
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