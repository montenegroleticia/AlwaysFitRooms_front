<template>
  <Navbar />
  <div>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import './reset.css';

export default {
  components: {
    Navbar
  }
}
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h1 {
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 24px;
  color: #28a745;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
}
</style>
