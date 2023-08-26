<template>
  <div class="main-container">
    <h1>Registro</h1>
    <form class="register-form" @submit.prevent="submitForm">
      <input v-model="nome" type="text" name="nome" placeholder="Nome" required>
      <input v-model="email" type="email" name="email" placeholder="Email" required>
      <input v-model="senha" type="password" name="senha" placeholder="Senha" required>
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      nome: "",
      email: "",
      senha: ""
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("http://localhost:5000/", {
          nome: this.nome,
          email: this.email,
          senha: this.senha
        });

        if (response.status === 200) {
          console.log("Registro bem-sucedido");
          this.$router.push("/login");
        } else {
          console.log("Erro no registro");
        }
      } catch (error) {
        console.error("Erro ao registrar:", error);
      }
    }
  }
};
</script>

<style>
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.register-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.register-form button {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
