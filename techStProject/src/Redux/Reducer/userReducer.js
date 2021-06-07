import * as types from '../../Default/Types';

const initialState = {
  loading: false,
  authusaha: {},
  email: '',
  emailpartner: '',
  profile: {},
  profilemitra: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });
    case types.GET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case types.GET_EMAIL_PARTNER:
      return {
        ...state,
        emailpartner: action.payload,
      };
    case types.GET_AUTH_USAHA:
      return {
        ...state,
        authusaha: action.payload,
      };
    case types.GET_USER_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        profile: action.payload,
      });
    case types.GET_USER_DETAIL_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });

    case types.GET_MITRA_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        profilemitra: action.payload,
      });
    case types.GET_MITRA_DETAIL_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });

    default:
      return state;
  }
};

export default userReducer;
