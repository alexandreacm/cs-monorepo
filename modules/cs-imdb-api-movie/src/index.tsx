import { api } from "./services/api-movie";
import { AxiosResponse } from "axios";

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a + b);
}

export function getMovies(
  title: string,
  page?: number
): Promise<AxiosResponse> {
  return api.get(`?s=${title}&apikey=3dd8a625&page=${page}`);
}
