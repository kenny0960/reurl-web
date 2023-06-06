<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ReurlInput />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ReurlInput from "@/components/ReurlInput.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ReurlInput,
  },
});
</script>
