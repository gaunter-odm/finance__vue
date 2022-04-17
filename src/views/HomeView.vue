<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",

  components: {},
});
</script>
<style>
.home {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  text-transform: uppercase;
  text-align: center;
}
</style>
