import Resource from '../resource';

export default class FixedTermProduct extends Resource {
  constructor({ countryCode = null }) {
    super({ resourceType: 'fixed_term_products' });
    this._countryCode = countryCode;
  }

  getAll() {
    const queryParams = { country_code: this.countryCode };
    return super.getAll(queryParams);
  }

  get countryCode() {
    return this._countryCode;
  }

  set countryCode(countryCode) {
    this._countryCode = countryCode;
  }
}
