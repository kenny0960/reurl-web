<template>
  <div class="vw-50">
    <ReurlHeader />
    <ReurlInput />
    <ReurlResult />
    <ReurlFooter />
  </div>
</template>

<script lang="ts">
import ReurlInput from "@/components/ReurlInput.vue";
import ReurlHeader from "@/components/ReurlHeader.vue";
import ReurlResult from "@/components/ReurlResult.vue";
import ReurlFooter from "@/components/ReurlFooter.vue";
import { Component, Vue } from "vue-facing-decorator";

@Component({
  components: {
    ReurlHeader,
    ReurlInput,
    ReurlResult,
    ReurlFooter,
  },
})
export default class HomeView extends Vue {}
</script>
