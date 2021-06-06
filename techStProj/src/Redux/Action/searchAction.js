import axios from 'axios';

// export const searchServicenameAction = () => async dispatch => {
//   try {
//     const res = await axios({
//       method: 'GET',
//       url:
//         'https://techstop.gabatch11.my.id/partner/searchByName?brand_service_name=ac&page=1',
//     });
//     console.log('isi dari res service name', res);

//     return dispatch({
//       type: 'SEARCH_CATEGORY',
//       payload: res.data.data.rows,
//     });
//   } catch (error) {
//     console.log('search category error', error);
//   }
// };

export const searchFilterAction = (
  search,
  // checkcategory,
  minprice,
  maxprice,
  checklocation,
  minrating,
  maxrating,
) => async dispatch => {
  // console.log('idx cat', checkcategory.length);
  //   const dataCategory = searchCategoryAction();
  //   console.log(dataCategory);
  try {
    const res = await axios({
      method: 'GET',
      url:
        'https://techstop.gabatch11.my.id/partner/searchByFilter?page=1&min_price=' +
        minprice +
        '&max_price=' +
        maxprice +
        '&min_rating=' +
        minrating +
        '&max_rating=' +
        maxrating +
        '&business_address=' +
        checklocation,
    });
    // const rescategory = await axios({
    //   method: 'GET',
    //   url:
    //     'https://techstop.gabatch11.my.id/partner/filterByCategory?id_category=' +
    //     checkcategory +
    //     '&page=1',
    // });
    const resservicename = await axios({
      method: 'GET',
      url:
        'https://techstop.gabatch11.my.id/partner/searchByName?brand_service_name=' +
        search +
        '&page=1',
    });
    // console.log('isi dari res action', rescategory.data);
    if (search.length > 0) {
      return dispatch({
        type: 'SEARCH_FILTER',
        payload: resservicename.data.data.rows,
      });
      // } else if (checkcategory.length > 0) {
      //   return dispatch({
      //     type: 'SEARCH_FILTER',
      //     payload: rescategory.data.data.rows,
      //   });
    } else {
      return dispatch({
        type: 'SEARCH_FILTER',
        payload: res.data.data.rows,
      });
    }
  } catch (error) {
    console.log('search error', error);
  }
};
