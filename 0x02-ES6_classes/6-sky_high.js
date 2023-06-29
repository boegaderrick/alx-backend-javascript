import Building from './5-building';

/* eslint-disable no-underscore-dangle */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  set sqft(value) {
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }

  set floors(value) {
    this._floors = value;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
