import { POSTAL_CODE_INFO } from "../actions/types";

//eslint-disable-next-line
export default function (state = {}, action) {
  switch (action.type) {
    case TOTAL_UNI_DATA:
      return { ...state, total_uni_data: action.payload };

    case TOTAL_UNI_COUNTRY_DATA:
      return { ...state, total_uni_country_data: action.payload };

    default:
      return state;
  }
}
