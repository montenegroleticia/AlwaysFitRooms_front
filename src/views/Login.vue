<template>
  <div class="main-container">
    <h1>Login</h1>
    <form class="login-form" @submit.prevent="submitForm">
      <input v-model="email" type="email" name="email" placeholder="Email" required>
      <input v-model="senha" type="password" name="senha" placeholder="Senha" required>
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: ""
    };
  },
  methods: {
    async submitForm(e) {
      e.preventDefault();

      try {
        const response = await axios.post("http://localhost:5000/login", {
          email: this.email,
          senha: this.senha
        });

        if (response.status === 200) {
          localStorage.setItem('userEmail', this.email);
          console.log("Login bem-sucedido");
          this.$router.push("/reservations");
        } else {
          console.log("Credenciais inválidas");
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
      }
    }
  }
};
</script>

<style>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.login-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.login-form button {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
