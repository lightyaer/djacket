<template>
  <Scene>
    <Box direction="column">
      <Box>
        <Input />
      </Box>
      <br />
      <Button>
        <Text variant="subtitle">Click here</Text>
      </Button>
      <br />

      <Button color="secondary" size="small">
        <Text variant="default">Click here</Text>
      </Button>
      <br />

      <Button>
        <Text variant="default">Click here</Text>
      </Button>
      <br />

      <Button color="secondary" size="large">
        <Text variant="default">Click here</Text>
      </Button>
      <br />

      <Button>
        <Text variant="default">Click here</Text>
      </Button>
      <br />

      <Button>
        <Text variant="hint">Click here</Text>
      </Button>
      <br />

      <Button>
        <Text variant="heading">Click here</Text>
      </Button>
      <br />

      <Button>
        <Text variant="title">Click here</Text>
      </Button>

      <Icon variant="hint">face</Icon>
      <Icon variant="subtitle" clickable>face</Icon>
      <Icon variant="default">face</Icon>
      <Icon variant="heading">face</Icon>
      <Icon variant="title">face</Icon>
      <br />
      <Text variant="subtitle" anchor>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore esse et
        laudantium maiores rem velit voluptas. Cupiditate delectus eius non
        numquam quidem, sapiente voluptatem? At dicta libero repudiandae unde
        voluptate.</Text
      >

      <Text variant="hint">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        facilis hic quo sequi similique. Accusantium corporis deleniti eligendi
        impedit iste mollitia, nemo officia praesentium quos rem, soluta tempora
        veniam vitae?
      </Text>
      <Text variant="default">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
        doloremque error ex ipsam nostrum omnis quidem reprehenderit rerum,
        voluptate? Accusamus aut commodi ea fuga illum laudantium soluta unde
        vel voluptates!
      </Text>
      <Text variant="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa
        dicta doloribus eligendi error facilis hic laborum molestias nam natus
        obcaecati possimus quas reiciendis, saepe sit soluta sunt vel vero.
      </Text>
      <Text variant="heading">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        dolore, doloremque earum eius eum id iure minima mollitia officia
        possimus quae quas quo, recusandae reiciendis repellat repellendus totam
        velit voluptatibus?
      </Text>
      <Text variant="title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ex fuga
        minus nemo porro quae qui ratione sequi totam vitae. Dignissimos esse
        est mollitia nulla quasi quisquam quo, rem sequi.
      </Text>

      <br />
    </Box>
  </Scene>
</template>

<script>
import Scene from "../../components/Scene/Scene";
import Box from "../../components/Box/Box";
import Input from "../../components/Input/Input";
import Text from "../../components/Text/Text";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";

export default {
  name: "Showcase",
  components: { Button, Icon, Input, Box, Scene, Text },
};
</script>

<style lang="scss"></style>
