type BaseResponseType = {
    status: string;
    message: string;
}

export interface IMovie {
    Title: string;
    Year: number;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface IDetailMovie {
    Title: string;
    Year: number;
    imdbID: string;
    Type: string;
    Poster: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    imdbRating: string;
    imdbVotes: string;
}

export type Rating = {
    average: number
}
export interface IResponseMovie extends BaseResponseType {
    Search: IMovie[]
}