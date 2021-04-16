const { buildSchema } = require('graphql') ;

const schema = buildSchema(`
  type Collection {
    id: Int!
    name: String!
    poster_path: String
    backdrop_path: String
  }

  type ProductionCompany {
    id: Int!
    name: String!
    logo_path: String
    origin_country: String!
  }

  type ProductionCountry {
    iso_3166_1: String!
    name: String!
  }

  type Language {
    iso_639_1: String!
    name: String!
  }

  type Genre {
    id: Int!
    name: String!
  }

  type Credit {
    adult: Boolean!
    gender: Int!
    id: Int!
    known_for_department: String!
    name: String!
    original_name: String!
    popularity: Float!
    profile_path: String!
    cast_id: Int!
    character: String!
    credit_id: String!
    order: Int!
  }

  type Movie {
    id: Int!
    adult: Boolean!
    backdrop_path: String
    collection: Collection
    budget: Int!
    genres: [Genre]
    homepage: String
    imdb_id: String
    original_language: String!
    original_title: String!
    overview: String
    popularity: Float!
    poster_path: String
    production_companies: [ProductionCompany]
    production_countries: [ProductionCountry]
    spoken_languages: [Language]
    release_date: String!
    revenue: Int!
    runtime: Int
    status: String!
    tagline: String
    title: String!
    video: Boolean!
    vote_average: Float!
    vote_count: Int!
  }

  type Query {
    getMovie(movieId: Int!): Movie
    getMovies(page: Int!): [Movie]
    getMovieCredits(movieId: Int!): [Credit]
  }
`);

module.exports = schema;