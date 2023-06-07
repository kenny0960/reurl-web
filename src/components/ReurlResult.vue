<template>
  <div
    v-if="!isUrlValid"
    class="mt-2 p-2 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3"
  >
    <i class="bi bi-exclamation-triangle" />
    請輸入網址。
  </div>
  <div v-if="result !== null" class="mt-2">
    <ReurlSuccessResult v-if="result.isSuccess" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import reurlModule from "@/store/modules/reurlModule";
import Result from "@/interfaces/Result";
import ReurlSuccessResult from "@/components/ReurlSuccessResult.vue";

@Component({
  components: {
    ReurlSuccessResult,
  },
})
export default class ReurlResult extends Vue {
  get isUrlValid(): boolean {
    return reurlModule.isUrlValid;
  }

  get result(): Result | null {
    return reurlModule.result;
  }
}
</script>
