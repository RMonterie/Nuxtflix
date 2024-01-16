import { defineStore } from "pinia";
import type { Episode } from "@/types/Episode";
import type { Show } from "@/types/Show";

export const useShowStore = defineStore("show", () => {
  const episodes = ref<Episode[]>([]);
  const shows = ref<Show[]>([]);

  // Function to sort episodes by descending rating
  const sortEpisodesByRating = (episodes: Episode[]): Episode[] => {
    return episodes.sort((a, b) => {
      const ratingA = a.show.rating.average ?? 0;
      const ratingB = b.show.rating.average ?? 0;

      return ratingB - ratingA;
    });
  };

  // Function to remove shows where genre array is empty
  const removeShowsWithoutGenre = () => {
    episodes.value = episodes.value?.filter(
      (episode: Episode) => episode.show.genres.length > 0
    );
  };

  // Function to remove duplicates of the same episode
  const filterDuplicateShows = () => {
    const uniqueShows: { [key: number]: boolean } = {};

    episodes.value = episodes.value?.filter((episode: Episode) => {
      if (!uniqueShows[episode.show.id]) {
        uniqueShows[episode.show.id] = true;
        return true;
      }
      return false;
    });
  };

  const retrieveShows = async () => {
    try {
      const { data } = await useFetch<Episode[]>(
        "https://api.tvmaze.com/schedule?country=US&date=2014-12-01"
      );

      episodes.value = data.value || [];

      // Remove shows without genre to get easier listings
      removeShowsWithoutGenre();

      // Remove shows with multiple listings because of multiple episodes on schedule endpoint
      filterDuplicateShows();
    } catch (error) {
      console.error(error);
    }
  };

  // Groups episodes for use in the dashboard to this format: {genre: Episode[]}
  const getEpisodesGroupedByGenre = () => {
    const groupedEpisodes: { [key: string]: Episode[] } = {};

    episodes.value?.forEach((episode: Episode) => {
      episode.show.genres.forEach((genre) => {
        if (!groupedEpisodes[genre]) {
          groupedEpisodes[genre] = [];
        }
        groupedEpisodes[genre].push(episode);
      });
    });

    // Sort episodes by rating to comply to requirements
    for (const genre in groupedEpisodes) {
      groupedEpisodes[genre] = sortEpisodesByRating(groupedEpisodes[genre]);
    }

    return groupedEpisodes;
  };

  retrieveShows();

  return {
    episodes,
    shows,
    retrieveShows,
    getEpisodesGroupedByGenre,
  };
});
