import { string, oneOf, bool } from "vue-types";

export default () => ({
  wrap: string.def("nowrap"),
  direction: oneOf(["row", "column"]).def("row"),
  align: oneOf(["start", "center", "end"]),
  justify: oneOf(["start", "end", "center", "between", "around", "evenly"]),
  noShrink: bool.def(false),
  grow: bool.def(false),
});
