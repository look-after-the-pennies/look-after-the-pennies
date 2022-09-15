<script setup lang="ts"></script>

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
    <div class="col-span-9 py-4 mx-auto relative">Second section</div>
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
