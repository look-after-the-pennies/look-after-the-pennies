<script setup lang="ts">
import { useAccountsStore } from 'src/stores/accounts';
import Accounts from '../services/accounts';

const store = useAccountsStore();

if (store.accountTypes.length === 0) store.getTypes();

store.get();

const getAccounts = async () => {
  await Accounts.get()
    .then((res) => {
      console.log(JSON.stringify(res));
    })
    .catch((err: any) => {
      console.log('fetch error');
      console.log(err);
    });
};

const getTypes = async () => {
  await Accounts.getTypes()
    .then((res) => {
      console.log('accounts page response print');
      console.log(JSON.stringify(res));
    })
    .catch((err: any) => {
      console.log('fetch error');
      console.log(err);
    });
};

getTypes();
</script>

<template>
  <q-page class="column q-py-xl q-px-md">
    <q-form class="form column">
      <h1>Accounts Page</h1>
      <q-btn @click.prevent="getAccounts" class="q-mt-lg" color="primary"
        >Accounts</q-btn
      >
    </q-form>
    <ul>
      <li v-for="(acc, index) in store.accounts" :key="index">
        {{ acc.account_type }}
      </li>
    </ul>
  </q-page>
</template>
