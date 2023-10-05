import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.jsx';
import './style.css';
import {ChakraProvider} from '@chakra-ui/react';
import { initializeApp } from "firebase/app";



/* const firebaseConfig = {
  apiKey: "AIzaSyCS3vaTFcJSrQPvIK68MYPN9TaupkjmYc8",
  authDomain: "nala-tienda-4421c.firebaseapp.com",
  projectId: "nala-tienda-4421c",
  storageBucket: "nala-tienda-4421c.appspot.com",
  messagingSenderId: "72369138580",
  appId: "1:72369138580:web:34038ab6d0668ee9ff3d81"
}; */

//SDK Software Developer Kit//
const firebaseConfig = {
  apiKey: "AIzaSyAez4a-btvCp390v4npMphae6PzJxW7trs",
  authDomain: "nala-tienda-b642e.firebaseapp.com",
  projectId: "nala-tienda-b642e",
  storageBucket: "nala-tienda-b642e.appspot.com",
  messagingSenderId: "452381122395",
  appId: "1:452381122395:web:9394e8ca68177b7d3b047e"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App/>
    </ChakraProvider>
  </React.StrictMode>,
)
