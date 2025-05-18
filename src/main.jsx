import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

const data = [1, 2, 3, 4, 5];

reactRoot.render(
  <ul className="someClass" style={{ color: "red" }}>
    {data.map((item) => (
      <li key={`li-${item}`}>{item}</li>
    ))}
  </ul>
);

console.log(reactRoot);
