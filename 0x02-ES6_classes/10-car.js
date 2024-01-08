export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new this.constructor();
  }
}
