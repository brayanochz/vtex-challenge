const fetch = require('node-fetch');
const Credit = require('../models/credit');
const Movie = require('../models/movie');

/**
 * 
 * @param {int} movieId 
 * @returns Movie
 */
const getMovie = async ({ movieId }) => {
    var movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => new Movie(data));
    return movie;
}

/**
 * 
 * @param {int} page 
 * @returns [Movie]
 */
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

/**
 * 
 * @param {int} movieId 
 * @returns [Credit]
 */
const getMovieCredits = async ({ movieId }) => {
    res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return data.cast.map(cast => new Credit(cast))
    });
    return res;
}

const root = {
    getMovie,
    getMovies,
    getMovieCredits
};

module.exports = root;