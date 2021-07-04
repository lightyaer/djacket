<template>
  <Box align="center" v-bind="$attrs">
    <Box>
      <slot name="startIcon" />
    </Box>
    <Box>
      <input type="text" v-bind="$attrs" :class="classes" />
    </Box>
    <Box>
      <slot name="endIcon" />
    </Box>
  </Box>
</template>
<script>
import { computed } from "vue";
import "./Input.scss";
import { Box } from "../Box";
import useInputProps from "./useInputProps";
import useInput from "./useInput";

export default {
  name: "Input",
  components: { Box },
  props: useInputProps(),
  setup(props) {
    const { inputClasses } = useInput(props);

    return {
      classes: computed(() => {
        return inputClasses.value;
      }),
    };
  },
};
</script>
