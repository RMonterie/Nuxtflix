import type { Image } from "./Image";

export interface Show {
  id: number;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  image: Image | null;
  summary: string;
}

export interface ShowFromSearch {
  score: number;
  show: Show;
}
