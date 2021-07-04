import responsivePropValidator from "../utils/responsivePropValidator";

export const getSpacingSequence = () =>
  Array(9)
    .fill(1)
    .map((num, index) => index + 1);

export default () => ({
  mx: {
    type: [Object, Number],
    default: 0,
    validator: responsivePropValidator(getSpacingSequence()),
  },
  my: {
    type: [Object, Number],
    default: 0,
    validator: responsivePropValidator(getSpacingSequence()),
  },
  ml: {
    type: [Object, Number],
    default: 0,
    validator: responsivePropValidator(getSpacingSequence()),
  },
  mr: {
    type: [Object, Number],
    default: 0,
    validator: responsivePropValidator(getSpacingSequence()),
  },
  mt: {
    type: [Object, Number],
    default: 0,
    validator: responsivePropValidator(getSpacingSequence()),
  },
  mb: {
    type: [Object, Number],
    default: 0,
    validator: responsivePropValidator(getSpacingSequence()),
  },
  px: {
    type: [Object, Number],
    default: 0,
    validator: responsivePropValidator(getSpacingSequence()),
  },
  py: {
    type: [Object, Number],
    default: 0,
    validator: responsivePropValidator(getSpacingSequence()),
  },
  pt: {
    type: [Object, Number],
    default: 0,
    validator: responsivePropValidator(getSpacingSequence()),
  },
  pb: {
    type: [Object, Number],
    default: 0,
    validator: responsivePropValidator(getSpacingSequence()),
  },
  pl: {
    type: [Object, Number],
    default: 0,
    validator: responsivePropValidator(getSpacingSequence()),
  },
  pr: {
    type: [Object, Number],
    default: 0,
    validator: responsivePropValidator(getSpacingSequence()),
  },
});
