import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectItemAmountById,
} from "../../redux/entities/cart/slice";

export const useCounter = (dishId, dishName, dishPrice) => {
  const amount = useSelector((state) => selectItemAmountById(state, dishId));
  const dispatch = useDispatch();

  const onDecrement = useCallback(
    () => dispatch(removeFromCart(dishId)),
    [dispatch, dishId]
  );
  const onIncrement = useCallback(() => {
    dispatch(addToCart({ id: dishId, name: dishName, price: dishPrice }));
  }, [dispatch, dishId]);
  return { count: amount, onDecrement, onIncrement };
};
