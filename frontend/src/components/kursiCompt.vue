<script setup>
import { AutoTyperVue } from "auto-typer-vue3";

let text = 'Hello Kak Adminisme'
</script>

<template>
    <div>
        <NavigationComp class="bg-cyan-800"></NavigationComp>
    </div>
    <div class="">
        <div class="">
            <div class="flex justify-end">
                <div class="relative mt-1 md:-mt-1 -top-16 right-10 lg:right-16">
                    <button @click="bagShow" class="">
                        <svg class="w-7 md:w-8 h-7 md:h-8" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M935.292 958.682H729.154c-13.727 0-24.855-11.129-24.855-24.855v-38.712H320.181v38.712c0 13.727-11.129 24.855-24.855 24.855H90.189c-13.726 0-24.856-11.129-24.856-24.855V408.563c0-13.726 11.13-24.856 24.856-24.856h38.712V138.436c0-41.18 33.375-74.568 74.568-74.568h618.542c41.18 0 74.567 33.388 74.567 74.568v245.271h38.713c13.727 0 24.854 11.13 24.854 24.856v525.263c0.001 13.727-11.126 24.856-24.853 24.856zM832.866 152.436c0-13.727-11.128-24.856-24.854-24.856H216.469c-13.726 0-24.856 11.129-24.856 24.856v231.271h41.712c13.726 0 22.855 11.13 22.855 24.856v166.992h512.118V408.563c0-13.726 11.129-24.856 24.855-24.856h39.712V152.436z m63.572 294.984h-64.426v166.99c0 13.727-11.129 24.856-24.857 24.856H217.326c-13.728 0-24.856-11.13-24.856-24.856V447.419h-64.424v448.55H256.47v-38.712c0-13.727 11.129-24.855 24.856-24.855h460.829c13.729 0 24.857 11.129 24.857 24.855v38.712h129.426V447.42z"
                                fill="white" />
                        </svg>
                        <div v-show="open" class="justify-center pt-10 absolute right-0">
                            <scrollBar class=" bg-stone-100 rounded-sm -mt-1"></scrollBar>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="">
        <form @submit.prevent="submitKursi">
            <div class="">
                <h2 class="text-2xl md:text-4xl font-extrabold mb-4 font-sans text-center text-cyan-700 pt-5 md:pt-0">
                    Reservasi Kursi
                </h2>
                <div class="block md:flex justify-center">
                    <AutoTyperVue :typingDelay=200 componentTag="h1" :text="text"
                        class="text-center pb-3 font-semibold text-cyan-700 pr-2 -mx-10 md:-mx-0"><span
                            class="text-center pb-3 font-semibold text-black">{{ user.username }}</span></AutoTyperVue>
                </div>
            </div>
            <div class="grid grid-cols-5 md:grid-cols-10 gap-2 px-5 md:px-64 text-cyan-800">
                <div v-for="kursi in kursiList" :key="kursi.id" class="py-2 rounded-md text-center font-sans font-semibold"
                    :class="{
                        'bg-stone-100 border-2 border-cyan-800': !kursi.selected,
                        'bg-red-700': kursi.selected,
                        'text-white': kursi.selected,
                    }" @click="toggleSeat(kursi.id)">
                    {{ kursi.kolomKursi }} - {{ kursi.barisKursi }}
                    <svg class="w-8 h-8 mx-auto" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M935.292 958.682H729.154c-13.727 0-24.855-11.129-24.855-24.855v-38.712H320.181v38.712c0 13.727-11.129 24.855-24.855 24.855H90.189c-13.726 0-24.856-11.129-24.856-24.855V408.563c0-13.726 11.13-24.856 24.856-24.856h38.712V138.436c0-41.18 33.375-74.568 74.568-74.568h618.542c41.18 0 74.567 33.388 74.567 74.568v245.271h38.713c13.727 0 24.854 11.13 24.854 24.856v525.263c0.001 13.727-11.126 24.856-24.853 24.856zM832.866 152.436c0-13.727-11.128-24.856-24.854-24.856H216.469c-13.726 0-24.856 11.129-24.856 24.856v231.271h41.712c13.726 0 22.855 11.13 22.855 24.856v166.992h512.118V408.563c0-13.726 11.129-24.856 24.855-24.856h39.712V152.436z m63.572 294.984h-64.426v166.99c0 13.727-11.129 24.856-24.857 24.856H217.326c-13.728 0-24.856-11.13-24.856-24.856V447.419h-64.424v448.55H256.47v-38.712c0-13.727 11.129-24.855 24.856-24.855h460.829c13.729 0 24.857 11.129 24.857 24.855v38.712h129.426V447.42z"
                            fill="black" />
                    </svg>
                </div>
            </div>
            <div class="pt-12 px-0 md:px-56 flex justify-end mr-32 md:mr-8 ">
                <button @click="reloadPage" type="submit"
                    class=" bg-cyan-700 text-white p-2 rounded-md hover:bg-cyan-500 transition-all">
                    Reservasi
                </button>
            </div>
        </form>
        <div class="pt-5 md:pt-20">
            <footerCompt class=" bg-cyan-800"></footerCompt>
        </div>
    </div>
</template>


<script>
import Api from "@/services/api";
import NavigationComp from "./NavigationComp.vue";
import scrollBar from "@/components/scrollBar.vue";
import footerCompt from "./footerCompt.vue";

export default {
    components: {
        NavigationComp,
        scrollBar,
        footerCompt
    },
    data() {
        return {
            kursiList: [],
            reservasiData: [],
            name: "",
            open: false,
        };
    },
    mounted() {
        this.fetchKursiData();
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        async fetchKursiData() {
            try {
                const response = await Api.get('kursi');
                this.kursiList = response.data.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        bagShow() {
            this.open = !this.open;
        },
        toggleSeat(id) {
            const kursi = this.kursiList.find(k => k.id === id);

            if (!kursi.selected) {
                // Batalkan semua kursi yang sudah dipilih sebelumnya
                this.kursiList.forEach(item => {
                    item.selected = false;
                });

                // Pilih kursi yang diklik
                kursi.selected = true;
            }
        },
        async submitKursi() {
            const selectedKursi = this.kursiList.filter(kursi => kursi.selected);

            if (selectedKursi.length === 0) {
                console.error('Please select at least one seat before submitting!');
                return;
            }

            // Periksa apakah pengguna sudah login dan memiliki data lengkap
            if (!this.user || !this.user.username) {
                console.error('Please log in before making a reservation or ensure user data is complete.');
                return;
            }

            const selectedSeatsData = {
                name: this.user.username, // Menggunakan username dari data pengguna
                kolomKursi: selectedKursi[0].kolomKursi,
                barisKursi: selectedKursi[0].barisKursi
            };

            try {
                const checkAvailability = await Api.post("reservasi/check", selectedSeatsData);

                if (checkAvailability.data.available) {
                    await Api.post("reservasi", selectedSeatsData);
                    this.$toast.success("Reservation succeeded!", { position: "bottom-left", duration: 2000 });
                } else {
                    this.$toast.error("Selected seat(s) are already reserved!", { position: "bottom-left", duration: 2000 });
                }
            } catch (error) {
                console.error('Error submitting reservation:', error);
                this.$toast.error("Reservation not allowed at this time.", { position: "bottom-left", duration: 2000 });
            }
        },
        reloadPage() {
            setTimeout(function () {
                location.reload();
            }, 3000);
        }
    },
};
</script>

<style scoped>
@import "auto-typer-vue3/dist/style.css";
</style>