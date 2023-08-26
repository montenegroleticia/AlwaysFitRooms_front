<template>
    <div class="room-list">
        <ul>
            <li v-for="room in rooms" :key="room.id" class="room-item">
                <div class="room-details">
                    <span class="room-name">{{ room.nome }}</span>
                    <span class="room-capacity">Capacidade: {{ room.capacidade }}</span>
                    <span class="room-location">Localização: {{ room.localizacao }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    name: "Roomlist",
    data() {
        return {
            rooms: []
        };
    },
    mounted() {
        this.availableRooms();
    },
    methods: {
        async availableRooms() {
            try {
                const response = await axios.get('http://localhost:5000/rooms');
                this.rooms = response.data;
            } catch (error) {
                console.error('Erro ao buscar salas:', error);
            }
        }
    }
};
</script>
  
<style scoped>
.room-list {
    padding: 20px;
    background-color: #f4f4f4;
}

.room-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.room-details {
    display: flex;
    flex-direction: column;
}

.room-name {
    font-weight: bold;
    color: #EFA335;
}

.room-capacity,
.room-location {
    font-size: 14px;
    color: #555;
}
</style>
