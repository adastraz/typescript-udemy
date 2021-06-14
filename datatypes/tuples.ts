// tuples are array like structures where each of the elements represents 
// multiple properties to explain one thing
// ['brown', true, 40]

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]
const sprint: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]

const carSpecs: [number, number] = [400, 3354]

const carStats = {
  horsepower: 400,
  weight: 3354
}