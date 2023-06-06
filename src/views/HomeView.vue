<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ReurlInput />
  </div>
</template>

<script lang="ts">
import ReurlInput from "@/components/ReurlInput.vue";
import { Component, Vue } from "vue-facing-decorator";

@Component({
  components: {
    ReurlInput,
  },
})
export default class HomeView extends Vue {}
</script>
