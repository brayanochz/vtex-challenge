const fetch = require('node-fetch');
const Credit = require('../models/credit');
const Movie = require('../models/movie');

const getMovie = async ({ movieId }) => {
    var movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`)
    .then(res => res.json());
    return movie;
}

const getMovies = async ({ page }) => {
    var movies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`)
    .then(res => res.json())
    .then(data => {
        if(data.success && !data.success) {
            return [];
        }
        return data.results.map(movie => new Movie(movie)); 
    });
    return movies;
}

const getMovieCredits = async ({ movieId }) => {
    res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => data.cast.map(cast => new Credit(cast)));
    return res;
}

const root = {
    getMovie,
    getMovies,
    getMovieCredits
};

module.exports = root;