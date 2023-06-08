<template>
  <footer class="py-3">
    <span class="small text-secondary" :title="updateLogs"
      >ⓚ design © V{{ version }}</span
    >
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import * as PackageJson from "@/../package.json";
import UpdateLog from "@/interfaces/UpdateLog";
import UPDATE_LOGS from "@/consts/UPDATE_LOGS";

@Component
export default class ReurlFooter extends Vue {
  get version(): string {
    return PackageJson.version;
  }

  get updateLogs(): string {
    return UPDATE_LOGS.slice(0, 5).map(this.stringifyUpdateLog).join("\n");
  }

  private stringifyUpdateLog(updateLog: UpdateLog): string {
    return `v${updateLog.version} ${updateLog.date} ${updateLog.messages}`;
  }
}
</script>
