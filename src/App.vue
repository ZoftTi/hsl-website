<template>
  <div class="container-wrap">
    <el-container>
      <el-header>
        <nav-bar />
      </el-header>
      <Carousel />
      <el-main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in" enter-from-class="fade-enter-from">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>

      <Footer />
    </el-container>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue"
import Footer from "@/components/common/Footer.vue"
import Carousel from "@/components/common/Carousel.vue"
import { provide, inject, defineComponent, ref } from "vue"
export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Carousel,
    Footer,
  },
  setup() {
    const carouselShow = ref(true)
    const toggleCarouselShow = () => {
      carouselShow.value = !carouselShow.value
    }
    provide("carouselShow", carouselShow)
    provide("toggleCarouselShow", toggleCarouselShow)

    return {}
  },
})
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.container-wrap {
  .el-container {
    padding: 0;
  }

  .el-main {
    padding: 0;
  }

  .el-header {
    padding: 0;
    height: auto;
    position: fixed;
    z-index: 999;
    width: 100%;
    background-color: white;
  }
}
</style>
