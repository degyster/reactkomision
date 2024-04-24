import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart, decrementCount, incrementCount } from "../store/reducer";

function Counter() {
  const dispatch = useDispatch();
  const storedCount = JSON.parse(localStorage.getItem("data"));
  const initialCount = storedCount ? storedCount : [];

  const count = useSelector((store) => store.count);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    if (initialCount.length > 0) {
      dispatch({ type: "SET_INITIAL_COUNT", payload: initialCount });
    }
  }, [dispatch, initialCount]);

  return (
    <div className="counter-container">
      <h1 className="counter-title">KORZINA</h1>
      <ul className="item-list">
        {count.map((item) => (
          <li key={item.id} className="item">
            <span className="item-title">{item.title}</span>
            <div className="count-buttons">
              <button
                className="increment-button"
                onClick={() => dispatch(incrementCount(item.id))}
              >
                +
              </button>
              <span className="item-count">{item.count}</span>
              <button
                className="decrement-button"
                onClick={() => dispatch(decrementCount(item.id))}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="add-button"
        onClick={() => dispatch(addToCart(prompt("Введите название товара:")))}
      >
        Добавить в корзину
      </button>
    </div>
  );
}

export default Counter;
