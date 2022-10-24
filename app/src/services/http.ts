import { api } from 'boot/axios';
export default class Http {
  async request(
    method: string,
    url: string,
    headers?: Record<string, any>,
    body?: Record<string, any> | any,
    sendCredentials = true
  ): Promise<any> {
    if (method === 'get' && body) {
      throw new Error('Cannot send body for get requests');
    }
    const options = this.buildOptions(
      method,
      url,
      sendCredentials,
      headers,
      body
    );
    //console.log(options);
    try {
      const response = await api.request(options);
      //console.log('finding success');
      console.log(response);
      const res = {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
      };
      return res;
    } catch (error: any) {
      // console.log(error);
      const errResponse = error.response;
      const err = {
        status: errResponse ? errResponse.status : 500,
        message: errResponse ? errResponse.data : 'Request failed',
        responseReceived: errResponse ? true : false,
      };
      console.log('http service error log:');
      console.log(err);
      // Return error so that processing can happen further down the line
      return err;
    }
  }

  private buildOptions(
    method: string,
    url: string,
    sendCredentials: boolean,
    headers?: Record<string, any>,
    body?: Record<string, any> | string
  ): Record<string, any> {
    const options: Record<string, any> = {};
    options.method = method;
    options.url = url;
    options.withCredentials = sendCredentials;
    if (headers) options.headers = headers;
    if (body) options.data = body;

    return options;
  }
}
