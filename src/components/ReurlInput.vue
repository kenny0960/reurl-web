<template>
  <div class="reurl-input input-group">
    <input
      v-model="url"
      type="text"
      class="form-control"
      :disabled="isLoading"
      placeholder="https://www.google.com"
      @keydown.enter="handleUrlSubmit"
    />
    <button
      :disabled="isLoading"
      class="btn btn-primary"
      @click="handleUrlSubmit"
      type="button"
    >
      <i v-if="isLoading" class="spinner-border spinner-border-sm"></i>
      <i v-else class="bi bi-search"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import reurlModule from "@/store/modules/reurlModule";
import commonModule from "@/store/modules/commonModule";

@Component
export default class ReurlInput extends Vue {
  get isLoading(): boolean {
    return commonModule.isLoading;
  }

  get url(): string {
    return reurlModule.url;
  }

  set url(url: string) {
    reurlModule.setUrl(url);
  }

  get isUrlValid(): boolean {
    return reurlModule.isUrlValid;
  }

  public async handleUrlSubmit(): Promise<void> {
    reurlModule.resetResult();
    reurlModule.validateUrl(this.url);

    if (this.isUrlValid === true) {
      await reurlModule.postUrl(reurlModule.url);
    }
  }
}
</script>
