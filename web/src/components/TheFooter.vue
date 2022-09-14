<script setup lang="ts"></script>

<template>
  <footer
    class="w-full min-h-10 py-4 bg-slate-50 text-slate-600 border-y border-slate/900/10"
  >
    <div class="container mx-auto flex justify-between">
      <div>
        A
        <a
          href="https://speckledbanana.com"
          class="bg-yellow-200 px-1 rounded-sm cursor-pointer font-semibold uppercase"
          >Speckled Banana</a
        >
        project by
        <div class="inline-block">
          <a
            href="https://twitter.com/iSCJT"
            class="iscjt hover:bg-yellow-200 cursor-pointer rounded-sm font-semibold transition duration-250 ease-in"
            >@iSCJT
          </a>
          <img
            src="../assets/iSCJT400x400.jpg"
            class="avatar border"
          />
        </div>
        |
        <a
          href="https://twitter.com/hashtag/buildinpublic"
          class="hover:bg-yellow-200 cursor-pointer rounded-sm font-semibold transition duration-250 ease-in"
          >#buildinpublic</a
        >
      </div>
      <nav
        class="relative hidden md:flex items-center ml-auto text-sm leading-6 font-semibold space-x-8"
      >
        <a
          href="https://github.com/budget-banana/budget-banana"
          class="cursor-pointer hover:bg-yellow-200 transition duration-250 ease-in px-1 rounded-sm"
          >GitHub</a
        >
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.avatar {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  margin-top: -75px;
  margin-left: 10px;
}
.iscjt:hover ~ img {
  display: block;

  border-radius: 50%;
  height: 50px;
  width: 50px;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s ease-in;
}
</style>
