const apiKey = 'ae575ca5f3dc45038507472522fb4e2e'
let storesresult = document.getElementById('storesid')
let genresresult = document.getElementById('genresid')
let gamesresult = document.getElementById('gamesid')


function preencherstores() {
  let url = `https://api.rawg.io/api/stores?key=${apiKey}`
  fetch(url)


    .then(res => res.json())
    .then(data => {
      let exit = ''
      for (i = 0; i < 3; i++) {
        let stor = data.results[i]


        exit += `
  <div class="col-4">
  <div class="card border-danger" style="max-width: 80%;">
        <img src="${stor.image_background}" class="card-img-top1" style="max-height: 132px">
          <div class="card-body">
            <h5 class="card-title-sr">${stor.name}</h5>
            <p class="txt">Jogos disponiveis na loja: ${stor.games_count} <br>
            Domínio: <a href= "${stor.domain}" class="alink-txt"> ${stor.domain} </a>
            </p>
            <a href="https://rawg.io/stores/${stor.slug}" class="a-txt"> + infos</a>
          </div>
        </div>
      </div>
  `
      }

      storesresult.innerHTML = exit

    })
}

function preenchergenres() {
  let url = `https://api.rawg.io/api/genres?key=${apiKey}`
  fetch(url)


    .then(res => res.json())
    .then(data => {
      let exit = ''
      for (i = 0; i < 3; i++) {
        let genres = data.results[i]

       
        exit += `
  <div class="col-4 1">
  <div class="card border-danger" style="max-width: 80%;">
        <img src="${genres.image_background}" class="card-img-top1" style="max-height: 132px">
          <div class="card-body">
            <h5 class="card-title-sr">${genres.name}</h5>
            <p class="txt">Jogos do gênero: ${genres.games_count}</p>
            <a href="https://rawg.io/genres/${genres.slug}" class="a-txt"> + infos</a>
          </div>
        </div>
      </div>
  `
      }

      genresresult.innerHTML = exit

    })
}

function preencherGames() {
  let url = `https://api.rawg.io/api/games?key=${apiKey}`
  fetch(url)


    .then(res => res.json())
    .then(data => {
      let exit = ''
      for (i = 0; i < 3; i++) {
        let games = data.results[i]

        
        exit += `
  <div class="col-4">
  <div class="card border-danger" style="max-width: 80%;">
        <img src="${games.background_image}" class="card-img-top1" style="max-height: 132px">
          <div class="card-body">
            <h5 class="card-title-sr">${games.name}</h5>
            <p class="txt">Lançamento: ${games.released} <br>
            Avaliação: ${games.rating} <br>
            Última atualização: <small> ${games.updated} </small> 
            </p>
            <a href="https://rawg.io/games/${games.slug}" class="a-txt"> + infos</a>
          </div>
        </div>
      </div>
  `
      }

      gamesresult.innerHTML = exit

    })
}

document.body.onload = () => {
  preencherstores()
  preenchergenres()
  preencherGames()
}


