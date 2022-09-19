<script setup lang="ts"></script>

<template>
  <footer
    class="w-full min-h-10 py-4 bg-slate-50 text-slate-600 border-y border-slate/900/10 px-2 md:px-0 mt-16 md:mt-24"
  >
    <div class="container mx-auto flex flex-row flex-wrap md:justify-between">
      <a
        href="mailto:lets@lookafterthepennies.com"
        class="md:hidden cursor-pointer hover:bg-yellow-200 transition duration-250 ease-in px-1 rounded-sm font-semibold mx-auto text-sm leading-6 mb-2"
        >lets@lookafterthepennies.com</a
      >
      <div
        class="basis-full md:basis-3/5 text-center md:text-left text-sm md:min-w-2/6 md:max-w-2/6"
      >
        A
        <a
          href="https://speckledbanana.com"
          class="bg-yellow-200 px-1 rounded-sm cursor-pointer font-semibold tracking-tight uppercase"
          >Speckled Banana</a
        >
        project by
        <div class="inline-block">
          <a
            href="https://twitter.com/iSCJT"
            title="@iSCJT on Twitter"
            class="iscjt hover:bg-yellow-200 cursor-pointer rounded-sm font-semibold transition duration-250 ease-in"
            >@iSCJT
          </a>
          <img
            src="../assets/iSCJT400x400.jpg"
            class="avatar border"
          />
        </div>
      </div>
      <a
        href="mailto:lets@lookafterthepennies.com"
        class="hidden md:inline-block cursor-pointer md:min-w-2/6 md:max-w-2/6 text-center hover:bg-yellow-200 transition duration-250 ease-in px-1 rounded-sm font-semibold text-sm leading-6 mb-2"
        >lets@lookafterthepennies.com</a
      >

      <div
        class="flex ml-auto text-sm leading-6 font-semibold space-x-4 basis-full md:basis-2/5 md:min-w-2/6 md:max-w-2/6 justify-center md:justify-end mt-2 md:mt-0"
      >
        <a
          href="https://twitter.com/PenniesHQ"
          class="hover:bg-yellow-200 cursor-pointer rounded-sm font-semibold transition duration-250 ease-in"
          >#buildinpublic</a
        >
        <a
          href="https://github.com/look-after-the-pennies/look-after-the-pennies"
          class="cursor-pointer hover:bg-yellow-200 transition duration-250 ease-in px-1 rounded-sm"
          >GitHub</a
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.avatar {
  // visibility: hidden;
  // opacity: 0;
  // display: none;

  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: fixed;
  right: -50px;
  bottom: 0px;
  transform: rotate(-20deg);
  transition: right 1s, bottom 1s;
}
.iscjt:hover ~ img {
  // display: block;

  // visibility: visible;
  // opacity: 1;
  // transition: opacity 0.5s ease-in;
  // opacity: 1;
  bottom: 60px;
  right: 0px;
  // transform: rotate(-40deg);
  // transition: translate 1s ease-in;
}
</style>
