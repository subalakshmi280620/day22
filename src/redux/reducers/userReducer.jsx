const initialState = { users: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { users: [...state.users, action.payload] };

    case "REMOVE_USER":
      return {
        users: state.users.filter(u => u.id !== action.payload)
      };

    default:
      return state;
  }
};

export default userReducer;
