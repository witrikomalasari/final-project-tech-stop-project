import {searchCategoryAction} from '../Action/searchAction';

const initialState = {
  searchservicename: [],
  searchfilter: [],
  searchcategory: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_SERVICE_NAME':
      return {
        ...state,
        searchservicename: action.payload,
      };
    case 'SEARCH_FILTER':
      return {
        ...state,
        searchfilter: action.payload,
      };
    case 'SEARCH_CATEGORY':
      return {
        ...state,
        searchcategory: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducer;
