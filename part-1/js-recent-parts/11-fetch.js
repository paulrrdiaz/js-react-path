const STAR_WARS_API_URL = "https://swapi.co/api/films/";

fetch(STAR_WARS_API_URL)
  .then(response => response.json())
  .then(response => {
    const { results } = response;
    const films = results
      .map(({ title, episode_id: episodeId, release_date: releaseDate }) => ({
        title,
        episodeId,
        releaseDate,
      }))
      .sort((a, b) => a.episodeId - b.episodeId);

    console.log(films);
  });
