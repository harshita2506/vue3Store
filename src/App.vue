<template>
  <div class="container">
    <div class="row" id="app">
      <div class="col-6">
        <register/>
      </div>
      <div class="col-6">
        <Unregister />
      </div>
    </div>
  </div>
</template>

<script>
import Unregister from "./components/unregister.vue";
import Register from "./components/register.vue";

export default {
  name: "App",
 
  components: {
    Unregister,
    Register,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
