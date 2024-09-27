import { ref } from 'vue';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const useSwiper = () => {
  const modules = [FreeMode, Navigation, Thumbs, Autoplay];
  const thumbsSwiper = ref(null);

  const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
  };

  return {
    modules,
    thumbsSwiper,
    setThumbsSwiper
  };
};