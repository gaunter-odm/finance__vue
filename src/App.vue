<template>
  <v-app :theme="theme">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleMenu">
        mdi-hamburger-menu
      </v-app-bar-nav-icon>
      <v-app-bar-title class="ml-5">Finance Web Application</v-app-bar-title>

      <v-avatar
        id="menu-activator"
        class="cursor-pointer"
        color="#1867C0"
        size="30"
      >
        <span>VB</span>
      </v-avatar>

      <v-menu anchor="start" activator="#menu-activator">
        <v-list density="compact" nav="/" elevation="6" rounded class="pa-2">
          <v-list-item
            class="mb-1"
            rounded
            prepend-icon="mdi-account"
            title="Профиль"
            value="profile"
            to="profile"
          />
          <v-list-item
            class="mb-1"
            rounded
            :prepend-icon="brightnessIcon"
            title="Переключить тему"
            value="toggle-theme"
            @click="toggleTheme"
          />
          <v-list-item
            rounded
            prepend-icon="mdi-logout"
            title="Выйти"
            value="logout"
            to="logout"
          />
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="menu">
      <v-list class="pa-2" density="compact">
        <v-list-item
          class="pl-3 mb-2"
          rounded
          prepend-icon="mdi-home"
          title="Dashboard"
          value="home"
          to="/"
        />
        <v-list-item
          class="pl-3 mb-2"
          rounded
          prepend-icon="mdi-shopping"
          title="Records"
          value="records"
          to="records"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",

  data: () => ({
    menu: false,
  }),

  computed: {
    ...mapState(["theme"]),
    brightnessIcon() {
      return this.theme === "light" ? "mdi-brightness-4" : "mdi-brightness-5";
    },
  },
  methods: {
    ...mapMutations(["toggleTheme", "setTheme"]),
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
