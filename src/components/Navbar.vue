<template>
  <nav>
    <div>
      <router-link to="/">Register</router-link>
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

a {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #EFA335;
  text-decoration: none;
  margin: 12px;
  transition: .3s;
}

a:hover {
  color: #28a745;
}
</style>
