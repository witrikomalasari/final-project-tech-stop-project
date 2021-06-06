import * as types from '../../Default/Types';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getOrderUser = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('access_token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const res = await axios({
        method: 'GET',
        url:
          'https://techstop.gabatch11.my.id/transaction?order_status=all&page=1',
        headers: {Authorization: AuthStr},
      });

      // console.log('ini ', res);

      return dispatch({
        type: 'GET_ORDER_USER',
        payload: res.data.data,
      });
    } catch (error) {
      console.log('category not found', error);
    }
  };
};

export const getOrderUserWaiting = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('access_token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const res = await axios({
        method: 'GET',
        url:
          'https://techstop.gabatch11.my.id/transaction?order_status=waiting&page=1',
        headers: {Authorization: AuthStr},
      });

      console.log('ini ', res);

      return dispatch({
        type: 'GET_ORDER_USER_WAITING',
        payload: res.data.data,
      });
    } catch (error) {
      console.log('category not found', error);
    }
  };
};

export const getOrderUserAccepted = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('access_token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const res = await axios({
        method: 'GET',
        url:
          'https://techstop.gabatch11.my.id/transaction?order_status=accepted&page=1',
        headers: {Authorization: AuthStr},
      });

      // console.log('ini accept', res);

      return dispatch({
        type: 'GET_ORDER_USER_ACCEPTED',
        payload: res.data.data,
      });
    } catch (error) {
      console.log('category not found', error);
    }
  };
};

export const getOrderUserOnprocess = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('access_token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const res = await axios({
        method: 'GET',
        url:
          'https://techstop.gabatch11.my.id/transaction?order_status=on process&page=1',
        headers: {Authorization: AuthStr},
      });

      console.log('ini onprocess ', res);

      return dispatch({
        type: 'GET_ORDER_USER_ONPROCESS',
        payload: res.data.data,
      });
    } catch (error) {
      console.log('category not found', error);
    }
  };
};

export const getOrderUserDone = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('access_token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const res = await axios({
        method: 'GET',
        url:
          'https://techstop.gabatch11.my.id/transaction?order_status=done&page=1',
        headers: {Authorization: AuthStr},
      });

      // console.log('ini done ', res);

      return dispatch({
        type: 'GET_ORDER_USER_DONE',
        payload: res.data.data,
      });
    } catch (error) {
      console.log('category not found', error);
    }
  };
};

export const getDetailUser = id => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('access_token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://techstop.gabatch11.my.id/transaction/' + id,
        headers: {Authorization: AuthStr},
      });

      // console.log('ini ', res);

      return dispatch({
        type: 'GET_DETAIL_ORDER_USER',
        payload: res.data.data,
      });
    } catch (error) {
      console.log('category not found', error);
    }
  };
};

export const getOrderMitra = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const res = await axios({
        method: 'GET',
        url:
          'https://techstop.gabatch11.my.id/transaction/partner?order_status=all&page=1',
        headers: {Authorization: AuthStr},
      });

      // console.log('ini ', res);

      return dispatch({
        type: 'GET_ORDER_MITRA',
        payload: res.data.data,
      });
    } catch (error) {
      console.log('category not found', error);
    }
  };
};

export const getDetailMitra = id => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://techstop.gabatch11.my.id/transaction/partner/' + id,
        headers: {Authorization: AuthStr},
      });

      // console.log('ini ', res);

      return dispatch({
        type: 'GET_DETAIL_ORDER_MITRA',
        payload: res.data.data,
      });
    } catch (error) {
      console.log('category not found', error);
    }
  };
};

export const getOrderMitraWaiting = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const res = await axios({
        method: 'GET',
        url:
          'https://techstop.gabatch11.my.id/transaction/partner?order_status=waiting&page=1',
        headers: {Authorization: AuthStr},
      });

      // console.log('ini ', res);

      return dispatch({
        type: 'GET_ORDER_MITRA_WAITING',
        payload: res.data.data,
      });
    } catch (error) {
      console.log('category not found', error);
    }
  };
};

export const getOrderMitraAccepted = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const res = await axios({
        method: 'GET',
        url:
          'https://techstop.gabatch11.my.id/transaction/partner?order_status=accepted&page=1',
        headers: {Authorization: AuthStr},
      });

      console.log('ini accept', res);

      return dispatch({
        type: 'GET_ORDER_MITRA_ACCEPTED',
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrderMitraOnprocess = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const res = await axios({
        method: 'GET',
        url:
          'https://techstop.gabatch11.my.id/transaction/partner?order_status=on process&page=1',
        headers: {Authorization: AuthStr},
      });

      // console.log('ini onprocess ', res);

      return dispatch({
        type: 'GET_ORDER_MITRA_ONPROCESS',
        payload: res.data.data,
      });
    } catch (error) {
      console.log('category not found', error);
    }
  };
};

export const getOrderMitraDone = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const res = await axios({
        method: 'GET',
        url:
          'https://techstop.gabatch11.my.id/transaction/partner?order_status=done&page=1',
        headers: {Authorization: AuthStr},
      });

      console.log('ini done ', res);

      return dispatch({
        type: 'GET_ORDER_MITRA_DONE',
        payload: res.data.data,
      });
    } catch (error) {
      console.log('category not found', error);
    }
  };
};
