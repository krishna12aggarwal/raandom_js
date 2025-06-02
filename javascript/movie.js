const apiKey = '06ae7eddb340b286f5e2d3e227d0339f'
const baseUrl = 'https://api.themoviedb.org/3';
let query;
let tit = document.getElementById("tit")
let closeButton = document.getElementById("close")
let allowed = true;
let inputBox = document.getElementById("movieInput")
let search = document.getElementById("searchButton")
const imageBaseUrl = "https://image.tmdb.org/t/p/w200"
function submit() {
    tit.style.display = "none"
    inputBox.classList.add("chota")
    if(!allowed)
        console.log("First query is in progress")
    else{
    query = inputBox.value.trim();
   
    if (/\d/.test(query)) {
        console.log("Don't add numbers");
    } else if (query === "") {
        console.log("Input is empty!");
    } else {
            fakeLoading()
      setTimeout(()=> getData(query),800);
    }
}
}
async function getData(query) {
    remove()
    allowed = false;
    let url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`;
    const result = await fetch(url);
    if (!result.ok) {
        console.log("error");
    } else {
        const data = await result.json();
        if (data.results.length > 0) {
            const movie = data.results
           movie.forEach(movie => {
             console.log(movie.title);
           
          
     let poster = movie.poster_path
     let fullPath = `${imageBaseUrl}${poster}`
     const view = document.createElement("div")
     view.classList.add("view")
    
     const img = document.createElement("img")
     img.src = fullPath
     img.classList = "poster"


     const title = document.createElement("h4")
     title.innerText = movie.title


     const date = document.createElement("p")
     date.innerText = `📅 ${movie.release_date}`
     
    const rating = document.createElement("p")
    rating.innerText = `⭐ ${movie.vote_average}`


    view.appendChild(img)
    view.appendChild(title)
    view.appendChild(date)
    view.appendChild(rating)
    
     
    document.getElementById("movieList").appendChild(view)
         } );
        } else {
            console.log("No results found");
        }
    }
allowed = true
}

search.addEventListener('click', submit);
function remove(){
    document.querySelectorAll('.view').forEach(Element => Element.remove()

    )
}
function fakeLoading(){
     allowed = false;
  inputBox.classList.add("chota");
  search.classList.add("loading");
  closeButton.style.display = "block"
 document.getElementById("movieList").classList.remove("show")
}
function cancel(){
    allowed = true;
    inputBox.classList.remove("chota")
    search.classList.remove("loading")
    inputBox.value = ""
    closeButton.style.display = "none"
    tit.style.display = "block"
    remove()
}
closeButton.addEventListener("click",cancel)
inputBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    submit();
  }
});