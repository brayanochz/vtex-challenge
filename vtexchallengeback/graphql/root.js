const fetch = require('node-fetch');

const getMovie = async ({ movieId }) => {
    await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`)
    .then(res => res.json());
}

const getMovies = async ({ page }) => {
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`)
    .then(res => res.json());
}

const getMovieCredits = async ({ movieId }) => {
    await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_KEY}&language=en-US`)
    .then(res => res.json());
}

const root = {
    getMovie,
    getMovies,
    getMovieCredits
};

module.exports = root;