import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "././assets/css/style.css";
import "././assets/css/animate.css";
import "././assets/css/icofont.min.css";
import "././assets/css/all.min.css";
import "././assets/css/MessageList.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Store";
import { Provider } from "react-redux";
import Wrapper from "./dating/store/context/Wrapper";
import { ModalProvider } from "./dating/component/popUps/ModalContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Wrapper>
    <Provider store={store}>
        <ModalProvider>
          <App />
        </ModalProvider>
    </Provider>
    </Wrapper>
  </React.StrictMode>
);


reportWebVitals();
