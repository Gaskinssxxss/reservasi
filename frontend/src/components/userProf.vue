<!-- Profile.vue -->
<template>
    <div>
        <div v-if="reservedSeats.length > 0">
            <div v-for="seat in reservedSeats" :key="seat._id">
                {{ seat.kolomKursi }} - {{ seat.barisKursi }}
            </div>
        </div>
        <div v-else>
            <p>No reserved seats yet.</p>
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";

export default {
    data() {
        return {
            user: {}, // Data pengguna yang masuk
            reservedSeats: [], // Data kursi yang direservasi oleh pengguna
        };
    },
    created() {
        this.getUserData();
        this.getReservedSeats();
    },
    methods: {
        async getUserData() {
            try {
                const response = await Api.get('/users'); // Ganti dengan endpoint yang sesuai untuk mendapatkan data pengguna yang masuk
                this.user = response.data.data;
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        },
        async getReservedSeats() {
            try {
                const response = await Api.get('/reservasi'); // Ganti dengan endpoint yang sesuai untuk mendapatkan data kursi yang direservasi oleh pengguna
                this.reservedSeats = response.data.data.filter(seat => seat.name === this.user.username); // Filter data kursi berdasarkan nama pengguna yang masuk
            } catch (error) {
                console.error('Error fetching reserved seats:', error);
            }
        },
    },
};
</script>
