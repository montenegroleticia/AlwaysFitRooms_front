<template>
    <div class="main-container">
        <h1>Salas Disponíveis para Reserva</h1>
        <Roomlist />
    </div>
</template>
  
<script>
import Roomlist from "../components/Roomlist.vue";

export default {
    name: "Reservations",
    components: {
        Roomlist
    }
};
</script>
