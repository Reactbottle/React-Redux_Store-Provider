import { TOGGLE_EDITING, SET_TITLE } from "../actions/titleActions";

const initialState = {
  title: "Dragon Member List 🐲",
  editing: false
};

export const titleReducer = (state = initialState, action) => {
  console.log(`bk: titleReducer.js: action: `, action);
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    // NEW CASE HERE
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing
      };
    default:
      return state;
  }
};
