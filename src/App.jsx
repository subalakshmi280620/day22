import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/actions/counterActions";
import { addUser, removeUser } from "./redux/actions/userActions";
import { addToCart, removeFromCart } from "./redux/actions/cartActions";
import { addNote, deleteNote } from "./redux/actions/noteActions";
import { like, dislike } from "./redux/actions/likeActions";

const App = () => {
  const count = useSelector(state => state.counter.count);
  const users = useSelector(state => state.users.users);
  const cart = useSelector(state => state.cart.cart);
  const notes = useSelector(state => state.notes.notes);
  const likes = useSelector(state => state.likes.likes);

  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h1>Redux Actions & Reducers – All Tasks</h1>

      {/* Counter */}
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      {/* User Registration */}
      <h2>User Registration</h2>
      <button onClick={() =>
        dispatch(addUser({ id: Date.now(), name: "User" }))
      }>
        Add User
      </button>
      {users.map(u => (
        <div key={u.id}>
          {u.name}
          <button onClick={() => dispatch(removeUser(u.id))}>X</button>
        </div>
      ))}

      {/* Shopping Cart */}
      <h2>Shopping Cart</h2>
      <button onClick={() =>
        dispatch(addToCart({ id: Date.now(), name: "Item" }))
      }>
        Add Item
      </button>
      {cart.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}

      {/* Notes */}
      <h2>Notes</h2>
      <button onClick={() =>
        dispatch(addNote({ id: Date.now(), text: "New Note" }))
      }>
        Add Note
      </button>
      {notes.map(n => (
        <div key={n.id}>
          {n.text}
          <button onClick={() => dispatch(deleteNote(n.id))}>Delete</button>
        </div>
      ))}

      {/* Like / Dislike */}
      <h2>Like / Dislike</h2>
      <p>Likes: {likes}</p>
      <button onClick={() => dispatch(like())}>Like</button>
      <button onClick={() => dispatch(dislike())}>Dislike</button>
    </div>
  );
};

export default App;
