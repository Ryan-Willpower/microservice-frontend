import random from 'randomstring'

export function keyGen(index: number) {
  const randString = random.generate(7)

  return `${index}_${randString}`
}
