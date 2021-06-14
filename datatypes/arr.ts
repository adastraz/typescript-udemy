const carMakers = ['saab', 'chevy', 'honda']
const dates = [new Date(), new Date()]

const carsByMake = [
  ['f150'], ['9-3'], ['accord']
] 
const carsByMake2: string[][] = []

const car = carMakers[0]
const myCar = carMakers.pop()

// carMakers.push(1)

carMakers.map((car: string): string => {
  return car
})

const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2030/12/31')