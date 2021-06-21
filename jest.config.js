module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  clearMocks: true,
  displayName: {
    name: "djacket",
    color: "red",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
};
