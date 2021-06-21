import { computed } from "vue";
import "./Flex.scss";

export default (props) => {
  return {
    flexClasses: computed(() => {
      return [
        "dj-flex",
        {
          [`dj-flex--direction-${props.direction}`]: props.direction,
          [`dj-flex--flex-wrap-${props.wrap}`]: props.wrap,
          [`dj-flex--align-${props.align}`]: props.align,
          [`dj-flex--justify-${props.justify}`]: props.justify,
          "dj-flex--grow": props.grow,
          "dj-flex--no-shrink": props.noShrink,
        },
      ];
    }),
  };
};
