<template>
  <div class="reurl-input input-group">
    <input
      v-model="url"
      type="text"
      class="form-control"
      placeholder="https://www.google.com"
      @keydown.enter="handleUrlSubmit"
    />
    <button class="btn btn-primary" @click="handleUrlSubmit" type="button">
      <i class="bi bi-search"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import reurlModule from "@/store/modules/reurlModule";

@Component
export default class ReurlInput extends Vue {
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
    reurlModule.validateUrl(this.url);

    if (this.isUrlValid === true) {
      await reurlModule.postUrl(reurlModule.url);
    }
  }
}
</script>
