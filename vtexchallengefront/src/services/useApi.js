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
                            vote_average,
                            genres {
                                id,
                                name,
                            },
                        }
                    }
                `,
                variables: { movieId: parseInt(movieId) },
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => new Movie(data.data.getMovie) );
    }

    const getCredits = async (movieId) => {
        return await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            body: JSON.stringify({
                query: `
                    query GetCredits($movieId: Int!) {
                        getMovieCredits(movieId: $movieId) {
                            id,
                            name,
                            original_name,
                            profile_path,
                        }
                    }
                `,
                variables: { movieId: parseInt(movieId) },
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data.data.getMovieCredits
        });
    }

    return {
        getMovie,
        getMovies,
        getCredits
    }

}

export default useApi;