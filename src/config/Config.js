import ENVIRONMENT, { ENVIRONMENTS_ENUM } from "./ENVIRONMENT";

class Config {
  config = {};

  constructor(environment) {
    this.config = ENVIRONMENT[environment];
  }

  get(key) {
    return this.config[key] || null;
  }

  getConfig() {
    return this.config;
  }
}

export default new Config(
  process.env.NODE_ENV || ENVIRONMENTS_ENUM.DEVELOPMENT
);
