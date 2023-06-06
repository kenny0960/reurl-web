<template>
  <div
    v-if="!isUrlValid"
    class="mt-2 p-2 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3"
  >
    <i class="bi bi-exclamation-triangle" />
    請輸入網址。
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import reurlModule from "@/store/modules/reurlModule";

@Component
export default class ReurlResult extends Vue {
  get isUrlValid(): boolean {
    return reurlModule.isUrlValid;
  }
}
</script>
