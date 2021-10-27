import {changeHP, elHP, renderHP} from "./hp.js";

export const player1 = {
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

export const player2 = {
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

