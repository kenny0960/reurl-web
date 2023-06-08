<template>
  <header class="py-3 fs-1 text-primary">
    <img src="@/assets/logo.png" />
    <span class="text-dark">短網址</span>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class ReurlHeader extends Vue {}
</script>
