const initialState = { notes: [] };

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { notes: [...state.notes, action.payload] };

    case "DELETE_NOTE":
      return {
        notes: state.notes.filter(n => n.id !== action.payload)
      };

    default:
      return state;
  }
};

export default noteReducer;
