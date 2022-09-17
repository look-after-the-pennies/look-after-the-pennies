<script setup lang="ts">
import TheSubscribeForm from '../components/TheSubscribeForm.vue';
</script>

<template>
  <main class="grid grid-cols-12">
    <div
      class="w-screen bg-gradient-to-b from-blue-100 to-white col-span-12 relative"
    >
      <div class="container py-32 mx-auto pt-20 sm:pt-24 lg:pt-32">
        <div class="container absolute top-2">
          <p
            class="invisible md:visible text-md text-slate-600 rounded-2xl bg-yellow-200 w-100 text-center py-1 float-right"
          >
            Want to help?
            <a
              href="./contact-us"
              class="cursor-pointer hover:bg-yellow-200 transition duration-250 ease-in rounded-sm font-semibold underline"
              >Get in touch</a
            >
            or check out our
            <a
              href="https://github.com/budget-banana/budget-banana"
              class="cursor-pointer hover:bg-yellow-200 transition duration-250 ease-in rounded-sm font-semibold underline"
              >GitHub</a
            >.
          </p>
        </div>
        <h1
          class="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center mb-10 max-w-6xl mx-auto"
        >
          An open source spend tracking, budgeting and financial planning
          application.
        </h1>
        <p class="text-lg text-slate-600 mt-6 text-center max-w-3xl mx-auto">
          We're building in public towards an alpha release, subscribe below for
          updates and be the first to know when you can signup.
        </p>

        <TheSubscribeForm />
      </div>
    </div>
    <div class="col-span-9 py-4 mx-auto relative">Main body</div>
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
