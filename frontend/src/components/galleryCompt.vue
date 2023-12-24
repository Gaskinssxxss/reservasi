<template>
    <div class="relative z-0">
        <swiper :modules="modules" :slides-per-view="1" :space-between="20" navigation :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange"
            class="h-72 sm:h-96 md:h-112 lg:h-116 xl:h-132 w-80 sm:m-96 md:w-116 lg:w-125 xl:w-135">
            <swiper-slide>
                <img src="../../public/depan.jpeg" alt="logo">
            </swiper-slide>
            <swiper-slide>
                <img src="../../public/space.jpeg" alt="logo">
            </swiper-slide>
            <swiper-slide>
                <img src="../../public/komp.jpeg" alt="logo">
            </swiper-slide>
            <swiper-slide>
                <img src="../../public/table.jpeg" alt="logo">
            </swiper-slide>
            <!-- ... -->
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