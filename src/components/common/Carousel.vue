<template>
  <div class="carousel-wrap" v-if="carouselShow">
    <el-carousel trigger="click" height="600px">
      <el-carousel-item v-for="item in images" :key="item">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { defineComponent, inject, reactive } from "vue"
import { useRoute, useRouter, RouteLocationRaw } from "vue-router"
export default defineComponent({
  name: "App",
  setup() {
    const images = reactive([
      "https://xibaiimg.gz.bcebos.com/hongshulinjy/5f6afc1e744878.14061921.jpg",
      "https://xibaiimg.gz.bcebos.com/hongshulinjy/5f6afc1e6eaa36.75172028.jpg",
      "https://xibaiimg.gz.bcebos.com/hongshulinjy/5f6871ca7d5b28.29320831.jpg",
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
