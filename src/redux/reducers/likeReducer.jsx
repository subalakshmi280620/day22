const initialState = { likes: 0 };

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIKE":
      return { likes: state.likes + 1 };
    case "DISLIKE":
      return { likes: state.likes - 1 };
    default:
      return state;
  }
};

export default likeReducer;
