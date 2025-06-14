import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      const { id, price } = payload;

      if (!state[id]) state[id] = { amount: 0, price };

      state[id].amount = state[id].amount + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) return;

      state[payload].amount = state[payload].amount - 1;

      if (state[payload].amount === 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    selectItemAmountById: (state, id) => (!!state[id] ? state[id].amount : 0),
  },
});

const selectCartSlice = (state) => state[cartSlice.name];

export const selectCartItems = createSelector([selectCartSlice], (cartSlice) =>
  Object.keys(cartSlice).reduce((acc, id) => {
    acc.push({ id, amount: cartSlice[id].amount, price: cartSlice[id].price });
    return acc;
  }, [])
);

// Селектор для получения общей стоимости всех товаров в корзине
// я тут честно признаюсь, что этот код и изменения в addCounter) написала нейронка
export const selectTotalPrice = createSelector(
  [(state) => state.cartSlice],
  (cartSlice) => {
    return Object.keys(cartSlice).reduce((total, id) => {
      const item = cartSlice[id];
      return total + item.amount * item.price;
    }, 0);
  }
);

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectItemAmountById } = cartSlice.selectors;
