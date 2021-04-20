import { h, render, useState } from "sreactjs";
import "./app.css";

function Counter() {
  const [count, setCount] = useState(1);

  return h("div", {
    class: "counter",
    onClick: () => {
      setCount(count + 1);
    },
    children: [
      h("button", {
        children: [
          h("textNode", {
            nodeValue: "Click me: " + count,
          }),
        ],
      }),
    ],
  });
}

export function App() {
  return h("div", {
    id: "app",
    children: [
      h("p", {
        children: [
          h("h1", {
            children: [
              h("textNode", {
                nodeValue: "Hello sreact!",
              }),
            ],
          }),
        ],
      }),
      h(Counter, {}),
    ],
  });
}

render(h(App, {}), document.querySelector("#root") as Element);
