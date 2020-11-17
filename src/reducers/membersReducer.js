import { ADD_NEW_MEMBER } from "../actions/membersActions";

const initialState = {
  members: [
    { name: "Jojo Zhang", dragonStatus: true },
    { name: "Brandon Harris", dragonStatus: false }
  ]
};

export const membersReducer = (state = initialState, action) => {
  /// what actions ????
  console.log(`bk: membersReducer: action: `, action);
  switch (action.type) {
    case ADD_NEW_MEMBER:
      return {
        ...state,
        members: [
          ...state.members,
          { name: action.payload, dragonStatus: false }
        ]
      };
    default:
      return state;
  }
};
