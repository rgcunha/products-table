import get from './request';

export default class Resource {
  constructor({ resourceType }) {
    this.resourceType = resourceType;
    this.path = this.buildPath();
  }

  get(id) {
    const path = this.buildPath(id);
    return get(path);
  }

  getAll(queryParams = null) {
    return get(this.path, queryParams);
  }

  buildPath(id = null) {
    let path = `${this.resourceType}`;
    if (id) { path += `/${id}`; }
    return path;
  }
}
