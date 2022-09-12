<script setup lang="ts">
import { useUserStore } from '../stores/user';
import 'vue-router';

const user = useUserStore();
</script>

<template>
  <header class="sticky left-0 top-0 h-16 flex justify-between border-b-1 p-8">
    <router-link
      to="/"
      class="header-logo text-3xl uppercase font-bold"
      tag="h1"
      >Budget Banana</router-link
    >
    <nav class="nav horizontal">
      <router-link
        to="/about"
        class="mr-4"
        >About</router-link
      >
      <router-link
        to="/login"
        v-if="!user.details.loggedIn"
        >Login</router-link
      >
      <a
        href="#"
        @click.prevent="user.logout"
        v-if="user.details.loggedIn"
        class="logout"
        >Logout</a
      >
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav.horizontal {
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  > *:not(:last-child) {
    padding-right: 15px;
  }
}
</style>
