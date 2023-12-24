<template>
    <div class="pb-16">
        <div class="bg-cyan-800">
            <NavigationComp class="">

            </NavigationComp>
        </div>
        <div class="text-cyan-700 py-5">
            <div class="pb-5 md:pb-0">
                <h1 class="text-center font-extrabold text-4xl font-sans">About</h1>
            </div>
            <div class="px-3 md:px-28 text-justify pt-5">
                The Gade Creative Lounge adalah sebuah oasis bagi jiwa yang haus akan pengetahuan dan kreasi tak terhingga.
                Dengan deretan komputer canggih yang tersedia, tempat ini menjadi sarang bagi eksplorasi tanpa batas.
                Ruangannya
                dirancang dengan estetika yang memikat, menawarkan suasana yang menenangkan namun tetap membangkitkan
                semangat
                kreatif.

                Di sini, belajar tak lagi terasa sebagai kewajiban, melainkan petualangan yang mengasyikkan. Setiap sudutnya
                dipenuhi dengan elemen yang menginspirasi: dari lukisan-lukisan dinding yang memikat hingga pencahayaan yang
                lembut, semuanya dirancang untuk merangsang imajinasi.
            </div>
            <div class="px-3 md:px-28 text-justify pt-5">
                Tidak hanya tempat untuk belajar, tetapi The Gade Creative Lounge juga menjadi panggung bagi berbagai
                kegiatan
                kreatif. Dari sesi pelatihan hingga workshop, dari sesi diskusi hingga pameran seni, tempat ini menjadi
                wadah
                bagi pertukaran ide yang tak terbatas.

                Penggunaan komputer-komputer modern yang tersedia di sini memberikan akses ke teknologi terbaru,
                memungkinkan
                eksperimen dan kreasi yang tak terbatas. Ruangan yang nyaman dan penuh inspirasi ini menjadi saksi bagi
                kelahiran gagasan-gagasan brilian yang bermula dari sentuhan jari di atas keyboard.

                Selamat datang di The Gade Creative Lounge, di mana belajar, bermain, dan berkarya menjadi satu kesatuan
                harmonis dalam perjalanan menuju pencapaian kreativitas tertinggi.
            </div>

            <div class="flex justify-start py-5 pr-3 md:pr-0">
                <div class=" ml-2 md:ml-28">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                </div>
                <div class="pl-2 text-justify">
                    <h1>Gedung Utama, Fakultas Ekonomi dan Bisnis, Universitas Mataram, Matara, Nusa Tenggara Barat</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="-mb-10 bg-cyan-800">
        <footerCompt>

        </footerCompt>
    </div>
</template>

<script>
import NavigationComp from '@/components/NavigationComp.vue';
import footerCompt from '@/components/footerCompt.vue';

export default {
    name: "aboutCompt",
    components: {
        NavigationComp,
        footerCompt
    }
}
</script>