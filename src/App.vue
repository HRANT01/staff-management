<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
    <!-- This renders the current route's component -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  padding: 1rem;
}
nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: blue;
}
</style>
