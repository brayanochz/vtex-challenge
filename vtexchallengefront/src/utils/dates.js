function getYear(date) {
    return new Date(Date.parse(date)).getFullYear()
}

export {
    getYear
}