import Movie from "../models/movies";

function useApi() {

    const getMovies = async (page) => {
        return await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            body: JSON.stringify({
                query: `
                    query getMovies($page: Int!) {
                        getMovies(page: $page) {
                            id,
                            title,
                            release_date,
                            poster_path,
                            vote_average
                        }
                    }
                `,
                variables: { page },
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => data.data.getMovies.map(movie => new Movie(movie)) );
    }

    const getMovie = async (movieId) => {
        return await fetch('http://localhost:3000/graphql',{
            method: 'POST',
            body: JSON.stringify({
                query: `
                    query GetMovie($movieId: Int!) {
                        getMovie(movieId: $movieId) {
                            id,
                            title,
                            release_date,
                            poster_path,
                            vote_average
                        }
                    }
                `,
                variables: { movieId: movieId },
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => Movie(data.data.getMovie) );
    }

    const getCredits = async (movieId) => {
        return await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            body: JSON.stringify({
                query: `
                    query GetCredits($movieId: Int!) {
                        getMovieCredits(movieId: $movieId) {
                            id,
                        }
                    }
                `,
                variables: { movieId },
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(res => res.json())
    }

    return {
        getMovie,
        getMovies,
        getCredits
    }

}

export default useApi;