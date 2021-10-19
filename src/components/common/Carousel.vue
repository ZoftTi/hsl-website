<template>
  <div class="carousel-wrap" v-if="carouselShow">
    <el-carousel trigger="click" height="550px">
      <el-carousel-item v-for="item in images" :key="item">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { defineComponent, inject, reactive } from "vue"
import { useRoute, useRouter, RouteLocationRaw } from "vue-router"
import bannerImg from "@/assets/images/banner/banner1.png"
import bannerImgTwo from "@/assets/images/banner/banner2.png"
import bannerImgThree from "@/assets/images/banner/banner3.png"
export default defineComponent({
  name: "App",
  setup() {
    const images = reactive([
      bannerImg,
      bannerImgTwo,
      bannerImgThree,
    ])

    const carouselShow = inject("carouselShow")

    return {
      images,
      carouselShow,
    }
  },
})
</script>

<style lang="less">
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
