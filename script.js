const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const form = document.getElementById('form');
const input=document.getElementById('search');
const main = document.getElementById('main');
getMovie(API_URL)

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const searchTerm = search.value

    // console.log(input.value.trim());
    getMovie(SEARCH_API + searchTerm)


})

async function getMovie(url) {
    const res = await fetch(url);
    const data = await res.json()

    console.log(data.results);

    showMovies(data.results)
    
    
}

const showMovies = (movie)=>{
    main.innerHTML = ''

    movie.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie

    const movieEl = document.createElement('div');
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
                ${overview}
                <br>
                <button><a href="nextPage.html">More INFO</a></button>
            </div>`

            main.appendChild(movieEl);
        })

        
}


function getClassByRate(vote){
    if(vote >=8){
        return 'greem'
    }if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
        
    }

}
