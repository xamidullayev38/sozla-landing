import { createRoot } from "react-dom/client";
import "./app/styles/index.css";
import App from "./app/App.jsx";
import { Providers } from "./app/providers/index.jsx";

createRoot(document.getElementById("root")).render(
  <Providers>
    <App />
  </Providers>,
);
