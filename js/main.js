import {player1, player2} from "./models.js";
import {createElement, showResult, $arenas} from "./create.js";
import {playerAttack, enemyAttack, $formFight} from "./fight.js";
import {generateLogs} from "./logs.js";


const createPlayer = (playerObj) => {
  const{name, hp, player, img }  = playerObj
  const $player = createElement('div', `player${player}`),
        $progressbar = createElement('div', 'progressbar'),
        $character = createElement('div', 'character'),
        $life = createElement('div', 'life'),
        $name = createElement('div', 'name'),
        $img = createElement('img', )

  $life.style.width = `${hp}%`
  $img.src = img
  $name.innerHTML = name

  $player.append($progressbar)
  $player.append($character)
  $progressbar.append($life)
  $progressbar.append($name)
  $character.append($img)

  return $player
}

generateLogs('start', player1, player2)

$formFight.addEventListener('submit',  (e) => {
  e.preventDefault()
  const enemy = enemyAttack()
  const player = playerAttack()

  if (player.defence !== enemy.hit){
    player1.changeHP(enemy.value)
    player1.renderHP()
    generateLogs('hit', player2, player1, enemy.value)
    generateLogs('defence', player1, player2)
  }
  if (enemy.defence !== player.hit){
    player2.changeHP(player.value)
    player2.renderHP()
    generateLogs('hit', player1, player2, player.value )
    generateLogs('defence', player2, player1)
  }
  showResult()
})


$arenas.append(createPlayer(player1))
$arenas.append(createPlayer(player2))










