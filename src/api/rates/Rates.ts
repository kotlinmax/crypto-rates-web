import {IGetRates, IRatesRepository} from './IRates';
import {Api} from '..';

const ratesRepository: IRatesRepository = {
  getRates: async () => {
    const {data} = await Api.rates.get<IGetRates>('extended');
    return data;
  },
};

export default ratesRepository;
