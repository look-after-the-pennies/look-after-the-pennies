<script setup lang="ts">
import TheSubscribeForm from '../components/TheSubscribeForm.vue';
import TheRoadMap from '../components/TheRoadMap.vue';
</script>

<template>
  <main class="grid grid-cols-12">
    <div
      class="w-screen bg-gradient-to-b from-blue-100 to-white col-span-12 relative px-1 md:px-0"
    >
      <div class="container mx-auto pt-16 pb-20 md:py-20 lg:py-32">
        <h1
          class="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-center mb-10 max-w-6xl mx-auto"
        >
          An open source spend tracking, budgeting and financial planning
          application<span
            class="text-4xl md:text-5xl lg:text-6xl text-yellow-300 ml-0.25"
            >.</span
          >
        </h1>
        <p class="text-lg text-slate-700 mt-6 text-center max-w-3xl mx-auto">
          We're currently building (<router-link
            to="/open-organisation"
            class="cursor-pointer hover:bg-yellow-200 transition duration-250 ease-in rounded-sm font-semibold underline"
            >in public</router-link
          >) towards a release, subscribe below for updates and to be the first
          to know when signups are open.
        </p>

        <TheSubscribeForm />
      </div>
    </div>
    <div class="w-screen">
      <hr class="hidden md:block" />
      <div class="container mx-auto grid grid-cols-12 md:gap-8 md:pt-8">
        <div class="col-span-12 md:col-span-9 mx-auto px-4 md:px-0 md:pr-6">
          <hr class="mb-8 md:hidden" />
          <h2
            class="text-slate-900 text-3xl md:text-4xl tracking-tight font-extrabold mb-4"
          >
            Why Look After The Pennies<span
              class="text-4xl text-yellow-300 ml-0.25"
              >.</span
            >
          </h2>
          <p class="mb-4 md:mb-3 text-slate-700">
            We're entering a period in history that is going to be incredibly
            hard for a lot of people. When money is tight you need to have a
            strong understanding of where your money is, how it is spent and
            when the next bill is due.
          </p>
          <p class="mb-4 md:mb-3 text-slate-700">
            I believe the people that can benefit most from budgeting and spend
            tracking services are those that are living paycheck to paycheck.
            However, most existing services are aimed at people who are already
            relatively well off financially and the apps themselves are either
            very basic, tied to some kind of savings / investment account or
            harvesting your data to sell to hedge funds.
          </p>
          <p class="mb-4 md:mb-3 text-slate-700">
            Our applications will be open source, free of charge and fully
            featured. Users data will never be sold and they will not be
            advertised to and encouraged to spend more of their money on things
            they don't need. We will also seek to educate people about their
            finances and direct them to services and advice appropriate for
            their situation.
          </p>
          <h2
            class="text-slate-900 text-3xl md:text-4xl tracking-tight font-extrabold mb-4 mt-8"
          >
            Help Us On Our Mission<span class="text-4xl text-yellow-300 ml-0.25"
              >.</span
            >
          </h2>
          <p class="mb-3 text-slate-700">
            If you like what I'm trying to do and want to help with developing
            the applications, working on our branding, writing content,
            marketing, social media or anything else
            <router-link
              to="/contact-us"
              class="cursor-pointer hover:bg-yellow-200 transition duration-250 ease-in rounded-sm font-semibold underline"
              >I'd love to hear from you</router-link
            >. Many hands make light work and all that!
          </p>
        </div>

        <TheRoadMap />
        <!-- <WantToHelp class="visible min-w-screen md:min-w-0 mb-12" /> -->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
