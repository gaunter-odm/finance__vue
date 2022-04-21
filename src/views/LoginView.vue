<template>
  <div v-if="message" class="login">
    <p class="login__message">{{ message }}</p>
    <v-btn loading target="_blank" href="https://t.me/knworktimebot">
      Открыть Телеграм
    </v-btn>
    <v-divider style="margin: 5px" />
    <v-btn href="http://localhost:8080/auth/login/magikLink">magikLink</v-btn>
    <v-divider style="margin: 5px" />
    <v-btn href="http://localhost:8080/auth/login/magikLindk">error link</v-btn>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "LoginView",
  data: () => ({
    message: null,
  }),

  methods: mapMutations(["login", "enableLoader", "disableLoader"]),

  mounted() {
    const uuid = this.$route.params.magikLink;

    if (!uuid) {
      this.message = "Для авторизации перейдите в Телеграм";
      return;
    }

    this.enableLoader();

    axios
      .get(`/auth/login/${uuid}`)
      .then(({ data }) => {
        this.login(data);
        this.$router.push({ name: "Home" });
      })
      .catch(() => {
        this.message = "Ссылка не действительна";
      })
      .finally(() => this.disableLoader());
  },
});
</script>

<style scoped>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login__message {
  font-size: 21px;
  padding-bottom: 20px;
  text-align: center;
  margin-top: -100px;
}
</style>
