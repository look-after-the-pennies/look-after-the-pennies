<script setup lang="ts">
import { useRouter } from 'vue-router';
import { logout } from '../services/auth';

const router = useRouter();

const logoutRequest = async () => {
  await logout()
    .then((res) => {
      if (res.pushPage) router.push(res.pushPage);
    })
    .catch((err: any) => {
      console.log('Logout error');
      console.log(err);
    });
};
</script>

<template>
  <q-page class="column q-py-lg q-px-md">
    <h1>You've logged in</h1>
    <q-btn @click.prevent="logoutRequest" class="q-mt-lg">Logout</q-btn>
  </q-page>
</template>
