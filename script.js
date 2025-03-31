const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const form = document.getElementById('form');
const input=document.getElementById('search');
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
    
    
}