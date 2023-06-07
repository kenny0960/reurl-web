<template>
  <div class="reurl-input input-group">
    <input type="text" class="form-control" :disabled="true" :value="reurl" />
    <button class="btn border text-primary" @click="openReurl" type="button">
      <i class="bi bi-send"></i>
    </button>
    <button
      class="btn border text-primary"
      @click="showQRCodePopup"
      type="button"
    >
      <i class="bi bi-qr-code"></i>
    </button>
    <button class="btn border text-primary" @click="copyReurl" type="button">
      <i class="bi bi-clipboard"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import reurlModule from "@/store/modules/reurlModule";

@Component
export default class ReurlSuccessResult extends Vue {
  get reurl(): string {
    return reurlModule.reurl;
  }

  public openReurl(): void {
    // TODO 打開短網址頁面
  }

  public showQRCodePopup(): void {
    // TODO 顯示 QR Code 彈窗
  }

  public copyReurl(): void {
    // TODO 複製短網址
  }
}
</script>
