import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "./redux/actions/counterActions";
import { addUser } from "./redux/actions/userActions";
import { addToCart } from "./redux/actions/cartActions";
import { addNote } from "./redux/actions/noteActions";
import { like, dislike } from "./redux/actions/likeActions";
import axios from "axios";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const users = useSelector((state) => state.users.users);
  const cart = useSelector((state) => state.cart);
  const notes = useSelector((state) => state.notes);
  const likes = useSelector((state) => state.likes.likes);

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
    );
    setWeather(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Day 22 Redux Tasks & Mini Projects</h1>

      {/* Counter */}
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      {/* User */}
      <h2>User Registration</h2>
      <button
        onClick={() =>
          dispatch(addUser({ id: Date.now(), name: "User" }))
        }
      >
        Add User
      </button>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}

      {/* Cart */}
      <h2>Cart</h2>
      <button
        onClick={() =>
          dispatch(addToCart({ id: Date.now(), name: "Item" }))
        }
      >
        Add Item
      </button>
      {cart.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}

      {/* Notes */}
      <h2>Notes</h2>
      <button
        onClick={() =>
          dispatch(addNote({ id: Date.now(), text: "Note" }))
        }
      >
        Add Note
      </button>
      {notes.map((n) => (
        <p key={n.id}>{n.text}</p>
      ))}

      {/* Likes */}
      <h2>Like / Dislike</h2>
      <p>{likes}</p>
      <button onClick={() => dispatch(like())}>Like</button>
      <button onClick={() => dispatch(dislike())}>Dislike</button>

      {/* Weather */}
      <h2>Weather</h2>
      <input onChange={(e) => setCity(e.target.value)} />
      <button onClick={getWeather}>Get</button>
      {weather && <p>{weather.main.temp} °C</p>}
    </div>
  );
}

export default App;
