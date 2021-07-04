<template>
  <div v-bind="$attrs" :class="classes">
    <slot />
  </div>
</template>
<script>
import "./Scene.scss";
import { computed } from "vue";
import useScene from "./useScene";
import useSceneProps from "./useSceneProps";

export default {
  name: "Scene",
  props: useSceneProps(),
  setup(props) {
    const { sceneClasses } = useScene(props);

    console.log(sceneClasses.value);
    return {
      classes: computed(() => sceneClasses.value),
    };
  },
};
</script>
