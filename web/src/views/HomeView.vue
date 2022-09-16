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
  <main class="container mx-auto grid grid-cols-12">
    <div class="col-span-12 py-32 mx-auto pt-20 sm:pt-24 lg:pt-32 relative">
      <h1
        class="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center"
      >
        An open source spend tracking, budgeting and financial planning
        application.
      </h1>
    </div>
    <div class="col-span-9 py-4 mx-auto relative">
      <div class="grid grid-cols-12 w-full px-4">
        <div class="col-span-6 px-8">
          <h2 class="mb-4 text-xl">Get updates on progress.</h2>
          <p class="mb-1">
            I hate writing emails so these will be infrequent, I imagine one
            every time something on the roadmap is completed.
          </p>
          <p>
            Never going to try selling you anything or promoting another
            product.
          </p>
        </div>
        <!-- TODO: Error checking, confirmation of success etc -->
        <form
          @submit.prevent="joinMailingList()"
          class="flex col-span-6 flex-col py-4 px-8 border border-1 rounded h-min"
        >
          <label
            for="email"
            class="rounded-l-lg text-sm text-slate-500"
            >Email</label
          >
          <div class="flex flex-row border rounded-lg mb-2">
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              required
              class="py-1 px-2 w-full rounded-l-lg"
            />
            <button
              type="submit"
              class="bg-yellow-200 rounded-r-lg py-1 px-2 w-min text-sm disabled:bg-slate-100 disabled:cursor-not-allowed"
              :disabled="!checkbox"
            >
              Subscribe
            </button>
          </div>
          <div class="flex flex-row">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              v-model="checkbox"
              required
            />
            <label
              for="checkbox"
              class="pl-2 text-sm"
              >I'm happy for you to send me the occasional email</label
            >
          </div>
        </form>
      </div>
    </div>
    <div class="col-span-3 py-4 px-2 h-full text-sm mb-16">
      <h3 class="text-xl pl-4 mb-2">Roadmap</h3>
      <ul class="border-l border-gray-300">
        <li class="pl-2 flex flex-start items-center pt-1">
          <img
            src="../assets/roadmap-dot-in-progress.png"
            alt=""
            width="12px"
            height="12px"
            class="-ml-3.65 mr-3"
          />
          Landing page V1
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <img
            src="../assets/roadmap-dot.png"
            alt=""
            width="12px"
            height="12px"
            class="-ml-3.65 mr-3"
          />
          Manual spend tracking
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <img
            src="../assets/roadmap-dot.png"
            alt=""
            width="12px"
            height="12px"
            class="-ml-3.65 mr-3"
          />
          Landing page V2 with alpha signup
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <img
            src="../assets/roadmap-dot.png"
            alt=""
            width="12px"
            height="12px"
            class="-ml-3.65 mr-3"
          />
          Recurring payments & balance forecasting
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <img
            src="../assets/roadmap-dot.png"
            alt=""
            width="12px"
            height="12px"
            class="-ml-3.65 mr-3"
          />
          Transaction uploads (csv)
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <img
            src="../assets/roadmap-dot.png"
            alt=""
            width="12px"
            height="12px"
            class="-ml-3.65 mr-3"
          />
          Monzo / Starling API integration
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <img
            src="../assets/roadmap-dot.png"
            alt=""
            width="12px"
            height="12px"
            class="-ml-3.65 mr-3"
          />
          Open banking integration to fetch transactions
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <img
            src="../assets/roadmap-dot.png"
            alt=""
            width="12px"
            height="12px"
            class="-ml-3.65 mr-3"
          />
          Financial assistance / education services (CAB, Money Advice Line
          etc.)
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <img
            src="../assets/roadmap-dot.png"
            alt=""
            width="12px"
            height="12px"
            class="-ml-3.65 mr-3"
          />
          Android & iOS apps
        </li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.roadmap-dot {
  width: 8px;
  height: 8px;
}
</style>
