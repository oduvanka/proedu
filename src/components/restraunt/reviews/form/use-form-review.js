import { useReducer } from "react";
import { MIN_RATING } from "./const";

const INIT_FORM = {
  name: "",
  text: "",
  rating: MIN_RATING,
};

const ACTION = {
  SET_NAME: "setName",
  SET_TEXT: "setText",
  SET_RATING: "setRating",
  CLEAR: "clear",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.SET_NAME: {
      return { ...state, name: payload };
    }
    case ACTION.SET_TEXT: {
      return { ...state, text: payload };
    }
    case ACTION.SET_RATING: {
      return { ...state, rating: payload };
    }
    case ACTION.CLEAR: {
      return INIT_FORM;
    }
    default:
      return state;
  }
};

export const useFormReview = () => {
  const [form, dispatch] = useReducer(reducer, INIT_FORM);

  const onChangeForm = (typeAction) => (e) => {
    const { value } = e.target;
    dispatch({ type: typeAction, payload: value });
  };

  const onChangeName = (e) => onChangeForm(ACTION.SET_NAME)(e);
  const onChangeText = (e) => onChangeForm(ACTION.SET_TEXT)(e);
  const onChangeRating = (e) => onChangeForm(ACTION.SET_RATING)(e);
  const clear = () => dispatch({ type: ACTION.CLEAR });

  return { form, onChangeName, onChangeText, onChangeRating, clear };
};
