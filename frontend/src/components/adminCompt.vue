<template>
    <div>
        <NavigationComp class="bg-cyan-800"></NavigationComp>
    </div>
    <div class="pt-10 px-20">
        <div class="border-2 border-cyan-800 py-10">
            <div class="grid grid-cols-4 gap-5 px-5">
                <div v-for="reservasi in reservasiKursiList" :key="reservasi.name"
                    class="py-5 rounded-sm text-center bg-cyan-800 text-white border-2 border-cyan-800 font-sans font-semibold px-5">
                    <div class="text-justify">
                        <div>
                            <h1>Nama : {{ reservasi.name }}</h1>
                        </div>
                        <div>
                            <h1>Kursi : {{ (reservasi.kolomKursi + " - " + reservasi.barisKursi) }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";
import NavigationComp from "./NavigationComp.vue";

export default {
    name: "adminCompt",
    components: {
        NavigationComp
    },
    data() {
        return {
            reservasiKursiList: [],
        };
    },
    mounted() {
        this.fetchReservasiData();
    },
    methods: {
        formatArray(arr) {
            return arr.join(', ');
        },
        async fetchReservasiData() {
            try {
                const response = await Api.get('reservasi');
                this.reservasiKursiList = response.data.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
    },
};
</script>


