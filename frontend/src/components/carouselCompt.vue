<template>
    <div class="w-full md:w-116">
        <swiper :modules="modules" :slides-per-view="1" :space-between="20" navigation :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange" class="h-72 md:h-116">
            <swiper-slide>
                <img src="../../public/depan.jpeg" alt="logo" class="w-full h-full object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="../../public/depan.jpeg" alt="logo" class="w-full h-full object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="../../public/depan.jpeg" alt="logo" class="w-full h-full object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="../../public/depan.jpeg" alt="logo" class="w-full h-full object-cover">
            </swiper-slide>
            <swiper-slide>
                <img src="../../public/depan.jpeg" alt="logo" class="w-full h-full object-cover">
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
};
</script>