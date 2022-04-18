<template>
  <div class="page_404">
    <h1>404</h1>
    <v-btn to="/">Главная</v-btn>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.page_404 {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 240px;
  color: dimgray;
}
</style>
