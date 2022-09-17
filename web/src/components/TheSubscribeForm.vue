<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const checkbox = ref(false);

const joinMailingList = async () => {
  const response = await fetch(
    `https://maker.ifttt.com/trigger/budget_banana_mailing_list/with/key/bcjmJykxEbiGJ8MalYqI06?value1=${email.value}&value2=${checkbox.value}`,
    { mode: 'no-cors' }
  );
  email.value = '';
  checkbox.value = false;
};
</script>

<template>
  <div class="w-full mx-auto mt-12 max-w-4xl md:max-w-2xl w-full">
    <!-- <div class="col-span-4">
      <ul>
        <li>No spam</li>
        <li>No sales</li>
        <li>Just roadmap updates</li>
      </ul>
    </div> -->
    <!--     <div class="col-span-6 px-8">
          <h2 class="mb-4 text-xl">Get updates on progress.</h2>
          <p class="mb-1">
            I hate writing emails so these will be infrequent, I imagine one
            every time something on the roadmap is completed.
          </p>
          <p>
            Never going to try selling you anything or promoting another
            product.
          </p>
        </div> -->
    <!-- TODO: Error checking, confirmation of success etc -->
    <form
      @submit.prevent="joinMailingList()"
      class="flex flex-col subscribe-form"
    >
      <label
        for="email"
        class="sr-only"
        >Email</label
      >
      <div
        class="flex flex-row border email-input rounded-2xl mb-2 min-w-[calc(100%-2rem)] md:min-w-2xl mx-auto"
      >
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          required
          class="py-2 md:py-4 px-2 w-full rounded-l-2xl text-md"
          placeholder="Email"
        />
        <button
          type="submit"
          class="bg-yellow-200 rounded-r-2xl py-2 md:py-4 px-4 w-content text-md disabled:bg-slate-100 disabled:cursor-not-allowed"
          :disabled="!checkbox"
        >
          Subscribe
        </button>
      </div>
      <div
        class="checkbox-container bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl max-w-[calc(100%-2rem)] md:max-w-2xl ml-4 md:ml-0"
      >
        <div
          class="flex flex-row flex-wrap md:flex-nowrap justify-between min-w-[calc(100%-2rem)] md:min-w-2xl mx-auto"
        >
          <div class="flex flex-row">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              v-model="checkbox"
              required
              class="ml-2 align-center text-sm h-5"
            />
            <label
              for="checkbox"
              class="pl-2 text-sm align-center"
              >You can send me the occasional email. Zero spam, zero sales.
            </label>
          </div>
          <a
            href="./privacy-policy"
            class="text-sm cursor-pointer hover:bg-yellow-200 transition duration-250 ease-in rounded-sm underline mr-2 align-center"
            >Privacy Policy</a
          >
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.checkbox-container {
  position: absolute;
  height: 0px;
  overflow: hidden;
  margin-top: 70px;
  transition: all 300ms ease-in;
}

.checkbox-container a {
  margin-left: 1.8rem;
  margin-top: 0.25rem;
  flex-basis: 100%;
}

.subscribe-form:focus-within .checkbox-container,
.subscribe-form .checkbox-container:has(#checkbox:checked) {
  height: 70px;
  padding: 1rem 0;
}

@media (min-width: 768px) {
  .checkbox-container a {
    margin-left: 0px;
    margin-top: 0px;
    flex-basis: initial;
  }
  .subscribe-form .checkbox-container:has(#checkbox:checked) {
    height: 50px;
  }
}

.subscribe-form:focus-within .email-input {
  border-color: slategrey;
}
</style>
