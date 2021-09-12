async function getFilm(film){
  try{
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d6c1c92a&t=${film}`)
    const data = await response.json()
    show(data)
    console.log(data)
  }catch(err){
    alert('erro na requisição do filme')
  }
}


function show(filme){
 if(filme.Response == "False") {
   alert('filme não encontrado em nossa base de dados')
  return
 } 

  let output = `
  <article class="box">
        <img src="${filme.Poster}" alt="${filme.Title}">
        <h2>${filme.Title}</h2>
        <p>${filme.Plot}</p>
    </article>
  `

  document.querySelector('.main main').innerHTML += output
}
document.addEventListener('click', e =>{
  const el = e.target
  const input = document.querySelector(".input")
  if(el.classList.contains('input-btn')){
    if(input.value == '') return
    getFilm(input.value)
  }
})