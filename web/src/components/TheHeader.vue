<script setup lang="ts">
import WantToHelp from '../components/WantToHelp.vue';
import { useUserStore } from '../stores/user';
import 'vue-router';

const user = useUserStore();
</script>

<template>
  <header
    class="z-50 w-full bg-slate-50 text-slate-600 border-b border-slate/900/10"
  >
    <div class="container px-2 md:px-0 mx-auto flex flex-row justify-between">
      <div class="py-4">
        <router-link
          to="/"
          class="header-logo text-3xl tracking-tight font-bold cursor-pointer z-50"
          tag="h1"
          >BudgetBanana</router-link
        >
        <span
          class="bg-yellow-200 italic text-xs absolute working-title -ml-16 mt-8"
          >A working title</span
        >
      </div>
      <div class="flex items-center">
        <WantToHelp class="invisible md:visible" />
        <nav
          class="relative hidden md:flex items-center text-sm ml-auto leading-6 font-semibold space-x-8"
        >
          <!--
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
          > -->
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
// .working-title {
//   margin-left: -60px;
//   margin-top: 32px;
// }
</style>
