
const player1 = {
  name: 'Scorpion',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: [],
  attack: function () {
    console.log(`${player1.name} Fight...`);
  }
}

const player2 = {
  name: 'Sonya',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: [],
  attack: function () {
    console.log(`${player2.name} Fight...`);
  }
}


function createPlayer(style, player) {
  const arenas = document.querySelector('.arenas')

  let div = document.createElement('div')
  div.classList.add(style)

  let progressbar = document.createElement('div')
  progressbar.classList.add('progressbar')

  let character = document.createElement('div')
  character.classList.add('character')

  let life = document.createElement('div')
  life.classList.add('life')
  life.style.width = `${player.hp}%`

  let name = document.createElement('div')
  name.classList.add('name')
  name.innerHTML = `${player.name}`

  let img = document.createElement('img')
  img.src = `${player.img}`

  arenas.append(div)
  div.append(progressbar)
  div.append(character)
  progressbar.append(life)
  progressbar.append(name)
  character.append(img)
}

createPlayer('player1', player1)
createPlayer('player2', player2)