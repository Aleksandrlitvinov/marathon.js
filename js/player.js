class Player {
  constructor(props) {
    this.name = props.name;
    this.hp = 100;
    this.img = `http://reactmarathon-api.herokuapp.com/assets/${this.name}.gif`;
    this.weapon = props.weapon;
    this.player = props.player;
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
  weapon: [],
  player: 1,
})

export const player2 = new Player({
  name: 'sonya',
  weapon: [],
  player: 2,
})



