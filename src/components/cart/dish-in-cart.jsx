import React from "react";
import styles from "./cart.module.css";
import { HelpText } from "@/helptext";
import { CURRENCY } from "@/globalconst";

export const DishInCart = ({ id, name, amount, price }) => {
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
