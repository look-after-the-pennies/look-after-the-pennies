<script setup lang="ts">
import WantToHelp from '../components/WantToHelp.vue';
</script>

<template>
  <div class="col-span-12 md:col-span-3 mb-6">
    <hr class="my-8 md:hidden" />
    <h2
      class="text-slate-900 text-3xl md:text-4xl tracking-tight font-extrabold md:pl-4 mb-4 md:mb-0 px-4 md:px-0"
    >
      Roadmap<span class="text-4xl text-yellow-300 ml-0.25">.</span>
    </h2>
    <div class="md:py-4 px-6 md:px-2 text-sm mx-auto md:mx-0 mb-6">
      <ul class="border-l border-gray-300">
        <li class="pl-2 flex flex-start items-center pt-1">
          <img
            src="../assets/roadmap-dot-complete.png"
            alt=""
            width="12px"
            height="12px"
            class="-ml-3.65 mr-3"
          />
          Landing page V1
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <img
            src="../assets/roadmap-dot-in-progress.png"
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
        <li class="pl-2 flex flex-start items-center pt-3">
          <img
            src="../assets/roadmap-dot.png"
            alt=""
            width="12px"
            height="12px"
            class="-ml-3.65 mr-3"
          />
          Desktop apps
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
