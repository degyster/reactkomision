const data = [
  { id: 1, title: 'Велосипед', count: 5 },
  { id: 2, title: 'Самокат', count: 4 },
  { id: 3, title: 'Гантели', count: 7 },
  { id: 4, title: 'Ракетки', count: 1 }
];

const defaultState = JSON.parse(localStorage.getItem('data')) ?? data;

const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
      case INCREMENT_COUNT:
          return state.map(item =>
              item.id === action.payload ? { ...item, count: item.count < 25 ? item.count + 1 : item.count } : item
          );

      case DECREMENT_COUNT:
          return state.map(item =>
              item.id === action.payload ? { ...item, count: item.count >= 1 ? item.count - 1 : 0 } : item
          ).filter(item => item.count > 0);

      case ADD_TO_CART:
          const newId = Date.now();
          const newItem = { id: newId, title: action.payload, count: 1 };
          return [...state, newItem];

      case REMOVE_FROM_CART:
          return state.filter(item => item.id !== action.payload);

      default:
          return state;
  }
};
export const incrementCount = (payload) => ({ type: INCREMENT_COUNT, payload });
export const decrementCount = (payload) => ({ type: DECREMENT_COUNT, payload });
export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const removeFromCart = (payload) => ({ type: REMOVE_FROM_CART, payload });
