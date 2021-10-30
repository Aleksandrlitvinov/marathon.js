class Player {
  constructor({name, weapon, player}) {
    this.name = name;
    this.hp = 100;
    this.img = `http://reactmarathon-api.herokuapp.com/assets/${this.name}.gif`;
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
}

export const player1 = new Player({
  name: 'liukang',
  weapon: ['knife', 'sword', 'dirk'],
  player: 1,
})

export const player2 = new Player({
  name: 'sonya',
  weapon: ['knife', 'gun', 'brass knuckles'],
  player: 2,
})



