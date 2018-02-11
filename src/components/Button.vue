<template>
  <a :href="url">{{ text }}</a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
a {
  display: inline-block;
  min-width: 120px;
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  border-radius: 5px;
  text-decoration: none;
  background-image: linear-gradient(to bottom, #3AA7FF 0, #1380D7 100%);
  color: #FFF;
  cursor: pointer;
  transition: color .2s ease-in-out;
}

a:hover {
  background-image: linear-gradient(to bottom, #269eff 0, #1175c4 100%);
}
</style>
