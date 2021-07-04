<script>
import { computed } from "vue";
import "./Box.scss";
import useBox from "./useBox";
import useBoxProps from "./useBoxProps";

export default {
  name: "Box",
  props: useBoxProps(),
  setup(props) {
    const { boxClasses } = useBox(props);
    return {
      classes: computed(() => boxClasses.value),
    };
  },
};
</script>

<template>
  <div :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>
