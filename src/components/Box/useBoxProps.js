import useFlexProps from "../Flex/useFlexProps";
import useSpacerProps from "../Spacer/useSpacerProps";

export default () => ({
  ...useFlexProps(),
  ...useSpacerProps(),
  position: {
    type: String,
    default: "initial",
    validator(value) {
      return [
        "absolute",
        "relative",
        "unset",
        "fixed",
        "sticky",
        "initial",
        "inherit",
      ].includes(value);
    },
  },
});
