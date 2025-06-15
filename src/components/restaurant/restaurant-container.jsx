// smart dump component ресторана
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRequest } from "../app/useRequest";
import { REQUEST_URL } from "../app/const";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { Restaurant } from "./restaurant";

export const RestaurantContainer = ({ id }) => {
  const { getData } = useRequest();

  useEffect(() => {
    getData(REQUEST_URL.RESTAURANT(id)).then((res) => console.log(res));
  }, []);

  const restaurant =
    useSelector((state) => selectRestaurantById(state, id)) || {};

  const { name } = restaurant;

  return <Restaurant name={name} />;
};
