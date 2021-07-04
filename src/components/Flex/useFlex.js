import { computed } from "vue";
import makeResponsive from "../makeResponsive";
import "./Flex.scss";

export default (props) => {
  return {
    flexClasses: computed(() => {
      return [
        makeResponsive("dj-flex", true),
        makeResponsive("dj-flex--direction-", props.direction),
        makeResponsive("dj-flex--wrap-", props.wrap),
        makeResponsive("dj-flex--justify-", props.justify),
        makeResponsive("dj-flex--align-", props.align),
        makeResponsive("dj-flex--grow", props.grow),
        makeResponsive("dj-flex--no-shrink", props.shrink),
      ];
    }),
  };
};
