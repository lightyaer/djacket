<template>
  <button v-bind="$attrs" :class="classes">
    <slot />
  </button>
</template>
<script>
import { computed } from "vue";
import "./Button.scss";
import useButton from "./useButton";
import useButtonProps from "./useButtonProps";

export default {
  name: "Button",
  props: useButtonProps(),
  setup(props) {
    const { buttonClasses } = useButton(props);
    return {
      classes: computed(() => buttonClasses.value),
    };
  },
};
</script>
