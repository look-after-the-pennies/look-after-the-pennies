<script setup lang="ts">
import { useAccountsStore } from 'src/stores/accounts';
// import Accounts from '../services/accounts';

import { useRouter } from 'vue-router';

const router = useRouter();

const store = useAccountsStore();

if (store.accountTypes.length === 0) store.getTypes();

store.get();

const add = () => {
  router.push('accounts/add');
};

// const getAccounts = async () => {
//   await Accounts.get()
//     .then((res) => {
//       console.log(JSON.stringify(res));
//     })
//     .catch((err: any) => {
//       console.log('fetch error');
//       console.log(err);
//     });
// };

// const getTypes = async () => {
//   await Accounts.getTypes()
//     .then((res) => {
//       console.log('accounts page response print');
//       console.log(JSON.stringify(res));
//     })
//     .catch((err: any) => {
//       console.log('fetch error');
//       console.log(err);
//     });
// };

// getTypes();
</script>

<template>
  <q-page class="column q-py-xl q-px-md">
    <q-form class="form column">
      <h1>Accounts Page</h1>
      <q-btn @click.prevent="add" class="q-mt-lg" color="primary">Add</q-btn>
    </q-form>
    <!-- <ul>
      <li v-for="(at, index) in store.accounts" :key="index">
        {{ at.account_type }} -->
    <ul>
      <li v-for="(acc, idx) in store.accounts" :key="idx">
        {{ acc.account_name }}
      </li>
      <!-- </ul> -->
      <!-- </li> -->
    </ul>
  </q-page>
</template>
