const initialState = { users: [] };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return { users: [...state.users, action.payload] };
    default:
      return state;
  }
}
