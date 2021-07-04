import Vue from "vue";
import * as Components from "./components";
import "./_dj-index.scss";

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
