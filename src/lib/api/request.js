import axios from 'axios';

const normalizedResource = ({ id, attributes }) => {
  const normalized = {};
  normalized.id = id;
  Object.keys(attributes).forEach((key) => {
    normalized[key] = attributes[key];
  });
  return normalized;
};

const processBody = body => body.data.map(normalizedResource);

const processResponse = response => processBody(response.data);

const sendRequest = ({ method, path, data = {}, queryParams = null }) => {
  const config = {
    baseURL: 'https://api-dev.savedo.de/products/',
    headers: {
      'Content-Type': 'application/vnd.api+json',
    },
    params: queryParams,
    data,
  };
  return axios[method](path, config)
    .then(response => processResponse(response));
};

const get = (path, queryParams = null) => sendRequest({ method: 'get', path, queryParams });

export default get;
