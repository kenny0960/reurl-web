<template>
  <div class="reurl-input input-group">
    <input type="text" class="form-control" />
    <button class="btn btn-primary" type="button">
      <i class="bi bi-search"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class ReurlInput extends Vue {}
</script>

<style scoped lang="scss">
.reurl-input {
}
</style>
