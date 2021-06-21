import { GOLDEN_RATIO } from "./APP_OPTIONS_ENUM";

export const ENVIRONMENTS_ENUM = Object.freeze({
  DEVELOPMENT: "development",
  TEST: "test",
  PRODUCTION: "production",
});

export const APP_OPTIONS = {
  [GOLDEN_RATIO]: process.env.VUE_APP_GOLDEN_RATIO || 1.618033988749894,
};

export default {
  [ENVIRONMENTS_ENUM.DEVELOPMENT]: APP_OPTIONS,
  [ENVIRONMENTS_ENUM.TEST]: APP_OPTIONS,
  [ENVIRONMENTS_ENUM.PRODUCTION]: APP_OPTIONS,
};