import {player1, player2} from "./game.js";
import {generateLogs} from "./logs.js";

export const $arenas = document.querySelector('.arenas')
export const $randomButton = document.querySelector('.button')

export const createElement = (tag, className) => {
  const $tag = document.createElement(tag)
  if (className) {
    $tag.classList.add(className)
  }
  return $tag
}

export const createReloadButton = () => {
  const $reload = createElement('div', 'reloadWrap')
  const $reloadButton = createElement('button', 'button')
  $reloadButton.innerText = 'Restart'
  $arenas.append($reload)
  $reload.append($reloadButton)
  $reloadButton.addEventListener('click', () => {
    window.location.href = 'index.html'
  })
}

export const showResultText = (name) => {
  const $winTitle = createElement('div', 'loseTitle')
  if (name) {
    $winTitle.innerText = `${name} wins!`
  } else $winTitle.innerText = `draw`
  return $winTitle
}

export const showResult = () => {

  if (player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true
    createReloadButton()
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.append(showResultText(player2.name))
    generateLogs('end', player1, player2)
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.append(showResultText(player1.name))
    generateLogs('end', player1, player2)
  } else if (player2.hp === 0 && player2.hp === 0) {
    $arenas.append(showResultText())
    generateLogs('draw', player1, player2)
  }
}