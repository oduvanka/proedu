import React from "react";
import styles from "./cart.module.css";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/slice";
import { HelpText } from "../helpText/help-text";
import { CURRENCY } from "../app/const";

export const DishInCart = ({ id, amount }) => {
  const dish = useSelector((state) => selectDishById(state, id)) || {};

  const { name, price } = dish;

  return (
    <>
      <span>
        {name} <HelpText>( x{amount} )</HelpText>
      </span>
      <span className={styles.dots}></span>
      <span>
        = {amount * price} {CURRENCY}
      </span>
    </>
  );
};
