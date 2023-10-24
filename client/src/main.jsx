import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Auth0Provider
  domain="dev-xvtybkay0y1dhdps.us.auth0.com"
  clientId="w0HjuksZXMRJYQqmM7wx8cfxtR4Fnprz"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >

  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
  </Auth0Provider></BrowserRouter>
);
