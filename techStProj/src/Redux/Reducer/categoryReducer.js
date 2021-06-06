const initialState = {
  status: 0,
  category: [],
  toprated: [],
  nearloc: [],
  detailloc: {},
  icon: [],
  search: {},
};

const categoryReducer = (state = initialState, action) => {
  const {type, payload} = action;
  //   console.log('data yang diterima reducer dari action', action);
  switch (type) {
    case 'ALL_CATEGORY':
      return {
        ...state,
        category: payload,
      };
    case 'TOP_RATED':
      return {
        ...state,
        toprated: payload,
      };
    case 'NEAR_LOC':
      return {
        ...state,
        nearloc: payload,
      };
    case 'DETAIL_LOC':
      return {
        ...state,
        detailloc: payload,
      };
    // case 'SEARCH_SERVICE_NAME':
    //   return {
    //     ...state,
    //     search: payload,
    //   };

    default:
      return state;
  }
};

export default categoryReducer;
