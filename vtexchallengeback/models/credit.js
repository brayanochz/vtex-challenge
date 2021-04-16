class Credit {
    constructor(data) {
        this.adult = data?.adult || false;
        this.gender = data?.gender || 0;
        this.id = data.id;
        this.known_for_department = data.known_for_department;
        this.name = data.name;
        this.original_name = data.original_name;
        this.popularity = data.popularity;
        this.profile_path = data?.profile_path || "";
        this.cast_id = data.cast_id;
        this.character = data.character;
        this.credit_id = data.credit_id;
        this.order = data.order;
    }
};

module.exports = Credit;
