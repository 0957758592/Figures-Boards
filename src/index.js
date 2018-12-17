import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./css/App.css";
import "semantic-ui-css/semantic.min.css";
import { store } from "./redux/store";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <DragDropContextProvider backend={HTML5Backend}>
        <App />
      </DragDropContextProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
