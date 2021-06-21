import Form from "./Form.vue";

export default {
  title: "Input/Form",
  component: Form,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Form },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Form v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};