import { computed } from "vue";
import makeResponsive from "../makeResponsive";

export default (props) => {
  return {
    iconClasses: computed(() => {
      return [
        "material-icons",
        makeResponsive(`dj-icon--variant-`, props.variant),
        makeResponsive(`dj-icon--color-`, props.color),
        makeResponsive(`dj-icon--clickable`, props.clickable),
        makeResponsive(`dj-icon--spin-`, props.spin),
      ];
    }),
  };
};
