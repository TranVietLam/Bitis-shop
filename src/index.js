import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { composeWithDevTools } from "redux-devtools-extension";

//Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

//slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//loading bar
import LoadingBar from "react-redux-loading-bar";

// redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/store";
const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} Loading={null}>
        <div className="position-absolute w-100" style={{ zIndex: 100 }}>
          <LoadingBar
            updateTime={100}
            className="bg-danger"
            style={{ height: "10px" }}
          />
        </div>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
