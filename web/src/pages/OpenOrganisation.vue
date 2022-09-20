<template>
  <main class="text-slate-700">
    <div
      class="w-screen bg-gradient-to-b from-blue-100 to-white col-span-12 relative px-2 md:px-0 pt-12"
    >
      <div class="container mx-auto">
        <h1
          class="text-slate-900 text-3xl tracking-tight font-extrabold md:text-5xl mb-12"
        >
          An open organisation building in public<span
            class="text-4xl text-yellow-300 ml-0.25"
            >.</span
          >
        </h1>
        <h2
          class="text-2xl tracking-tight font-extrabold text-slate-700 md:text-3xl mb-2 mt-6"
        >
          What Does That Mean?
        </h2>
        <p class="mb-2">
          It means that along the journey we will post regular updates about our
          progress in a very open way, sharing our successes but also our
          failures.
        </p>
        <p class="mb-2">
          What it doesn't mean is that your data will be shared openly or
          publicly, we value data privacy and security over and above anything
          else and your data will never be shared with anyone other than you.
        </p>
        <!-- TODO: make these automatic -->
        <h2
          class="text-2xl tracking-tight font-extrabold text-slate-700 md:text-3xl mb-2 mt-6 md:mt-12"
        >
          Public Stats<span class="text-4xl text-yellow-300 ml-0.25">.</span>
        </h2>
        <div class="flex flex-col md:flex-row justify-start md:gap-4">
          <div class="md:max-w-2/6 md:min-w-1/5">
            <h3 class="mb-2">Development</h3>
            <div class="flex flex-row gap-2 mb-4">
              <div
                class="flex flex-col basis-6/12 border border-slate-600 bg-blue-100 p-2 text-center rounded-md max-w-30"
              >
                <h4>Contributors</h4>
                <span class="text-xl font-bold">1</span>
              </div>
              <div
                class="flex flex-col basis-6/12 border border-slate-600 bg-blue-100 p-2 text-center rounded-md max-w-30"
              >
                <h4>Commits</h4>
                <span class="text-xl font-bold">22</span>
              </div>
            </div>
          </div>
          <div class="md:max-w-2/6 md:min-w-1/5">
            <h3 class="mb-2">Running costs</h3>
            <div class="flex flex-row gap-2 mb-4">
              <div
                class="flex flex-col basis-6/12 border border-slate-600 bg-blue-100 p-2 text-center rounded-md max-w-30"
              >
                <h4>Domains</h4>
                <span class="text-xl font-bold">£27.52</span>
              </div>
              <div
                class="flex flex-col basis-6/12 border border-slate-600 bg-blue-100 p-2 text-center rounded-md max-w-30"
              >
                <h4>Hosting</h4>
                <span class="text-xl font-bold">£0.00</span>
              </div>
            </div>
          </div>
          <div class="md:max-w-2/6 md:min-w-1/5">
            <h3 class="mb-2">Mailing list</h3>
            <div class="flex flex-row gap-2 mb-4">
              <div
                class="flex flex-col basis-6/12 border border-slate-600 bg-blue-100 p-2 text-center rounded-md max-w-30"
              >
                <h4>Subscribers</h4>
                <span class="text-xl font-bold">0</span>
              </div>
              <div
                class="flex flex-col basis-6/12 border border-slate-600 bg-blue-100 p-2 text-center rounded-md max-w-30"
              >
                <h4>Emails Sent</h4>
                <span class="text-xl font-bold">0</span>
              </div>
            </div>
          </div>
        </div>
        <h2
          class="text-2xl tracking-tight font-extrabold text-slate-600 md:text-3xl mt-6 md:mt-12"
        >
          Site Traffic<span class="text-4xl text-yellow-300 ml-0.25">.</span>
        </h2>
        <iframe
          plausible-embed
          src="https://stats.speckledbanana.com/share/lookafterthepennies.com?auth=7Ue3UvC0gLxC5FIv_jDy2&embed=true&theme=light&background=transparent"
          scrolling="no"
          frameborder="0"
          loading="lazy"
          style="width: 1px; height: 1600px"
          class="min-w-full md:min-w-4/5 xl:min-w-3/5"
        ></iframe>
        <div
          style="font-size: 14px; padding-bottom: 14px"
          class="mt-6 md:mt-2"
        >
          Stats powered by
          <a
            target="_blank"
            style="color: #4f46e5; text-decoration: underline"
            href="https://plausible.io"
            >Plausible Analytics</a
          >
        </div>
      </div>
    </div>
  </main>
</template>
