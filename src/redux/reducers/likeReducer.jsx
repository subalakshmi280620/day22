const initialState = { likes: 0 };

export default function likeReducer(state = initialState, action) {
  switch (action.type) {
    case "LIKE":
      return { likes: state.likes + 1 };
    case "DISLIKE":
      return { likes: state.likes - 1 };
    default:
      return state;
  }
}

