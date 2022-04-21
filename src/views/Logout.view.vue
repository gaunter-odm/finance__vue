<template></template>

<script>
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

import axios from "@/plugins/axios";

export default defineComponent({
  functional: true,
  name: "Logout",
  methods: mapMutations(["logout", "enableLoader", "disableLoader"]),
  mounted() {
    this.enableLoader();
    axios
      .get("auth/logout")
      .then(() => {
        this.logout();
        this.$router.push({ name: "Login" });
      })
      .finally(() => this.disableLoader());
  },
});
</script>

<style scoped></style>
