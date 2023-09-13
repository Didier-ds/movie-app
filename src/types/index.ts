export interface IMovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: Array<{
        id: number;
        name: string;
    }>;
    spoken_languages: Array<{
        english_name: string;
        iso_639_1: string;
        name: string;
    }>;
    title: string;
    runtime: number;
    status: string;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
}

export interface IGetMovieResponse {
    page: number;
    results: Array<{
        adult: boolean;
        backdrop_path: string;
        genre_ids: Array<number>;
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }>;
    total_pages: number;
    total_results: number;
}

export interface IError {
    message: string;
    status_code: number
    status_message: string
    success: boolean
}