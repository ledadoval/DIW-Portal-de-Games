const apiKey = 'ae575ca5f3dc45038507472522fb4e2e'
const pageSize = 4
let searchtext = document.getElementById('searchtext')
let searchbutton = document.getElementById('searchbutton')
let gamesresult = document.getElementById('gamesresult')


function mostrarGames(page) {
 if(!page) page = 1
  let url = `https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=${pageSize}`
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      let exit = ''
      for (let i = 0; i < data.results.length; i++) {
        let game = data.results[i]

        exit += `
            
            <div class="card border-danger mb-3" style="max-width: 50%;">
                  <img src="${game.background_image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title-sr">${game.name}</h5>
                      <a href="https://rawg.io/games/${game.slug}" class="a-txt"> + infos</a>
                    </div>
                  </div>
                </div>
            `
      }

      gamesresult.innerHTML = exit
    })


}


function pesquisar() {
  let pesquisaText = searchtext.value
  let url = `https://api.rawg.io/api/games?key=${apiKey}&search=${pesquisaText}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let exit = ''
      for (let i = 0; i < data.results.length; i++) {
        let game = data.results[i]


        exit += `
            <div class="col-4">
            <div class="card border-danger" style="max-width: 80%;">
                  <img src="${game.background_image}" class="card-img-top" style="max-height: 132px">
                    <div class="card-body">
                      <h5 class="card-title-sr">${game.name}</h5>
                      <a href="https://rawg.io/games/${game.slug}" class="a-txt"> + infos</a>
                    </div>
                  </div>
                </div>
            `
      }

      gamesresult.innerHTML = exit
    })


}

document.body.onload = () => {
  searchbutton.addEventListener('click', pesquisar)
  mostrarGames()

}
