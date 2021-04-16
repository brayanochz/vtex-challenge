class Movie {
    constructor(data) {
        this.id = data.id;
        this.adult = data?.adult || false;
        this.backdrop_path = data?.backdrop_path || null;
        this.collection = data?.belongs_to_collection || null;
        this.budget = data?.budget;
        this.genres = data?.genres || [];
        this.homepage = data?.homepage || null;
        this.imdb_id = data?.imdb_id || null;
        this.original_language = data?.original_language;
        this.original_title = data?.original_title;
        this.title = data?.title;
        this.overview = data?.overview || null;
        this.popularity = data?.popularity;
        this.poster_path = data?.poster_path || null;
        this.production_companies = data?.production_companies || [];
        this.production_countries = data?.production_countries || [];
        this.spoken_languages = data?.spoken_languages || [];
        this.release_date = data?.release_date;
        this.revenue = data?.revenue;
        this.runtime = data?.runtime || null;
        this.status = data?.status;
        this.tagline = data?.tagline || null;
        this.video = data?.video;
        this.vote_average = data?.vote_average;
        this.vote_count = data?.vote_count;
    }
}

module.exports = Movie;