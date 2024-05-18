import { BASE_URL_IMDB, base_url, options } from "../constants"

const getIMDbMovies = (title: string, page: number = 1): Promise<Response> => {
    return fetch(`${BASE_URL_IMDB}?apikey=3dd8a625&s=${title}&page=page`);
}

const loadMovies = (page: number = 1): Promise<Response> => {
    return fetch(`${base_url}/now_playing?language=pt-BR&page=${page}`, options);
}

const detailMovie = (id: string | undefined): Promise<Response> => {
    return fetch(`${base_url}/${id}?language=pt-BR`, options);
}

const detailIMDbMovie = (id: string | undefined): Promise<Response> => {
    return fetch(`${BASE_URL_IMDB}?i=${id}&apikey=3dd8a625`);
}

export const api = { loadMovies, detailMovie, getIMDbMovies, detailIMDbMovie };