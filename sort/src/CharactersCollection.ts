import { Data, Sorter } from './Sorter'

export class CharactersCollection extends Sorter implements Data{
  constructor(public data: string) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
  }

  swap(leftIndex: number, rightIndex: number): void {
    const arr = this.data.split('')

    const left = arr[leftIndex]
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = left

    this.data = arr.join('')
  }
}