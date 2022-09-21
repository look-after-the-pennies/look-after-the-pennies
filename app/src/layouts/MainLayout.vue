<script setup lang="ts"></script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="container">
        <q-toolbar-title> Look After The Pennies </q-toolbar-title>
        <!-- <q-btn flat dense round icon="menu" aria-label="Menu" /> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
