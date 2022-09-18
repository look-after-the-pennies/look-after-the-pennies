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
        <p class="text-lg text-slate-700 mt-6 text-center max-w-3xl mx-auto">
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
          <h2
            class="text-slate-900 text-3xl tracking-tight font-extrabold sm:text-4xl mb-4"
          >
            Why BudgetBanana
          </h2>
          <p class="mb-3 text-slate-700">
            We're entering a period in history that is going to be incredibly
            hard financially for a lot of people. When money is tight you need
            to have a strong understanding of where your money is, how it is
            spent and when the next bill is due.
          </p>
          <p class="mb-3 text-slate-700">
            Most existing budgeting / spend tracking services are aimed at
            people who are already relatively well off financially. However, I
            believe the people that can benefit most from these sort of services
            are those that are living paycheck to paycheck. The apps themselves
            are either very basic, tied to some kind of savings / investment
            account or harvesting your data to sell to hedge funds.
          </p>
          <p class="mb-3 text-slate-700">
            BudgetBanana's applications will be open source, free of charge and
            fully featured. Users data will never be sold and they will not be
            advertised to and encouraged to spend more of their money on things
            they don't need. We will also seek to educate people about their
            finances and direct them to services and advice appropriate for
            their situation.
          </p>

          <h2
            class="text-slate-900 text-3xl tracking-tight font-extrabold sm:text-4xl mb-4 mt-8"
          >
            The Name Is Terrible
          </h2>
          <p class="mb-3 text-slate-700">
            I know! It's very much a working title and I'd love to hear any
            suggestions you have for a better name for the project. I've been
            racking my brains for that elusive name that sounds friendly and
            welcoming but also descriptive and encompasses what the project is
            about.
          </p>
          <h2
            class="text-slate-900 text-3xl tracking-tight font-extrabold sm:text-4xl mb-4 mt-8"
          >
            Help Us On Our Mission
          </h2>
          <p class="mb-3 text-slate-700">
            If you like the vision for BudgetBanana and would like to help with
            developing the applications, working on our branding, writing
            content, marketing, social media or anything else I'd love to hear
            from you. Many hands make light work and all that!
          </p>
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
