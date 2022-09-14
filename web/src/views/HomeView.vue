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
          <div class="bg-orange-300 w-2 h-2 rounded-full -ml-3 mr-3"></div>
          Landing page V1
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <div class="bg-gray-300 w-2 h-2 rounded-full -ml-3 mr-3"></div>
          Manual spend tracking
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <div class="bg-gray-300 w-2 h-2 rounded-full -ml-3 mr-3"></div>
          Landing page V2 with alpha signup
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <div class="bg-gray-300 w-2 h-2 rounded-full -ml-3 mr-3"></div>
          Recurring payments & balance forecasting
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <div class="bg-gray-300 w-2 h-2 rounded-full -ml-3 mr-3"></div>
          Transaction uploads (csv)
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <div class="bg-gray-300 w-2 h-2 rounded-full -ml-3 mr-3"></div>
          Monzo / Starling API integration
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <div class="bg-gray-300 w-2 h-2 rounded-full -ml-3 mr-3"></div>
          Open banking integration to fetch transactions
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <div class="bg-gray-300 w-2 h-2 rounded-full -ml-3 mr-3"></div>
          Financial assistance / education services (CAB, Money Advice Line
          etc.)
        </li>
        <li class="pl-2 flex flex-start items-center pt-3">
          <div class="bg-gray-300 w-2 h-2 rounded-full -ml-3 mr-3"></div>
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
