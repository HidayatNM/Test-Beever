import { FETCH_QUOTE } from "../action/actionType";

const initialState = { quote: "" };

function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTE:
      return { ...state, quote: action.payload };
    default:
      return state;
  }
}

export default quoteReducer;
