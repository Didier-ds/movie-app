import axiosInstance from "./index.ts";
import {AxiosError} from "axios";
import {IGetMovieResponse, IMovieDetails} from "../types";

class HttpError extends Error {
    status: number;
    responseData: any

    constructor(status: number, message: string, responseData: any) {
        super(message);
        this.status = status;
        this.name = 'HttpError';
        this.responseData = responseData;
    }
}

class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NetworkError';
    }
}

class HttpService {
    private async send<T>(
        endpoint: string,
        method: "GET" | "POST" | "PUT" | "DELETE",
        data?: any
    ): Promise<T> {
        try {
            const response = await axiosInstance({
                url: `${endpoint}?api_key=${import.meta.env.VITE_APP_IMDB_KEY}&language=en-US`,
                method,
                data,
            });

            // Check if the response status code indicates success (2xx)
            if (response.status >= 200 && response.status < 300) {
                if (response?.data.status === "Failed") {
                    return Promise.reject(response)
                }
                return response.data;
            } else {
                throw new HttpError(response.status, `Request failed with status ${response.status}`, response.data);
            }
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response) {
                    // The request was made, but the server responded with an error status code
                    throw new HttpError(err.response.status, `${err.response.data.status_message}`, err.response.data);
                } else if (err.request) {
                    // The request was made but no response was received (e.g., network error)
                    throw new NetworkError('No response received from the server');
                }
            }

            // If it's not an AxiosError, it's some other error
            throw new Error('An unexpected error occurred while processing the request');
        }
    }

    async getMovies() {
        try {
            return await this.send<IGetMovieResponse>(
                `/movie/top_rated`,
                "GET"
            );
        } catch (error) {
            // Handle the error gracefully, e.g., log it or show a user-friendly error message
            console.error('Error:', error);
            throw error; // You can choose to re-throw the error or handle it differently
        }
    }

    async getMovieDetails(id: string) {
        try {
            return await this.send<IMovieDetails>(
                `/movie/${id}`,
                "GET"
            );
        } catch (error) {
            // Handle the error gracefully, e.g., log it or show a user-friendly error message
            console.error('Error:', error);
            throw error; // You can choose to re-throw the error or handle it differently
        }
    }
}

export default new HttpService();