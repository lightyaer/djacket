<template>
  <span v-bind="$attrs" :class="classes">
    <slot />
  </span>
</template>
<script>
import { computed } from "vue";
import "./Icon.scss";
import useIcon from "./useIcon";
import useIconProps from "./useIconProps";

export default {
  name: "Icon",
  props: useIconProps(),
  setup(props) {
    const { iconClasses } = useIcon(props);
    return {
      classes: computed(() => iconClasses.value),
    };
  },
};
</script>
