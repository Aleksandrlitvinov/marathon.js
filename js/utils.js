
export const getRandom = (num) => Math.ceil(Math.random() * num)

export const getTime = () => {
  const date = new Date()
  const normalize = (num) => num.toString().length > 1 ? num : `0${num}`
  const time = `${normalize(date.getHours())}:${normalize(date.getMinutes())}`
  return time
}





