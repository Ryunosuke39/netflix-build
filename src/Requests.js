// Typeically store in {process.env.API_KEY}
const API_KEY = "125056ddac1abcc37f107190d91dacbd";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
// https://api.themoviedb.org/3/trending/all/week?api_key=125056ddac1abcc37f107190d91dacbd&language=en-US
// https://api.themoviedb.org/3/discover/tv?api_key=125056ddac1abcc37f107190d91dacbd&with_networks=213
// https://api.themoviedb.org/3/movie/top_rated?api_key=125056ddac1abcc37f107190d91dacbd&language=en-US
// https://api.themoviedb.org/3/discover/movie?api_key=125056ddac1abcc37f107190d91dacbd&with_genres=28
// https://api.themoviedb.org/3/discover/movie?api_key=125056ddac1abcc37f107190d91dacbd&with_genres=35
// https://api.themoviedb.org/3/discover/movie?api_key=125056ddac1abcc37f107190d91dacbd&with_genres=27
// https://api.themoviedb.org/3/discover/movie?api_key=125056ddac1abcc37f107190d91dacbd&with_genres=10749
// https://api.themoviedb.org/3/discover/movie?api_key=125056ddac1abcc37f107190d91dacbd&with_genres=99

export default requests;