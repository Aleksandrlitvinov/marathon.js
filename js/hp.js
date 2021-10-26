
export function changeHP(randomNum) {
  this.hp -= randomNum
  if (this.hp <= 0) {
    this.hp = 0
  }
}

export function elHP() {
  return  document.querySelector(`.player${this.player} .life`)
}

export function renderHP(){
  this.elHP().style.width = this.hp + '%'
}
