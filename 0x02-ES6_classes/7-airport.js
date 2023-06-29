const util = require('util');

/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[${typeof this} ${this._code}]`;
  }

  [util.inspect.custom]() {
    const clss = this.constructor.name;
    return `${clss} [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
