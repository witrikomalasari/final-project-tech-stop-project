import axios from 'axios';

export const getALlCategory = () => async dispatch => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'https://techstop.gabatch11.my.id/category',
    });

    // console.log('ini ', res.data.data);

    return dispatch({
      type: 'ALL_CATEGORY',
      payload: res.data.data,
    });
  } catch (error) {
    console.log('category not found', error);
  }
};

export const getTopRated = categoryId => async dispatch => {
  try {
    const res = await axios({
      method: 'GET',
      url: `https://techstop.gabatch11.my.id/partner/?verified_status=verified`,
    });

    // console.log('ini ', res.data.data);

    return dispatch({
      type: 'TOP_RATED',
      payload: res.data.data,
    });
  } catch (error) {
    console.log('category not found', error);
  }
};

export const getNearLoc = () => async dispatch => {
  try {
    const res = await axios({
      method: 'GET',
      url: `https://techstop.gabatch11.my.id/partner/?verified_status=verified`,
    });

    // console.log('ini ', res.data.data);

    return dispatch({
      type: 'NEAR_LOC',
      payload: res.data.data,
    });
  } catch (error) {
    console.log('category not found', error);
  }
};

export const getDetailloc = detailloc => async dispatch => {
  try {
    return dispatch({
      type: 'DETAIL_LOC',
      payload: detailloc,
    });
  } catch (error) {
    console.log('category not found', error);
  }
};
