import {getRandom} from "./utils.js";

export const $formFight = document.querySelector('.control')
const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}

const Fight = [
  'head',
  'body',
  'foot'
]

export const playerAttack = () => {
  const attack = {};
  for (let item of $formFight){
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

export const enemyAttack = () => {
  const hit = Fight[getRandom(3)-1],
        defence = Fight[getRandom(3)-1]
  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  }
}