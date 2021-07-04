import responsivePropValidator from "../utils/responsivePropValidator";
import { ALIGN, WRAP, DIRECTION, JUSTIFY } from "./FLEX_VALUES_ENUM";
export default () => ({
  wrap: {
    type: [Object, String],
    default: "initial",
    validator: responsivePropValidator(WRAP),
  },
  direction: {
    type: String,
    default: "row",
    validator: responsivePropValidator(DIRECTION),
  },
  align: {
    type: String,
    default: "start",
    validator: responsivePropValidator(ALIGN),
  },
  justify: {
    type: String,
    default: "start",
    validator: responsivePropValidator(JUSTIFY),
  },
  grow: {
    type: Boolean,
    default: false,
  },
  shrink: {
    type: Boolean,
    default: false,
  },
});
