<script setup lang="ts">
import { useAccountsStore } from 'src/stores/accounts';
import Format from '../services/format';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const store = useAccountsStore();
if (store.accountTypes.length === 0) store.getTypes();

const accountTypes = computed(() => store.accountTypes);

const typeId = ref();

const name = ref('');
const logo = ref(null);
const openingBalance = ref(0);
const dateStarted = ref('26-09-2022');

const error: Ref<string | null> = ref(null);

const loading = ref(false);

const addAccount = async () => {
  error.value = null;
  loading.value = true;

  await store
    .create({
      account_type_id: typeId.value,
      account_name: name.value,
      logo: logo.value,
      opening_balance: openingBalance.value,
      date_started: Format.date(dateStarted.value),
    })
    .then((res) => {
      if (res) {
        loading.value = false;
        router.push('/accounts');
      }
    })
    .catch((err) => {
      console.log('Add account error');
      console.log(err);
      error.value = err;
      loading.value = false;
    });
};
</script>

<template>
  <q-form class="form column">
    <h1>Add Account</h1>

    <q-select
      outlined
      v-model="typeId"
      :options="accountTypes"
      option-label="account_type"
      option-value="id"
      label="Account Type"
      emit-value
      map-options
      class="q-mb-sm"
    />

    <q-input
      v-model="name"
      outlined
      type="text"
      label="Account Name"
      class="q-mb-sm"
      autofocus
      for="campaign-name"
    />

    <q-input
      v-model="openingBalance"
      outlined
      type="text"
      label="Opening Balance"
      class="q-mb-sm"
    />
    <!-- @ts-ignore -->
    <q-input filled v-model="dateStarted" :rules="['dd-mm-yyyy']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date
              v-model="dateStarted"
              color="primary"
              mask="DD-MM-YYYY"
              first-day-of-week="1"
              v-close-popup
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-btn
      :loading="loading"
      color="primary"
      label="Add Account"
      class="q-my-md"
      @click.prevent="addAccount"
    />
    <span v-if="error" class="error ml2">{{ error }}</span>
  </q-form>
</template>

<style scoped lang="scss">
.form {
  padding: 1.5rem;
  border: 1px solid $blue-grey-9;
  border-radius: 0.25rem;
  width: 400px;
  margin: 0 auto;
}
</style>
