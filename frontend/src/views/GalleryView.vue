<template>
    <div>
        <div class="bg-cyan-700">
            <NavigationComp>

            </NavigationComp>
        </div>
        <div>
            <div class="mt-2 md:mt-10 pb-5 md:pb-0">
                <h1 class="text-center font-extrabold text-2xl sm:text-4xl font-sans text-cyan-700">Gallery</h1>
            </div>
            <div class="-mt-0 sm:-mt-20 md:-mt-32 lg:-mt-52 xl:-mt-80 -ml-0 md:-ml-10">
                <galleryCompt>
                </galleryCompt>
            </div>
        </div>
        <div class="-mt-0 sm:-mt-32 md:-mt-56 lg:-mt-72 xl:-mt-96 pb-0 md:pb-5">
            <div class="">
                <div class="px-5 md:px-20 py-10 md:py-20 text-cyan-700 ">
                    <p>"Tempat kreatif penuh dengan inspirasi, The Gade Creative Lounge mengundang untuk mengarungi samudra
                        ide
                        di
                        lautan imaji. Di sini, tercipta magisnya kolaborasi antara teknologi dan kreativitas, mengubah
                        gagasan
                        menjadi karya masterpiece. Selamat datang di pangkalan inovasi, di mana setiap klik membuka pintu
                        dunia
                        yang
                        tak terbatas."</p>
                </div>
            </div>
        </div>
        <div class="pb-10">
            <carouselGrid>

            </carouselGrid>
        </div>
        <div class="pt-5 bg-cyan-800">
            <footerCompt>

            </footerCompt>
        </div>
    </div>
</template>

<script>
import NavigationComp from '@/components/NavigationComp.vue';
import galleryCompt from '@/components/galleryCompt.vue'
import footerCompt from '@/components/footerCompt.vue';
import carouselGrid from '@/components/carouselGrid.vue';

export default {
    name: "galleryView",
    components: {
        galleryCompt,
        NavigationComp,
        footerCompt,
        carouselGrid
    }
}

</script>