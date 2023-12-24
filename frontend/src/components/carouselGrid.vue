<template>
    <div class="-mx-32 md:mx-5">
        <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" class="px-2">
            <Slide v-for="slide in 1" :key="slide">
                <div class="carousel__item">
                    <img src="../../public/a.jpeg" alt="logo" class="rounded-md">
                </div>
            </Slide>
            <Slide v-for="slide in 1" :key="slide">
                <div class="carousel__item">
                    <img src="../../public/y.jpeg" alt="logo" class="rounded-md">
                </div>
            </Slide>
            <Slide v-for="slide in 1" :key="slide">
                <div class="carousel__item">
                    <img src="../../public/komp.jpeg" alt="logo" class="rounded-md">
                </div>
            </Slide>
            <Slide v-for="slide in 1" :key="slide">
                <div class="carousel__item">
                    <img src="../../public/reservaded.jpeg" alt="logo" class="rounded-md">
                </div>
            </Slide>
            <Slide v-for="slide in 1" :key="slide">
                <div class="carousel__item">
                    <img src="../../public/space.jpeg" alt="logo" class="rounded-md">
                </div>
            </Slide>
            <Pagination />
        </Carousel>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    components: {
        Carousel,
        Slide,
        Pagination,
    },
})
</script>
  
<style scoped>
.carousel__slide {
    padding: 1px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>