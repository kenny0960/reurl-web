<template>
  <div class="reurl-input input-group">
    <input type="text" class="form-control" :disabled="true" :value="reurl" />
    <button
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Go"
      class="btn border text-primary"
      @click="openReurl"
      type="button"
    >
      <i class="bi bi-send"></i>
    </button>
    <button
      data-bs-toggle="modal"
      data-bs-target="#QRCodeModal"
      class="btn border text-primary"
      type="button"
    >
      <i
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="QR Code"
        class="bi bi-qr-code"
      ></i>
    </button>
    <button
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="複製到剪貼簿"
      class="btn border text-primary"
      @click="copyReurl"
      type="button"
    >
      <i class="bi bi-clipboard"></i>
    </button>
    <div
      class="modal fade"
      id="QRCodeModal"
      tabindex="-1"
      aria-labelledby="QRCodeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <QRCodeVue3
              :width="200"
              :height="200"
              :value="reurl"
              :image="require('@/assets/logo.png')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import reurlModule from "@/store/modules/reurlModule";
import QRCodeVue3 from "qrcode-vue3";

@Component({
  components: {
    QRCodeVue3,
  },
})
export default class ReurlSuccessResult extends Vue {
  get reurl(): string {
    return reurlModule.reurl;
  }

  public openReurl(): void {
    window.open(this.reurl, "_blank");
  }

  public copyReurl(): void {
    navigator.clipboard
      .writeText(this.reurl)
      .then((): void => {
        // TODO 顯示複製成功訊息
      })
      .catch((): void => {
        // TODO 顯示複製失敗訊息
      });
  }
}
</script>
