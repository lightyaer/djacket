<template>
  <div :class="classes" v-bind="$attrs" />
</template>
<script>
import { computed } from "vue";
import "./Flex.scss";
import useFlexProps from "./useFlexProps";
import useFlex from "./useFlex";

export default {
  name: "Flex",
  props: useFlexProps(),
  setup(props) {
    const { flexClasses } = useFlex(props);
    return {
      classes: computed(() => flexClasses.value),
    };
  },
};
</script>
