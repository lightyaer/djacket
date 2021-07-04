import { computed } from "vue";
import makeResponsive from "../makeResponsive";
import "./Input.scss";

export default (props) => {
  return {
    inputClasses: computed(() => {
      return ["dj-input", makeResponsive("dj-input--loading", props.loading)];
    }),
  };
};
