<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from 'stores/user';

const password = ref('test');
const localRememberMe = localStorage.getItem('remember-me');
const localRememberMeParsed = localRememberMe
  ? JSON.parse(localRememberMe)
  : null;

const email = ref(
  localRememberMeParsed ? localRememberMeParsed.email : 'test@test.com'
);
const rememberMe = ref(
  localRememberMeParsed ? localRememberMeParsed.remember_me : false
);
const isPwd = ref(true);
const signup = ref(false);
const status = ref({ error: '', loading: false });
const store = useUserStore();

const login = async () => {
  status.value.error = '';
  status.value.loading = true;

  try {
    await store.login({
      email: email.value,
      password: password.value,
      rememberMe: rememberMe.value,
    });
  } catch (err: any) {
    console.log('Login screen error');
    console.log(err);
    status.value.error = err;
  }
  status.value.loading = false;
};
</script>

<template>
  <q-form class="form column">
    <h1>{{ signup ? 'Signup' : 'Login' }}</h1>

    <q-input
      v-model="email"
      outlined
      type="email"
      label="Email"
      class="q-mb-sm"
    />
    <q-input v-model="password" outlined :type="isPwd ? 'password' : 'text'">
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-checkbox v-model="rememberMe" label="Remember me" />
    <q-btn
      :loading="status.loading"
      color="primary"
      label="Login"
      class="q-my-md"
      @click.prevent="login"
    />
    <span v-if="status.error.length != 0" class="error ml2">{{
      status.error
    }}</span>
    <span v-if="status.loading" class="loading ml2">Loading...</span>
  </q-form>
</template>

<style scoped lang="scss">
.form {
  padding: 2rem;
  border: 1px solid $blue-grey-9;
  border-radius: 0.25rem;
  width: 35%;
  margin: 0 auto;
}
</style>
