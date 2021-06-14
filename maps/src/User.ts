import faker from 'faker'
import { Item } from './Map'

export class User implements Item {
  name: string
  location: { 
    lat: number, 
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  markerContent(): string {
    return `Username: ${this.name}`
  }
}