<template>
  <div class="vw-100 mx-5">
    <ReurlTitle />
    <ReurlInput />
    <ReurlResult />
  </div>
</template>

<script lang="ts">
import ReurlInput from "@/components/ReurlInput.vue";
import ReurlTitle from "@/components/ReurlTitle.vue";
import ReurlResult from "@/components/ReurlResult.vue";
import { Component, Vue } from "vue-facing-decorator";

@Component({
  components: {
    ReurlTitle,
    ReurlInput,
    ReurlResult,
  },
})
export default class HomeView extends Vue {}
</script>
