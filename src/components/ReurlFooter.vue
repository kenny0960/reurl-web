<template>
  <footer class="py-3">
    <span class="small text-secondary">ⓚ design © V{{ version }}</span>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import * as PackageJson from "@/../package.json";

@Component
export default class ReurlFooter extends Vue {
  get version(): string {
    return PackageJson.version;
  }
}
</script>
