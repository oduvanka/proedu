import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
  <div>
    <h1>Restraunts</h1>
    {restaurants.map((restaurant) => {
      const { id, name, menu, reviews } = restaurant;
      return (
        <div key={id}>
          <h2>{name}</h2>
          <h3>Menu</h3>
          <ul>
            {menu.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <h3>Rewiews</h3>
          <ul>
            {reviews.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
);
