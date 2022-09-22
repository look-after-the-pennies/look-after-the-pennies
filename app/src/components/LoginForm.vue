<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { login, signup } from '../services/auth';
import type { AuthResponse } from '../../types';

const route = useRoute();
const router = useRouter();

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
const signupPage = ref(route.path === '/signup' ? true : false);
const status = ref({ error: '', loading: false });

const processAuth = async () => {
  status.value.error = '';
  status.value.loading = true;

  const authResponse = async (): Promise<AuthResponse> => {
    try {
      if (signupPage.value) {
        return await signup(email.value, password.value);
      } else {
        return await login(email.value, password.value, rememberMe.value);
      }
    } catch (err: any) {
      console.log('Login screen error');
      console.log(err);
      return { status: 'Error', message: err };
    }
  };
  status.value.loading = false;
  const res = await authResponse();
  if (res.status === 'Error') status.value.error = res.message;
  if (res.pushPage) router.push(res.pushPage);
};
</script>

<template>
  <q-form class="form column">
    <h1>{{ signupPage ? 'Signup' : 'Login' }}</h1>

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
    <q-checkbox v-model="rememberMe" v-if="!signup" label="Remember me" />
    <q-btn
      :loading="status.loading"
      color="primary"
      :label="signupPage ? 'Signup' : 'Login'"
      class="q-my-md"
      @click.prevent="processAuth"
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
