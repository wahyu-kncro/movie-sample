import { Genre } from './genre.model';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: string;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: Date;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
