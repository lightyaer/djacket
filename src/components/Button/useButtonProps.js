export default () => ({
  size: {
    type: String,
    default: "default",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "primary",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
  },
  prefix: {
    type: String,
  },
  suffix: {
    type: String,
  },
});
