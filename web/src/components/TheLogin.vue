<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/user';

const store = useUserStore();

const localRememberMe = localStorage.getItem('remember-me');
const localRememberMeParsed = localRememberMe
  ? JSON.parse(localRememberMe)
  : null;

const email = ref(localRememberMeParsed ? localRememberMeParsed.email : '');
const rememberMe = ref(
  localRememberMeParsed ? localRememberMeParsed.remember_me : false
);
const password = ref('');

let error = ref('');
let loading = ref(false);

async function login() {
  error.value = '';
  loading.value = true;
  try {
    await store.login({
      email: email.value,
      password: password.value,
      rememberMe: rememberMe.value,
    });
  } catch (err: any) {
    console.log('Login screen error');
    console.log(err);
    error.value = err;
  }
  loading.value = false;
}
</script>

<template>
  <div class="container flex login">
    <header class="header login">
      <h1>You need to log in</h1>
    </header>
    <form
      @submit.prevent="login()"
      class="form login centred w100"
    >
      <div class="form-field">
        <input
          v-model="email"
          type="email"
          name="email"
          class="input"
          placeholder=" "
          required
        />
        <label
          for="email"
          class="label"
          >Email</label
        >
      </div>
      <div class="form-field">
        <input
          v-model="password"
          type="password"
          name="password"
          class="input"
          placeholder=" "
          required
        />
        <label
          for="password"
          class="label"
          >Password</label
        >
      </div>
      <div class="form-field checkbox">
        <label for="checkbox"
          >Remember me
          <input
            v-model="rememberMe"
            type="checkbox"
            name="checkbox"
            class="input"
          />
        </label>
      </div>
      <button type="submit">Login</button
      ><span
        v-if="error.length != 0"
        class="error ml2"
        >{{ error }}</span
      >
      <span
        v-if="loading"
        class="loading ml2"
        >Loading...</span
      >
    </form>
  </div>
</template>

<style lang="scss" scoped>
.view.container.grid.login {
  grid-column: 3 / 11;
  grid-row: 2/3;
  //display:grid;
  //grid-template-columns: 1fr 1.5fr 1fr;
}

.login.container.flex {
  grid-column: 3/11;
  max-height: 400px;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
}

.login.header {
  width: 100%;
  //height: 4rem;
  padding: 1rem;
//   background-color: $font-color2;
//   color: $base-color5;
  // h1 {
  // 	background-color: $font-color2;
  // 	color: $base-color5;
  // }
}

.form.login {
  width: 100%;
  padding: 1rem;
  //border: solid 1px $font-color2;

  .form-field:not(.checkbox) {
    margin: 0 auto;
    position: relative;
    // border-bottom: 2px dashed $font-color2;
    margin: 2rem auto 1rem;
    transition: 500ms;

    &::after {
      content: '';
      position: relative;
      display: block;
      height: 4px;
      width: 100%;
    //   background: $font-color2;
      transform: scaleX(0);
      transform-origin: 0%;
      transition: transform 500ms ease;
      top: 2px;
    }

    &:focus-within {
      border-color: transparent;

      &::after {
        transform: scaleX(1);
      }
    }

    .input {
      outline: none;
      border: none;
      overflow: hidden;
      margin: 0;
      width: 100%;
      padding: 0.25rem 0;
      background: none;
    //   color: $font-color2;
      font-size: 1.2rem;
      font-weight: normal;

      &.login:valid {
        color: yellowgreen;
      }

      &.login:invalid {
        color: orangered;
      }
    }

    .label {
    //   color: $font-color2;
      font-size: 1.2rem;
      z-index: -1;
      position: absolute;
      left: 0;
      //transform: translateY(-1rem);
      transform-origin: 0%;
      transition: transform 400ms;
    }

    &:focus-within .label,
    .input:not(:placeholder-shown) + .label {
      transform: scale(0.8) translateY(-2rem);
    }
  }

  .form-field.checkbox {
    width: 100%;
    margin: 0 auto;
    position: relative;
    margin: 2rem auto 2rem;
  }
}
</style>
