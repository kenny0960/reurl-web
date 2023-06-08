<template>
  <div class="d-flex justify-content-center align-items-center vh-75">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import { Tooltip } from "bootstrap";

@Component
export default class App extends Vue {
  public created(): void {
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    });
  }
}
</script>

<style lang="scss">
@import "~bootstrap-icons/font/bootstrap-icons.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vw-50 {
  width: 50vw;
}
.vh-75 {
  height: 75vh;
}
</style>
