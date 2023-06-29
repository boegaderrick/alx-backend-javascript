import Car from './10-car';

/* eslint-disable no-underscore-dangle */
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /* eslint-disable class-methods-use-this */
  cloneCar() {
    return new Car();
  }
}
