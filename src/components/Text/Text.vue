<template>
  <router-link v-if="anchor && to" :to="to" :class="classes">
    <slot></slot>
  </router-link>
  <a v-else-if="anchor" :class="classes" v-bind="$attrs">
    <slot></slot>
  </a>
  <span v-else :class="classes" v-bind="$attrs">
    <slot></slot>
  </span>
</template>
<script>
import "./Text.scss";
import makeResponsive from "../makeResponsive";

export default {
  name: "Text",
  props: {
    variant: {
      type: String,
      default: "default",
      validator(value) {
        return ["hint", "default", "subtitle", "heading", "title"].includes(
          value
        );
      },
    },
    color: {
      type: String,
      default: "white",
    },
    align: {
      type: String,
      default: "left",
      validator(value) {
        return ["left", "center", "right"].includes(value);
      },
    },
    noHeight: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: false,
    },
    anchor: {
      type: Boolean,
      default: false,
    },
    truncate: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return {
      classes: [
        makeResponsive("dj-text--variant-", props.variant),
        makeResponsive("dj-text--color-", props.color),
        makeResponsive("dj-text--align-", props.align),
        makeResponsive("dj-text--underline", props.underline),
        makeResponsive("dj-text--no-height", props.noHeight),
        makeResponsive("dj-text--truncate", props.truncate),
      ],
    };
  },
};
</script>
