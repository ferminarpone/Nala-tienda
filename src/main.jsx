import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.jsx';
import './style.css';
import {ChakraProvider} from '@chakra-ui/react';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCS3vaTFcJSrQPvIK68MYPN9TaupkjmYc8",
  authDomain: "nala-tienda-4421c.firebaseapp.com",
  projectId: "nala-tienda-4421c",
  storageBucket: "nala-tienda-4421c.appspot.com",
  messagingSenderId: "72369138580",
  appId: "1:72369138580:web:34038ab6d0668ee9ff3d81"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App/>
    </ChakraProvider>
  </React.StrictMode>,
)
