<script setup lang="ts">
import { useRouter } from 'vue-router';
import { logout } from '../services/auth';

const router = useRouter();

const logoutRequest = async () => {
  await logout()
    .then((res) => {
      console.log(JSON.stringify(res));
      if (res.pushPage) router.push(res.pushPage);
    })
    .catch((err: any) => {
      console.log('Logout error');
      console.log(err);
    });
};
</script>

<template>
  <q-page class="column q-py-xl q-px-md">
    <q-form class="form column">
      <h1>You've logged in</h1>
      <q-btn @click.prevent="logoutRequest" class="q-mt-lg" color="primary"
        >Logout</q-btn
      >
    </q-form>
  </q-page>
</template>

<style scoped lang="scss">
.form {
  padding: 2rem;
  border: 1px solid $blue-grey-9;
  border-radius: 0.25rem;
  width: 400px;
  margin: 10% auto;
}
</style>
