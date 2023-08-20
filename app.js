let api = "https://www.omdbapi.com/?apikey=61e576a4&t=";

let title = document.getElementById("title");
let actors = document.getElementById("actors");
let director = document.getElementById("director");
let released = document.getElementById("released");
let language = document.getElementById("language");
let genre = document.getElementById("genre");
let writer = document.getElementById("writer");
let awards = document.getElementById("awards");
let boxOffice = document.getElementById("boxOffice");
let runtime = document.getElementById("runTime");
let imdb=document.getElementById('imdb')
let poster=document.getElementById('poster')

function searchMovie() {
  let movieName = document.getElementById("inpBox");
  let query = api + movieName.value;
  fetch(query)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      title.innerHTML = data.Title;
      actors.innerText = data.Actors;
      director.innerText = data.Director;
      released.innerText = data.Released;
      language.innerText = data.Language;
      genre.innerText = data.Genre;
      writer.innerText = data.Writer;
      awards.innerText = data.Awards;
      boxOffice.innerText = data.BoxOffice;
      runtime.innerText = data.Runtime;
      imdb.innerText=data.imdbRating
      poster.src=data.Poster
    });
}
