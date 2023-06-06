<template>
  <div class="vw-100 mx-5">
    <ReurlTitle />
    <ReurlInput />
  </div>
</template>

<script lang="ts">
import ReurlInput from "@/components/ReurlInput.vue";
import ReurlTitle from "@/components/ReurlTitle.vue";
import { Component, Vue } from "vue-facing-decorator";

@Component({
  components: {
    ReurlTitle,
    ReurlInput,
  },
})
export default class HomeView extends Vue {}
</script>
