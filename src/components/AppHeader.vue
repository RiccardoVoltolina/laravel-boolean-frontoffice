<script>
export default {
  name: 'AppHeader',
}
</script>

<template>

<header class="bg-dark py-1">

  <div class="container">
    <nav class="navbar navbar-expand-sm navbar-light d-flex justify-content-between align-items-center">
        <div class="nav navbar-nav">
          <router-link class="nav-item nav-link fw-bold text-white" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="nav-item nav-link fw-bold text-white" :to="{ name: 'About' }">About</router-link>
          <router-link class="nav-item nav-link fw-bold text-white" :to="{ name: 'Contacts' }">Contacts</router-link>
        </div>
    </nav>
  </div>

</header>

</template>

<style>

</style>
