import { FETCH_QUOTE } from "./actionType";
import { quoteAPI } from "../../provider/api";

const fetchQuoteSuccess = (payload) => {
  return {
    type: FETCH_QUOTE,
    payload,
  };
};

const fetchQuote = async () => {
  try {
    const { data } = await quoteAPI.get();
    fetchQuoteSuccess(data.quote);
  } catch (err) {
    console.log(err);
  }
};

export default fetchQuote;
