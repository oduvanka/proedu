import React from "react";
import styles from "./cart.module.css";
import { HelpText } from "../helpText/help-text";
import { CURRENCY } from "../app/const";

export const DishInCart = ({ id, amount }) => {
  const dish = {};

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
