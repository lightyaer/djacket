import useBoxProps from "../Box/useBoxProps";

export default () => ({
  ...useBoxProps(),
  variant: {
    type: String,
    default: "default",
    validator(value) {
      return ["hint", "default", "subtitle", "heading", "title"].includes(
        value
      );
    },
  },
  clickable: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "white",
  },
  spin: {
    type: Boolean,
    default: false,
  },
});
