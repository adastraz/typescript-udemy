class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep')
  }
}

const bemu = new Vehicle('light silver')
console.log(bemu.color)

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }

  private drive(): void {
    console.log('vroom')
  }

  startDrive() : void {
    this.drive()
    this.honk()
  }
}

const saabana = new Car(4, 'silver')
saabana.startDrive()
