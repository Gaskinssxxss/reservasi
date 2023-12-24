<script setup>
import { Smoothie } from "vue-smoothie";
</script>

<template>
    <Smoothie class="h-48 w-32">
        <div class="px-1 text-cyan-800">
            <div class="py-1 rounded-md text-center font-sans font-semibold px-1 text-sm">
                <div class="text-justify">
                    <div class="">
                        <ul class="space-y-2">
                            <li v-for="(kursi, index) in kursiBelumTereservasi" :key="index"
                                class="bg-stone-100 py-2 flex justify-center">
                                Kursi : {{ kursi.kolomKursi }} - {{ kursi.barisKursi }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Smoothie>
</template>

<script>
import Api from "@/services/api";

export default {
    data() {
        return {
            kursiBelumTereservasi: []
        };
    },
    mounted() {
        this.fetchKursiBelumTereservasi();
    },
    methods: {
        async fetchKursiBelumTereservasi() {
            try {
                // Memanggil endpoint GET untuk kursi yang belum tereservasi
                const response = await Api.get('kursiAvail');

                // Menggunakan data yang didapat dari endpoint
                const kursiBelumTereservasi = response.data.data;

                // Mendapatkan data reservasi dari API
                const responseReservasi = await Api.get('/reservasi');
                const semuaReservasi = responseReservasi.data.data;

                // Mengidentifikasi kursi yang sudah tereservasi
                const kursiTereservasi = semuaReservasi.map((reservasi) => ({
                    kolomKursi: reservasi.kolomKursi,
                    barisKursi: reservasi.barisKursi,
                }));

                // Memfilter kursi yang belum tereservasi
                this.kursiBelumTereservasi = kursiBelumTereservasi.filter((kursi) => {
                    const sudahTereservasi = kursiTereservasi.some(
                        (reservasi) =>
                            reservasi.kolomKursi === kursi.kolomKursi && reservasi.barisKursi === kursi.barisKursi
                    );
                    return !sudahTereservasi;
                });

                console.log(this.kursiBelumTereservasi);
            } catch (error) {
                console.error(error);
                // Tindakan penanganan kesalahan jika diperlukan
            }
        }

    },
};
</script>