const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('button')

const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: [],
  player: 1,
  attack: function () {
    console.log(`${player1.name} Fight...`)
  },
  changeHP: changeHP,
  elHP: elHP,
  renderHP: renderHP
}

const player2 = {
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: [],
  player: 2,
  attack: function () {
    console.log(`${player2.name} Fight...`);
  },
  changeHP: changeHP,
  elHP: elHP,
  renderHP: renderHP
}

function createElement(tag, className){
  const $tag = document.createElement(tag)
  if(className){
    $tag.classList.add(className)
  }
  return $tag
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

function showResultText(name){
  const $winTitle = createElement('div', 'loseTitle')
  if(name){
    $winTitle.innerText = `${name} wins!`
  }else $winTitle.innerText = `draw`
  return $winTitle
}

function getRandom(num){
  let randomNum = Math.ceil(Math.random() * num)
  return randomNum
}

function changeHP(randomNum) {
  this.hp -= randomNum
  if (this.hp <= 0) {
    this.hp = 0
  }
}

function elHP(){
  return  document.querySelector(`.player${this.player} .life`)
}

function renderHP(){
  this.elHP().style.width = this.hp + '%'
}

function createReloadButton(){
  const $reload = createElement('div', 'reloadWrap')
  const $reloadButton = createElement('button', 'button')
  $reloadButton.innerText = 'Restart'
  $arenas.append($reload)
  $reload.append($reloadButton)
  $reloadButton.addEventListener('click', function (){
    window.location.reload()
  })
}

$randomButton.addEventListener('click', function (){
  player1.changeHP(getRandom(20))
  player2.changeHP(getRandom(20))
  player1.elHP()
  player2.elHP()
  player1.renderHP()
  player2.renderHP()

  if(player1.hp === 0 || player2.hp === 0){
    $randomButton.disabled = true
  }
  if(player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.append(showResultText(player2.name))
    createReloadButton()
  }else if(player2.hp === 0 && player2.hp < player1.hp){
    $arenas.append(showResultText(player1.name))
    createReloadButton()
  }else if(player2.hp === 0 && player2.hp ===0){
    $arenas.append(showResultText())
    createReloadButton()
  }
})



$arenas.append(createPlayer(player1))
$arenas.append(createPlayer(player2))










