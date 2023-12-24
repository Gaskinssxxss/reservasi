<template>
  <div>
    <div class="bg-cyan-800">
      <NavigationComp />
    </div>
    <div class="bg-cyan-800 md:h-80">
      <div class="flex flex-col md:flex-row justify-center space-x-2 rounded-md -mt-10 md:-mt-0">
        <div class="pt-10 pb-5 md:pb-32 md:ml-32 md:w-96">
          <div>
            <carouselCompt></carouselCompt>
          </div>
        </div>
        <div class="px-4 md:px-20">
          <div class="pt-10">
            <div class="text-2xl font-bold font-sans capitalize leading-9 text-white">
              The Gade Creative Lounge memancarkan suasana semangat artistik dan inovasi, menyediakan surga unik bagi para
              pemikir kreatif untuk berkumpul.
            </div>
            <div class="pt-3 text-white text-sm">
              Terletak di jantung kreativitas, ruang dinamis ini memadukan estetika modern dengan sentuhan gaya
              avant-garde.
              Dari saat Anda melangkah masuk, Anda akan diselimuti suasana yang memicu inspirasi, dengan dekorasi
              eklektik,
              tempat kerja kolaboratif, dan spektrum media artistik di ujung jari Anda. The Gade Creative Lounge melampaui
              batas-batas konvensional, membina komunitas di mana imajinasi tidak mengenal batas, dan ide berkembang
              menjadi
              kreasi yang luar biasa.
            </div>
            <div class="flex justify-start pt-5 md:pt-16 space-x-7 md:space-x-10 ">
              <div class="bg-cyan-600 hover:bg-cyan-800 px-5 md:px-10 py-2 rounded-lg">
                <RouterLink to="/login">
                  <button class="text-sm md:text-base font-semibold text-white">Reservasi</button>
                </RouterLink>
              </div>
              <div class="bg-cyan-600 hover:bg-cyan-800 px-5 md:px-10 py-2 rounded-lg">
                <RouterLink to="/register">
                  <button class="text-sm md:text-base font-semibold text-white">Get Started</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-cyan-800">
        <footerCompt>

        </footerCompt>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationComp from "@/components/NavigationComp";
import carouselCompt from "@/components/carouselCompt.vue";
import footerCompt from "@/components/footerCompt.vue"
import { RouterLink } from "vue-router";

export default {
  name: "HomeView",
  components: {
    NavigationComp,
    carouselCompt,
    RouterLink,
    footerCompt
  },
  data() {
    return {
    };
  },
}
</script>