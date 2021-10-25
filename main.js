const $arenas = document.querySelector('.arenas')
$randomButton = document.querySelector('.button')
const $formFight = document.querySelector('.control')
const $chat = document.querySelector('.chat')

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}

const ATTACK = [
  'head',
  'body',
  'foot'
]

const player1 = {
  name: 'Liu Kang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: [],
  player: 1,
  attack: function () {
    console.log(`${player1.name} Fight...`)
  },
  changeHP,
  elHP,
  renderHP,
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
  changeHP,
  elHP,
  renderHP,
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

function enemyAttack(){
  const hit = ATTACK[getRandom(3)-1]
  const defence = ATTACK[getRandom(3)-1]
  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  }
}

function playerAttack(){
  const attack = {};
  for (item of $formFight){
    if(item.checked && item.name === 'hit'){
      attack.value = getRandom(HIT[item.value])
      attack.hit = item.value
    }
    if (item.checked && item.name === 'defence'){
      attack.defence = item.value
    }
    item.checked = false
  }
  return attack
}

function showResult(){
  if(player1.hp === 0 || player2.hp === 0){
    $randomButton.disabled = true
    createReloadButton()
  }
  if(player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.append(showResultText(player2.name))
    generateLogs('end', player1, player2)
  }else if(player2.hp === 0 && player2.hp < player1.hp){
    $arenas.append(showResultText(player1.name))
    generateLogs('end', player1, player2)
  }else if(player2.hp === 0 && player2.hp === 0){
    $arenas.append(showResultText())
    generateLogs('draw', player1, player2)
  }
}

function getTime(){
  const date = new Date()
  const normalize = (num) => num.toString().length > 1 ? num : `0${num}`
  const time = `${normalize(date.getHours())}:${normalize(date.getMinutes())}`
  return time
}

function generateLogs(type, player1, player2, value){
  let text = logs[type]
  switch (type) {
    case 'start':
      text = text
        .replace(['time'], getTime())
        .replace('[player1]', player1.name)
        .replace('[player2]', player2.name)

      break
    case 'hit':
      text = text
        [getRandom(logs[type].length)-1]
        .replace('[playerKick]', player1.name)
        .replace('[playerDefence]', player2.name)
      text = `${getTime()} ${text} -${value} [${player2.hp}/100] `
      break
    case 'defence':
      text = text
        [getRandom(logs[type].length)-1]
        .replace('[playerKick]', player1.name)
        .replace('[playerDefence]', player2.name)
      text = `${getTime()} ${text}`
      break
    case 'draw':
      text = `${getTime()} - ${text}`
      break
    case 'end':
      text = text
        [getRandom(logs[type].length)-1]
        .replace('[playerWins]', player1.hp > player2.hp ? player1.name : player2.name )
        .replace('[playerLose]', player1.hp < player2.hp ? player1.name : player2.name)
      text = `${getTime()} ${text}`
      break
  }
  const el = `<p> ${text} </p>`
  $chat.insertAdjacentHTML('afterbegin', el)
}

generateLogs('start', player1, player2)

$formFight.addEventListener('submit', function (e){
  e.preventDefault()
  const enemy = enemyAttack()
  const player = playerAttack()

  if (player.defence !== enemy.hit){
    player1.changeHP(enemy.value)
    player1.renderHP()
    generateLogs('hit', player2, player1, enemy.value)
  }
  if (enemy.defence !== player.hit){
    player2.changeHP(player.value)
    player2.renderHP()
    generateLogs('hit', player1, player2, player.value )
  }
  showResult()
})


$arenas.append(createPlayer(player1))
$arenas.append(createPlayer(player2))










