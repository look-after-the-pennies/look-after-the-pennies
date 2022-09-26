<script setup lang="ts">
import Accounts from '../services/accounts';
import Transactions from '../services/transactions';

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

const getTransactions = async () => {
  await Transactions.get()
    .then((res) => {
      console.log(JSON.stringify(res));
    })
    .catch((err: any) => {
      console.log('fetch error');
      console.log(err);
    });
};
</script>

<template>
  <q-page class="column q-py-xl q-px-md">
    <q-form class="form column">
      <h1>Accounts Page</h1>
      <q-btn @click.prevent="getAccounts" class="q-mt-lg" color="primary"
        >Accounts</q-btn
      >

      <q-btn @click.prevent="getTransactions" class="q-mt-lg" color="primary"
        >Transactions</q-btn
      >
    </q-form>
  </q-page>
</template>
