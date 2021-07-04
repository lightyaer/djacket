<template>
  <div :class="classes" v-bind="$attrs" />
</template>
<script>
import "./Spacer.scss";
import useSpacerProps from "./useSpacerProps";
import useSpacer from "./useSpacer";

export default {
  name: "Spacer",
  props: useSpacerProps(),
  setup(props) {
    const { spacerClasses } = useSpacer(props);
    return {
      classes: spacerClasses,
    };
  },
};
</script>
