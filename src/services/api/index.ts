import { retry } from "ts-retry-promise";
import axios from "axios";
const DEFAULT_API_RETRIES = 3;
const API_RETRIES_DELAY = 100;
class Api {
  async get(url: string, retries = DEFAULT_API_RETRIES) {
    try {
      return await retry(
        async () => {
          const response = await axios.get(url);
          try {
            return response.data;
          } catch (error) {
            throw new Error(`Invalid response for url '${url}'`);
          }
        },
        { retries, delay: API_RETRIES_DELAY }
      );
    } catch (error) {
      console.log(error);
    }
  }
  async post(url: string, body: any) {
    const response = await axios.post(url, body);

    try {
      return response;
    } catch (error) {
      throw new Error(`Invalid response for url '${url}'`);
    }
  }
}

const api = new Api();
export default api;
