const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('button')

const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: [],
  player: 1,
  attack: function () {
    console.log(`${player1.name} Fight...`);
  }
}

const player2 = {
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: [],
  player: 2,
  attack: function () {
    console.log(`${player2.name} Fight...`);
  }
}

function createPlayer(playerObj) {
  const $player = createElement('div', `player${playerObj.player}`)
  const $progressbar = createElement('div', 'progressbar')
  const $character = createElement('div', 'character')
  const $life = createElement('div', 'life')
  const $name = createElement('div', 'name')
  const $img = createElement('img', )

  $life.style.width = `${playerObj.hp}%`
  $img.src = `${playerObj.img}`
  $name.innerHTML = `${playerObj.name}`

  $player.append($progressbar)
  $player.append($character)
  $progressbar.append($life)
  $progressbar.append($name)
  $character.append($img)

  return $player
}

$arenas.append(createPlayer(player1))
$arenas.append(createPlayer(player2))

$randomButton.addEventListener('click', function (){
  changeHP(player1)
  changeHP(player2)
  whoWin()
})

function createElement(tag, className){
  const $tag = document.createElement(tag)
  if(className){
    $tag.classList.add(className)
  }
  return $tag
}

function changeHP(player) {
  const $playerLife = document.querySelector(`.player${player.player} .life`)
  player.hp -= randomizer()
  if(player.hp <= 0){
    player.hp = 0
  }
  $playerLife.style.width = player.hp + '%'
}

function randomizer(){
  return Math.ceil(Math.random() * 20)
}

function playerWin(name){
  const $winTitle = createElement('div', 'loseTitle')
  $winTitle.innerText = `${name} wins!`
  return $winTitle
}
function draw(){
  const $drawTitle = createElement('div', 'loseTitle')
  $drawTitle.innerText = `draw !`
  return $drawTitle
}

function whoWin(){
  if(player1.hp <= 0 && player2.hp <= 0){
    player1.hp = 0
    player2.hp = 0
    $randomButton.disabled = true
    $arenas.append(draw())
  }
  else if(player1.hp <= 0) {
    player1.hp = 0
    $randomButton.disabled = true
    $arenas.append(playerWin(player2.name))
  }else if(player2.hp <= 0){
    player2.hp = 0
    $randomButton.disabled = true
    $arenas.append(playerWin(player1.name))
  }
}