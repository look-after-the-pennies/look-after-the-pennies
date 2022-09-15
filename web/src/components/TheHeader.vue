<script setup lang="ts">
import { useUserStore } from '../stores/user';
import 'vue-router';

const user = useUserStore();
</script>

<template>
  <header
    class="z-50 w-full bg-slate-50 text-slate-600 border-b border-slate/900/10"
  >
    <div class="container mx-auto grid grid-cols-12 justify-between">
      <div class="col-span-9 py-4">
        <router-link
          to="/"
          class="header-logo text-3xl uppercase font-bold cursor-pointer"
          tag="h1"
          >Budget Banana</router-link
        >
        <!-- <span class="text-slate-400 italic text-xs absolute working-title"
          >Working title</span
        > -->
      </div>
      <nav
        class="relative hidden md:flex items-center text-sm ml-auto leading-6 font-semibold space-x-8 col-span-3"
      >
        <router-link
          to="/about"
          class="cursor-pointer hover:bg-yellow-200 transition duration-250 ease-in px-1 rounded-sm"
          >About</router-link
        >
        <router-link
          to="/login"
          v-if="!user.details.loggedIn"
          class="cursor-pointer hover:bg-yellow-200 transition duration-250 ease-in px-1 rounded-sm"
          >Login
        </router-link>
        <a
          href="#"
          @click.prevent="user.logout"
          v-if="user.details.loggedIn"
          class="cursor-pointer hover:bg-yellow-200 transition duration-250 ease-in px-1 rounded-sm"
          >Logout</a
        >
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.working-title {
  margin-left: -60px;
  margin-top: 32px;
}
</style>
