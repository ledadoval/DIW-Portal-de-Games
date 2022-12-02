const apiKey = 'ae575ca5f3dc45038507472522fb4e2e'
const pageSize = 1
let detailsresult = document.getElementById('detailsid')
let detailsresult1 = document.getElementById('detailsid1')
let detailsresult2 = document.getElementById('detailsid2')

function preencherGames() {
  let url = `https://api.rawg.io/api/games?key=${apiKey}`
  fetch(url)


    .then(res => res.json())
    .then(data => {
      let exit = ''
      for (i = 0; i < 1; i++) {
        let games = data.results[17]
        
        exit += `
        <div class="card mb-3">
        <img src="${games.background_image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title-sr">${games.name}</h5>
          <p class="card-text">Data de lançamentp: ${games.released} <br>
          Avaliações em comentários: ${games.reviews_count} <br>
          Avaliação média: ${games.rating} <br>
          Maior avaliação: ${games.rating_top}
          </p>
          <a href="https://rawg.io/games/${games.slug}" class="a-txt">+ informações</a>
        </div>
      </div>
  `
      }

      detailsresult.innerHTML = exit

    })
}

function preencherGames1() {
  let url = `https://api.rawg.io/api/games?key=${apiKey}`
  fetch(url)


    .then(res => res.json())
    .then(data => {
      let exit = ''
      for (i = 0; i < 1; i++) {
        let games = data.results[1]

        
        exit += `
        <div class="card mb-3">
        <img src="${games.background_image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title-sr">${games.name}</h5>
          <p class="card-text">Data de lançamento: ${games.released} <br>
          Avaliações em comentários: ${games.reviews_count} <br>
          Avaliação média: ${games.rating} <br>
          Maior avaliação: ${games.rating_top}
          </p>
          <a href="https://rawg.io/games/${games.slug}" class="a-txt">+ informações</a>
        </div>
      </div>
  `
      }

      detailsresult1.innerHTML = exit

    })
}

function preencherGames2() {
  let url = `https://api.rawg.io/api/games?key=${apiKey}`
  fetch(url)


    .then(res => res.json())
    .then(data => {
      let exit = ''
      for (i = 0; i < 1; i++) {
        let games = data.results[11]

        
        exit += `
        <div class="card mb-3">
        <img src="${games.background_image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title-sr">${games.name}</h5>
          <p class="card-text">Data de lançamento: ${games.released} <br>
          Avaliações em comentários: ${games.reviews_count} <br>
          Avaliação: ${games.rating}
          </p>
          <a href="https://rawg.io/games/${games.slug}" class="a-txt">+ informações</a>
        </div>
      </div>
  `
      }

      detailsresult2.innerHTML = exit

    })
}



document.body.onload = () =>{
  preencherGames()
  preencherGames1()
  preencherGames2()
}