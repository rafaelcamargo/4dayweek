import axios from 'axios';
import baseResource from './base';

jest.mock('axios');

describe('Base Resource', () => {
  it('should make a get request', () => {
    const url = 'http://some.url.com/users';
    baseResource.get(url);
    expect(axios).toHaveBeenCalledWith({ method: 'get', url });
  });

  it('should make a get request containing params', () => {
    const url = 'http://some.url.com/users';
    const params = { limit: 10 };
    baseResource.get(url, { params });
    expect(axios).toHaveBeenCalledWith({ method: 'get', url, params });
  });

  it('should make a get request containing other options', () => {
    const url = 'http://some.url.com/users';
    const header = { 'Content-Type': 'application/json' };
    baseResource.get(url, { header });
    expect(axios).toHaveBeenCalledWith({ method: 'get', url, header });
  });

  it('should make a post request', () => {
    const url = 'http://some.url.com/messages';
    const data = { some: 'data' };
    baseResource.post(url, data);
    expect(axios).toHaveBeenCalledWith({ method: 'post', url, data });
  });

  it('should make a post request with options', () => {
    const url = 'http://some.url.com/messages';
    const data = { file: 'file' };
    const header = { 'Content-Type': 'multipart/form-data' };
    baseResource.post(url, data, { header });
    expect(axios).toHaveBeenCalledWith({ method: 'post', url, data, header });
  });

  it('should make a put request', () => {
    const url = 'http://some.url.com/messages/123';
    const data = { some: 'data' };
    baseResource.put(url, data);
    expect(axios).toHaveBeenCalledWith({ method: 'put', url, data });
  });

  it('should make a put request with options', () => {
    const url = 'http://some.url.com/messages/123';
    const data = { some: 'data' };
    const header = { 'Content-Type': 'multipart/form-data' };
    baseResource.put(url, data, { header });
    expect(axios).toHaveBeenCalledWith({ method: 'put', url, data, header });
  });

  it('should make a delete request', () => {
    const url = 'http://some.url.com/messages/123';
    baseResource.delete(url);
    expect(axios).toHaveBeenCalledWith({ method: 'delete', url });
  });

  it('should make a delete request with options', () => {
    const url = 'http://some.url.com/messages/123';
    const header = { Authorizarion: 'Bear 123' };
    baseResource.delete(url, { header });
    expect(axios).toHaveBeenCalledWith({ method: 'delete', url, header });
  });
});
