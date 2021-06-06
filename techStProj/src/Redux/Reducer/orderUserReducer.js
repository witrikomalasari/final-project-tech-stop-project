const initialState = {
  order: [],
  ordermitra: [],
  ordermitrawaiting: [],
  ordermitraaccepted: [],
  ordermitraonprocess: [],
  ordermitradone: [],
  orderdetailmitra: [],
  orderdetailuser: [],
  orderuserwaiting: [],
  orderuseraccepted: [],
  orderuseronprocess: [],
  orderuserdone: [],
};

const orderUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ORDER_USER':
      return {
        ...state,
        order: action.payload,
      };
    case 'GET_ORDER_USER_WAITING':
      return {
        ...state,
        orderuserwaiting: action.payload,
      };
    case 'GET_ORDER_USER_ACCEPTED':
      return {
        ...state,
        orderuseraccepted: action.payload,
      };
    case 'GET_ORDER_USER_ONPROCESS':
      return {
        ...state,
        orderuseronprocess: action.payload,
      };
    case 'GET_ORDER_USER_DONE':
      return {
        ...state,
        orderuserdone: action.payload,
      };
    case 'GET_DETAIL_ORDER_USER':
      return {
        ...state,
        orderdetailuser: action.payload,
      };
    case 'GET_ORDER_MITRA':
      return {
        ...state,
        ordermitra: action.payload,
      };
    case 'GET_ORDER_MITRA_WAITING':
      return {
        ...state,
        ordermitrawaiting: action.payload,
      };
    case 'GET_ORDER_MITRA_ACCEPTED':
      return {
        ...state,
        ordermitraaccepted: action.payload,
      };
    case 'GET_ORDER_MITRA_ONPROCESS':
      return {
        ...state,
        ordermitraonprocess: action.payload,
      };
    case 'GET_ORDER_MITRA_DONE':
      return {
        ...state,
        ordermitradone: action.payload,
      };
    case 'GET_DETAIL_ORDER_MITRA':
      return {
        ...state,
        orderdetailmitra: action.payload,
      };
    default:
      return state;
  }
};

export default orderUserReducer;
