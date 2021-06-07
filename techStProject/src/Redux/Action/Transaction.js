import axios from 'axios';
import * as types from '../../Default/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const orderTransaction = (
  id,
  date,
  address,
  totalitem,
) => async distpatch => {
  const token = await AsyncStorage.getItem('access_token');
  const data = await axios({
    method: 'POST',
    url: 'https://techstop.gabatch11.my.id/transaction',
    headers: {
      Authorization: 'Bearer ' + token,
    },
    data: {
      id_partner: id,
      appointment_date: date,
      appointment_address: address,
      total_item: totalitem,
    },
  });
  console.log(data);
  return {data: data};
};
