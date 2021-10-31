export const $formFight = document.querySelector('.control')
export const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}

export const Fight = [
  'head',
  'body',
  'foot'
]

export const playerAttack = () => {
  const attack = {};
  for (let item of $formFight){
    if(item.checked && item.name === 'hit'){
      attack.hit = item.value
    }
    if (item.checked && item.name === 'defence'){
      attack.defence = item.value
    }
    item.checked = false
  }
  return attack
}

export const enemyAttack = async ({hit, defence} = playerAttack())  => {
  const body = await fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
    method: 'POST',
    body: JSON.stringify({
      hit,
      defence,
    })
  });
  const result = await body.json()
  return result
}

