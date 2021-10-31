import {Player} from "./player.js";
import {$arenas, showResult} from "./create.js";
import {$formFight, enemyAttack} from "./fight.js";
import {generateLogs} from "./logs.js";

export let player1
export let player2

export class Game {

  getPlayers = async () => {
    const body = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/players', {method: 'GET'}).then(res => res.json())
    return body
  }

  fight = async () => {
    const {player1: {hit: playerHit, defence: playerDefence, value}} = await enemyAttack()
    const {player2: {hit: enemyHit, defence: enemyDefence, value: enemyValue}} = await enemyAttack()

    if (playerDefence !== enemyHit) {
      player1.changeHP(enemyValue)
      player1.renderHP()
      generateLogs('hit', player2, player1, enemyValue)
    } else {
      generateLogs('defence', player1, player2)
    }
    if (enemyDefence !== playerHit) {
      player2.changeHP(value)
      player2.renderHP()
      generateLogs('hit', player1, player2, value)
    } else {
      generateLogs('defence', player2, player1)
    }
    showResult()
  }

  start = async () => {
    const players = await this.getPlayers()

    const p1 = JSON.parse(localStorage.getItem('player1'))
    const p2 = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose', {method: 'GET'}).then(res => res.json())

    player1 = new Player({
      ...p1,
      player: 1,
      rootSelector: 'arenas'
    })
    player2 = new Player({
      ...p2,
      player: 2,
      rootSelector: 'arenas'
    })

    $arenas.append(player1.createPlayer(player1))
    $arenas.append(player2.createPlayer(player2))
    generateLogs('start', player1, player2)

    $formFight.addEventListener('submit', (e) => {
      e.preventDefault()
      this.fight()
    })
  }

}