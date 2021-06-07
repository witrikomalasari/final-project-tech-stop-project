import * as types from '../../Default/Types';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getRequest = () => ({
  type: types.GET_REQUEST,
});

export const emailAccess = email => ({
  type: types.GET_EMAIL,
  payload: email,
});

export const emailAccessPartner = emailpartner => ({
  type: types.GET_EMAIL_PARTNER,
  payload: emailpartner,
});

export const regisUsaha = authusaha => ({
  type: types.GET_AUTH_USAHA,
  payload: authusaha,
});

// export const regisUsahaFailure = authusaha => ({
//   type: types.GET_AUTH_USAHA,
//   error,
// });

const getUserDetailSuccess = userDetail => ({
  type: types.GET_USER_DETAIL_SUCCESS,
  payload: userDetail,
});

const getUserDetailFailure = error => ({
  type: types.GET_USER_DETAIL_FAILURE,
  error,
});

const getMitraDetailSuccess = mitradetail => ({
  type: 'GET_MITRA_DETAIL_SUCCESS',
  payload: mitradetail,
});

const getMitraDetailFailure = error => ({
  type: 'GET_MITRA_DETAIL_FAILURE',
  error,
});

export const getUserDetailAction = () => {
  let url = `https://techstop.gabatch11.my.id/user`;

  return async dispatch => {
    const token = await AsyncStorage.getItem('access_token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const response = await axios.get(url, {
        headers: {Authorization: AuthStr},
      });
      // console.log('this is run', response.data.data);
      dispatch(getUserDetailSuccess(response.data.data));
    } catch (error) {
      // console.log('Error', error);
      dispatch(getUserDetailFailure(error));
    }
  };
};

export const getMitraDetailAction = () => {
  let url = `https://techstop.gabatch11.my.id/partner/getPartner`;

  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    const AuthStr = 'Bearer '.concat(token);
    try {
      const response = await axios.get(url, {
        headers: {Authorization: AuthStr},
      });
      dispatch(getMitraDetailSuccess(response.data.data));
    } catch (error) {
      console.log('Error', error);
      dispatch(getMitraDetailFailure(error));
    }
  };
};
