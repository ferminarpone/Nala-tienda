import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./styles/style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";

//SDK Software Developer Kit//
const firebaseConfig = {
  apiKey: "AIzaSyAez4a-btvCp390v4npMphae6PzJxW7trs",
  authDomain: "nala-tienda-b642e.firebaseapp.com",
  projectId: "nala-tienda-b642e",
  storageBucket: "nala-tienda-b642e.appspot.com",
  messagingSenderId: "452381122395",
  appId: "1:452381122395:web:9394e8ca68177b7d3b047e",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
