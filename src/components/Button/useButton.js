import { computed } from "vue";
import makeResponsive from "../makeResponsive";

export default (props) => {
  return {
    buttonClasses: computed(() => {
      return [
        "dj-button",
        makeResponsive("dj-button--size-", props.size),
        makeResponsive("dj-button--color-", props.color),
        makeResponsive("dj-button--type-", props.type),
        makeResponsive("dj-button--loading", props.loading),
        makeResponsive("dj-button--disabled", props.disabled),
      ];
    }),
  };
};
