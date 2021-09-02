import { EDIT_POST, NEW_POST, TOTAL_DATA } from "../actions/types";

//eslint-disable-next-line
export default function (state = {}, action) {
  switch (action.type) {
    case TOTAL_DATA:
      return { ...state, total_data: action.payload };
    case NEW_POST:
      return { ...state, new_postID: action.payload };
    case EDIT_POST:
      return { ...state, edited_postID: action.payload };
    default:
      return state;
  }
}
