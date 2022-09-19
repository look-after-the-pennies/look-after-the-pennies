<template>
  <main
    class="container w-screen mx-auto text-slate-700 pt-6 px-2 md:px-0 bg-gradient-to-b from-blue-100 to-white"
  >
    <h1
      class="text-slate-900 text-3xl tracking-tight font-extrabold sm:text-4xl mt-6 mb-12"
    >
      An open organisation building in public<span
        class="text-4xl text-yellow-300 ml-0.25"
        >.</span
      >
    </h1>
    <h2
      class="font-semibold text-2xl tracking-tight font-extrabold text-slate-600 mb-3"
    >
      What does that mean?
    </h2>
    <p class="mb-2">
      It means that along the journey we will post regular updates about our
      progress in a very open way, sharing our successes but also our failures.
    </p>
    <p class="mb-2">
      What it doesn't mean is that your data will be shared openly or publicly,
      we value data privacy and security over and above anything else and your
      data will never be shared with anyone other than you.
    </p>
    <!-- TODO: make these automatic -->
    <h2
      class="text-2xl tracking-tight font-extrabold text-slate-700 md:text-3xl mb-2 mt-6"
    >
      Public Stats<span class="text-4xl text-yellow-300 ml-0.25">.</span>
    </h2>
    <h3 class="mb-2">Development</h3>
    <div class="flex flex-row gap-2 mb-4">
      <div
        class="flex flex-col basis-6/12 border border-slate-600 bg-blue-100 p-2 text-center rounded-md"
      >
        <h3>Contributors</h3>
        <span class="text-xl font-bold">1</span>
      </div>
      <div
        class="flex flex-col basis-6/12 border border-slate-600 bg-blue-100 p-2 text-center rounded-md"
      >
        <h3>Commits</h3>
        <span class="text-xl font-bold">1</span>
      </div>
    </div>
    <h3 class="mb-2">Running costs</h3>
    <div class="flex flex-row gap-2 mb-4">
      <div
        class="flex flex-col basis-6/12 border border-slate-600 bg-blue-100 p-2 text-center rounded-md"
      >
        <h3>Domains</h3>
        <span class="text-xl font-bold">£27.52</span>
      </div>
      <div
        class="flex flex-col basis-6/12 border border-slate-600 bg-blue-100 p-2 text-center rounded-md"
      >
        <h3>Hosting</h3>
        <span class="text-xl font-bold">£0.00</span>
      </div>
    </div>
    <h3 class="mb-2">Mailing list</h3>
    <div class="flex flex-row gap-2 mb-4">
      <div
        class="flex flex-col basis-6/12 border border-slate-600 bg-blue-100 p-2 text-center rounded-md"
      >
        <h4>Subscribers</h4>
        <span class="text-xl font-bold">0</span>
      </div>
      <div
        class="flex flex-col basis-6/12 border border-slate-600 bg-blue-100 p-2 text-center rounded-md"
      >
        <h4>Emails Sent</h4>
        <span class="text-xl font-bold">0</span>
      </div>
    </div>

    <h2
      class="text-2xl tracking-tight font-extrabold text-slate-600 md:text-3xl mb-4 mt-6"
    >
      Site Traffic<span class="text-4xl text-yellow-300 ml-0.25">.</span>
    </h2>
    <!-- TODO: Plausible stats to go here -->
  </main>
</template>
