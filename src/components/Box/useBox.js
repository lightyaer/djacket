import { computed } from "vue";
import makeResponsive from "../makeResponsive";
import useFlex from "../Flex/useFlex";
import useSpacer from "../Spacer/useSpacer";

export default (props) => {
  const { flexClasses } = useFlex(props);
  const { spacerClasses } = useSpacer(props);

  return {
    boxClasses: computed(() => {
      return [
        ...flexClasses.value,
        ...spacerClasses.value,
        makeResponsive("dj-position--", props.position),
      ];
    }),
  };
};
