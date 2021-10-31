import {createElement} from "./create.js";

export class Player {
  constructor({name, hp, img, weapon, player}) {
    this.name = name;
    this.hp = hp;
    this.img = img
    this.weapon = weapon;
    this.player = player;
  }

  changeHP = (randomNum) => {
    this.hp -= randomNum
    if (this.hp <= 0) {
      this.hp = 0
    }
  };
  elHP = () => document.querySelector(`.player${this.player} .life`);

  renderHP = () => this.elHP().style.width = this.hp + '%';

  createPlayer = ({name, hp, player, img}) => {
    const $player = createElement('div', `player${player}`),
      $progressbar = createElement('div', 'progressbar'),
      $character = createElement('div', 'character'),
      $life = createElement('div', 'life'),
      $name = createElement('div', 'name'),
      $img = createElement('img',)

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
}




