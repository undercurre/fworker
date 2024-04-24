<template>
  <div>
    <nav>
      <router-link to="/codeDelay">CodeDelay</router-link>
      <router-link to="/longTask">LongTask</router-link>
      <router-link to="/postTask">PostTask</router-link>
      <router-link to="/yield2All">Yield2All</router-link>
      <router-link to="/yield2Ness">Yield2Ness</router-link>
      <router-link to="/yield2Time">Yield2Time</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav a {
  padding: 20px;
  border: 1px solid #000;
}
</style>
