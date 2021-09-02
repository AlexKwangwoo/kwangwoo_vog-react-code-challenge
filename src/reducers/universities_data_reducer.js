import { POSTAL_CODE_INFO } from "../actions/types";

//eslint-disable-next-line
export default function (state = {}, action) {
  switch (action.type) {
    case POSTAL_CODE_INFO:
      return { ...state, postal_code_info: action.payload };

    default:
      return state;
  }
}
