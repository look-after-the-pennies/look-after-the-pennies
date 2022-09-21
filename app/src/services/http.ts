import axios from 'axios';
import { stringify } from 'querystring';

export default class Http {
  async request(
    method: string,
    url: string,
    headers?: Record<string, any>,
    body?: Record<string, any> | any
  ): Promise<any> {
    if (method === 'get' && body) {
      throw new Error('Cannot send body for get requests');
    }
    const options = this.buildOptions(method, url, headers, body);
    //console.log(options);
    try {
      const response = await axios.request(options);
      //console.log('finding success');
      console.log(response);
      const res = {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
      };
      return res;
    } catch (error: any) {
      const errResponse = error.response;
      const err = {
        status: errResponse ? errResponse.status : 500,
        message: errResponse ? errResponse.data : 'Request failed',
        responseReceived: errResponse ? true : false,
      };
      console.log(err);
      return err;
    }
  }

  private buildOptions(
    method: string,
    url: string,
    headers?: Record<string, any>,
    body?: Record<string, any> | string
  ): Record<string, any> {
    const options: Record<string, any> = {};
    options.method = method;
    options.url = url;
    if (headers) {
      options.headers = headers;
    }
    if (body) {
      options.data = body;
    }

    return options;
  }
}
