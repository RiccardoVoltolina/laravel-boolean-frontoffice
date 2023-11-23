<script>


import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',

  components: {

    AppHeader,

  },
}


</script>

<template>
  
  <AppHeader></AppHeader>

  <main>

    <!-- qui passo le rotte create in router.js e grazie a questo, tutte le pagine hanno accesso ai dati di App.vue -->

    <router-view></router-view>


  </main>
</template>

<style></style>