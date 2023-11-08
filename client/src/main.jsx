import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
 
  <GoogleOAuthProvider clientId="325637245348-rbcpqokoh5u2rrjtikafsecmko1clquo.apps.googleusercontent.com">
    <BrowserRouter>
      <ChakraProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </BrowserRouter>
    </GoogleOAuthProvider>
);
