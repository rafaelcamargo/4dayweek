import axios from 'axios';

const _public = {};

_public.get = (url, options) => {
  return request({
    method: 'get',
    url,
    ...options
  });
};

_public.post = (url, data, options) => {
  return request({
    method: 'post',
    url,
    data,
    ...options
  });
};

_public.put = (url, data, options) => {
  return request({
    method: 'put',
    url,
    data,
    ...options
  });
};

_public.delete = (url, options) => {
  return request({
    method: 'delete',
    url,
    ...options
  });
};

function request(config) {
  return axios(config);
}

export default _public;
