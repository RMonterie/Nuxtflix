import type { Show } from "./Show";
import type { Image } from "./Image";

export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  runtime: number;
  image: Image | null;
  summary: string | null;
  show: Show;
}
