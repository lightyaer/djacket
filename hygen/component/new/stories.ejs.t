---
to: src/components/<%=name%>/<%=h.capitalize(name) %>.stories.js
---
import <%=name%> from './<%=name%>.vue';

export default {
  title: '<%=layout%>/<%=name%>',
  component: <%=name%>,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};


const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { <%=name%> },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<<%=name%> v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

