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
let imdb = document.getElementById("imdb");
let poster = document.getElementById("poster");
let loading = document.querySelector(".loading");

function searchMovie() {
  loading.style.display = "block";
  let movieName = document.getElementById("inpBox");
  let query = api + movieName.value;
  setTimeout(() => {
    fetch(query)
      .then((data) => {
        return data.json();
      })
      .then((data2) => {
        title.innerHTML = data2.Title;
        actors.innerText = "Actors : " + data2.Actors;
        director.innerText = "Director : " + data2.Director;
        released.innerText = "Released : " + data2.Released;
        language.innerText = "Language : " + data2.Language;
        genre.innerText = "Genre : " + data2.Genre;
        writer.innerText = "Writer : " + data2.Writer;
        awards.innerText = "Awards : " + data2.Awards;
        boxOffice.innerText = "BoxOffice : " + data2.BoxOffice;
        runtime.innerText = "Runtime : " + data2.Runtime;
        imdb.innerText = "IMDB: " + data2.imdbRating;
        poster.src = data2.Poster;
      })
      .finally(() => {
        loading.style.display = "none";
      });
  },1000);
}
console.log(typeof api);
