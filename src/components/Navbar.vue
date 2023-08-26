<template>
  <nav>
    <div>
      <router-link to="/">Register</router-link>
      <router-link to="/login">Login</router-link>
      <a @click="logout">Logout</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    async logout() {
      try {
        const email = localStorage.getItem('userEmail');
        const response = await axios.post("http://localhost:5000/logout", null, {
          data: {
            email: email
          }
        });
        if (response.status === 200) {
          localStorage.removeItem('userEmail');
          console.log("Logout bem-sucedido");
          this.$router.push("/login");
        } else {
          console.log("Erro ao fazer logout");
        }
      } catch (error) {
        console.error("Erro ao fazer logout:", error);
      }
    }
  }
};
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
