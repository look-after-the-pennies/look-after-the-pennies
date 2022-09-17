<script setup lang="ts">
import { ref, computed } from 'vue';

const email = ref('');
const subscribeButtonText = ref('Subscribe');
const optIn = ref(false);
const subscribeSuccess = ref(false);

const joinMailingList = async () => {
  const response = await fetch(
    `https://maker.ifttt.com/trigger/budget_banana_mailing_list/with/key/bcjmJykxEbiGJ8MalYqI06?value1=${email.value}&value2=${optIn.value}`,
    { mode: 'no-cors' }
  );
  email.value = '';
  optIn.value = false;
  subscribeSuccess.value = true;
  subscribeButtonText.value = 'Success';
  setTimeout(() => {
    subscribeSuccess.value = false;
    subscribeButtonText.value = 'Subscribe';
  }, 3000);
};
</script>

<template>
  <div class="w-[calc(100%-2rem)] mx-auto mt-12 max-w-4xl md:max-w-2xl w-full">
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
      class="flex flex-col subscribe-form mb-4"
    >
      <label
        for="email"
        class="sr-only"
        >Email</label
      >
      <div
        class="flex flex-row border email-input rounded-xl mb-2 md:min-w-2xl w-full focus-within:border-yellow-200 focus-within:border-2"
        :class="{ success: subscribeSuccess }"
      >
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          required
          class="py-2 md:py-4 px-2 w-full rounded-l-xl text-xs md:text-md"
          placeholder="Email"
        />
        <button
          type="submit"
          class="bg-yellow-200 rounded-r-xl py-2 md:py-4 px-2 md:px-4 w-content text-xs md:text-md disabled:bg-slate-100 disabled:cursor-not-allowed transition-colors"
          :disabled="!optIn"
        >
          {{ subscribeButtonText }}
        </button>
      </div>
      <!-- TODO: iPhone scaling text much larger -->
      <div
        class="opt-in-container bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl max-w-[calc(100%-2.5rem)] md:max-w-2xl text-xs md:text-sm"
      >
        <div
          class="flex flex-row flex-wrap md:flex-nowrap justify-between w-full md:min-w-2xl"
        >
          <div class="flex flex-row w-full justify-between">
            <input
              type="checkbox"
              name="opt-in"
              id="opt-in"
              v-model="optIn"
              required
              class="ml-2 align-center h-5"
            />
            <label
              for="opt-in"
              class="pl-2 align-center w-full basis-full min-w-content"
              >You can send me the occasional email.
              <span class="hidden md:inline-block">
                {{ '  Zero spam, zero sales.' }}</span
              >
            </label>
          </div>
          <div
            class="flex flex-row justify-between md:justify-end w-full pt-1 md:pt-0 md:basis-50"
          >
            <span class="md:hidden ml-7 pl-0.5 mr-1">
              Zero spam, zero sales.</span
            >
            <!-- TODO: Create privacy policy -->
            <a
              href="./privacy-policy"
              class="cursor-pointer hover:bg-yellow-200 transition duration-250 ease-in rounded-sm underline mr-7 md:mr-1 text-right md:px-1"
              >Privacy Policy</a
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
#email:focus,
#email:focus-visible {
  outline: 0;
}

#email {
  background-color: white;
}

.email-input.success {
  border: solid 2px green;

  button {
    background-color: rgb(209, 245, 208);
  }
}

.opt-in-container {
  position: absolute;
  height: 0px;
  overflow: hidden;
  margin-top: 45px;
  transition: all 300ms ease-in;
}

// .opt-in-container a {
//   margin-left: 1.8rem;
//   // margin-top: 0.25rem;
//   flex-basis: 100%;
// }

.subscribe-form:focus-within .opt-in-container,
.subscribe-form .opt-in-container:has(#opt-in:checked) {
  height: 70px;
  padding: 1rem 0;
}

@media (min-width: 768px) {
  .opt-in-container {
    margin-top: 70px;
  }
  .opt-in-container a {
    margin-left: 0px;
    margin-top: 0px;
    flex-basis: initial;
  }
  .subscribe-form:focus-within .opt-in-container,
  .subscribe-form .opt-in-container:has(#opt-in:checked) {
    height: 50px;
  }
}

// .subscribe-form:focus-within .email-input {
//   border-color: --yellow-200;
// }
</style>
