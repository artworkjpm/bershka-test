<template>
  <div id="app">
    <products1/>
    <products2/>
  </div>
</template>


<script>
import products1 from "./components/products1.vue";
import products2 from "./components/products2.vue";

export default {
  components: {
    products1: products1,
    products2: products2
  },

  name: "app",
  data() {}
};
</script>

<style lang="scss">
body {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin: 0;
}
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
