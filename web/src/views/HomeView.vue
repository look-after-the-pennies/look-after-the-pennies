<script setup lang="ts">
import TheSubscribeForm from '../components/TheSubscribeForm.vue';
import TheRoadMap from '../components/TheRoadMap.vue';
import WantToHelp from '../components/WantToHelp.vue';
</script>

<template>
  <main class="grid grid-cols-12">
    <div
      class="w-screen bg-gradient-to-b from-blue-100 to-white col-span-12 relative px-1 md:px-0"
    >
      <div class="container mx-auto pt-16 pb-20 md:py-24 lg:py-32">
        <h1
          class="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center mb-10 max-w-6xl mx-auto"
        >
          An open source spend tracking, budgeting and financial planning
          application.
        </h1>
        <p class="text-lg text-slate-600 mt-6 text-center max-w-3xl mx-auto">
          We're currently building (in public) towards a release, subscribe
          below for updates and to be the first to know when signups are open.
        </p>

        <TheSubscribeForm />
      </div>
    </div>
    <div class="w-screen">
      <hr class="hidden md:block" />
      <div class="container mx-auto grid grid-cols-12 md:gap-8 md:pt-8">
        <div class="col-span-12 md:col-span-9 mx-auto px-4 md:px-0">
          <hr class="mb-8 md:hidden" />
          <!-- TODO: write some copy -->
          <h2 class="text-xl md:text-2xl mb-4">Why BudgetBanana</h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius aut
          ducimus doloribus eos velit exercitationem, delectus sunt numquam,
          aspernatur quae quia! Repellendus perferendis commodi quibusdam atque
          molestias distinctio, aut esse.
        </div>

        <TheRoadMap />
        <!-- <WantToHelp class="visible min-w-screen md:min-w-0 mb-12" /> -->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.roadmap-dot {
  width: 8px;
  height: 8px;
}
</style>
