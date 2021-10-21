<template>
  <div class="carousel-wrap" v-if="carouselAttribute.isShow">
    <el-carousel trigger="click" :height="carouselHeight + 'px'">
      <el-carousel-item v-for="item in images" :key="item">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="carousel-wrap header-picture" v-if="carouselAttribute.picUrl">
    <img :src="carouselAttribute.picUrl" alt="" />
  </div>
</template>

<script>
import { defineComponent, inject, onMounted, reactive, ref } from "vue"
import { useRoute, useRouter, RouteLocationRaw } from "vue-router"
import bannerImg from "@/assets/images/banner/banner1.png"
import bannerImgTwo from "@/assets/images/banner/banner2.png"
import bannerImgThree from "@/assets/images/banner/banner3.png"
export default defineComponent({
  name: "App",
  setup() {
    const images = reactive([bannerImg, bannerImgTwo, bannerImgThree])

    const carouselHeight = ref(520)

    const carouselAttribute = inject("carouselAttribute")

    return {
      images,
      carouselHeight,
      carouselAttribute,
    }
  },
})
</script>

<style lang="less">
.header-picture {
  height: 162px;
  max-height: 162px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.carousel-wrap {
  margin-top: 60px;
  .el-carousel__item {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
