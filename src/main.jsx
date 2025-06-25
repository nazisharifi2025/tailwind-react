import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Card from "./div.jsx";
import Google from "./google.jsx";
import Input from "./input.jsx";
import Icone from "../Icons.jsx";
import Messeg from "./Messeg.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Card />
    <Google />
    <Input />
    <Icone />
    <Messeg />
    <Messeg />
    <Messeg />
  </StrictMode>
);
