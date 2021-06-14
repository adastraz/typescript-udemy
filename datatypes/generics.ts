class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: string): T {
    return this.collection[index]
  }
}

const arr = new ArrayOfAnything(['a', 'b', 'c'])


// exapmle of generics with functions

function printNumbers(arr: number[]): void {
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
  }
}

function printStrings(arr: string[]): void {
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
  }
}

printAnything(['a', 'b', 'c'])

// generic constraints

interface Printable {
  print(): void
}

class Car {
  print() {
    console.log('i am a car')
  }
}

class House {
  print() {
    console.log('i am a house')
  }
}

function printHouseOrCar<T extends Printable>(arr: T[]): void {
  for (let i=0; i<arr.length; i++) {
    arr[i].print()
  }
}

printHouseOrCar([new House(), new Car()])