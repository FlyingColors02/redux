import React from "react";
import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import {createStore} from "redux";
import store from "./Reducers/index"
import App from "./app";

ReactDom.render(
<Provider store={createStore(store)}>
<App/>
</Provider>
,document.getElementById("root"));