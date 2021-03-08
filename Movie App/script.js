
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=117024328587a41b1a814e6d527918fe&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=117024328587a41b1a814e6d527918fe&query= "'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview } = movie

        const MovieEl = document.createElement('div')
        MovieEl.classList.add('movie')

        MovieEl.innerHTML = `
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}">
      <div class="movie-info">
        <h3>Movie Title</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>overview</h3>
        ${overview}
      </div>
        `
        main.appendChild(MovieEl)
    });
}

async function getMovies(url) {
    const res =  await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    }
    else {
        window.location.reload()
    }
})



getMovies(API_URL)