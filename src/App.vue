<template>
  <v-app :theme="theme">
    <v-overlay content-class="app_loader" v-model="loader" :persistent="true">
      <v-progress-circular width="8" :indeterminate="true" size="150" />
    </v-overlay>

    <v-app-bar app>
      <v-app-bar-nav-icon :disabled="disableMenu" @click="toggleMenu">
        mdi-hamburger-menu
      </v-app-bar-nav-icon>
      <v-app-bar-title class="ml-5">Finance Web Application</v-app-bar-title>

      <v-avatar
        id="menu-activator"
        class="cursor-pointer"
        color="indigo"
        size="30"
      >
        <span>{{ avatar }}</span>
      </v-avatar>

      <v-menu
        transition="slide-y-transition"
        anchor="start"
        activator="#menu-activator"
      >
        <v-list
          density="compact"
          :nav="true"
          elevation="6"
          rounded
          class="pa-2"
        >
          <v-list-item
            class="mb-1"
            rounded
            prepend-icon="mdi-account"
            title="Профиль"
            value="profile"
            to="/profile"
          />
          <v-list-item
            id="theme-submenu"
            class="mb-1"
            rounded
            prepend-icon="mdi-compare"
            title="Тема"
            value="toggle-value"
          />

          <v-menu
            activator="#theme-submenu"
            anchor="start"
            transition="slide-y-transition"
          >
            <v-list density="compact" elevation="6" rounded class="pa-2">
              <v-list-item
                rounded
                title="Темная"
                prepend-icon="mdi-brightness-4"
                value="system"
                @click="setTheme('dark')"
              />
              <v-list-item
                rounded
                title="Светлая"
                prepend-icon="mdi-brightness-5"
                value="light"
                @click="setTheme('light')"
              />
              <v-list-item
                v-if="systemThemeSupport"
                rounded
                title="Системная"
                prepend-icon="mdi-brightness-6"
                value="dark"
                @click="setTheme('system')"
              />
            </v-list>
          </v-menu>

          <v-list-item
            rounded
            prepend-icon="mdi-logout"
            title="Выйти"
            value="logout"
            to="/auth/logout"
          />
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="menu">
      <v-list :nav="true" class="pa-2" density="compact">
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
          to="/records"
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
    ...mapState({
      theme: (state) => state.theme,
      user: (state) => state.auth.user,
      loader: (state) => state.loader.loader,
    }),

    brightnessIcon() {
      return this.theme === "light" ? "mdi-brightness-4" : "mdi-brightness-5";
    },

    avatar() {
      return this.user.name ? this.user.name.substring(0, 1) : "A";
    },

    disableMenu() {
      return !this.$store.state.auth.user.name;
    },
  },

  watch: {
    disableMenu() {
      this.menu = false;
    },
  },

  methods: {
    ...mapMutations(["toggleTheme", "setTheme"]),
    toggleMenu() {
      this.menu = !this.menu;
    },
  },

  created() {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.setTheme(isDark ? "dark" : "light");
  },
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}

.app_loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
