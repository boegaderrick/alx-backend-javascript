/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    const obj = this.constructor.prototype;
    if (!Object.prototype.hasOwnProperty.call(obj, 'evacuationWarningMessage')) {
      this.evacuationWarningMessage();
    }
    this._sqft = sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw Error('Class extending Building must override evacuationWarningMessage');
  }
}
