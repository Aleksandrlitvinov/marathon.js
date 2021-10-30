import {player1, player2} from "./player.js";
import {$arenas, createElement, showResult} from "./create.js";
import {$formFight, playerAttack, enemyAttack} from "./fight.js";
import {generateLogs} from "./logs.js";

export class Game {
  createPlayer = ({ name, hp, player, img }) => {
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
  start = () => {
    $arenas.append(this.createPlayer(player1))
    $arenas.append(this.createPlayer(player2))
    generateLogs('start', player1, player2)

    $formFight.addEventListener('submit',  (e) => {
      e.preventDefault()
      const enemy = enemyAttack()
      const player = playerAttack()

      if (player.defence !== enemy.hit){
        player1.changeHP(enemy.value)
        player1.renderHP()
        generateLogs('hit', player2, player1, enemy.value)
      }else {
        generateLogs('defence', player1, player2)
      }

      if (enemy.defence !== player.hit){
        player2.changeHP(player.value)
        player2.renderHP()
        generateLogs('hit', player1, player2, player.value )
      }else {
        generateLogs('defence', player2, player1)
      }
      showResult()
    })
  }
}