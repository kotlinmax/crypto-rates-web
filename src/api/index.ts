import axios from 'axios';

export class Api {
  static rates = axios.create({
    baseURL: 'https://app.youhodler.com/api/v3/rates/', // TODO env
  });
}