<template>
  <div class="container-wrap">
    <el-container>
      <el-header>
        <nav-bar />
      </el-header>
      <Carousel />
      <el-main>
        <router-view v-slot="{ Component }">
          <transition
            name="fade"
            mode="out-in"
            enter-from-class="fade-enter-from"
          >
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
import { provide, inject, defineComponent, reactive } from "vue"
export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Carousel,
    Footer,
  },
  setup() {
    const carouselAttribute = reactive({
      isShow: true,
    })

    const setCarouselAttribute = (isShow = true) => {
      carouselAttribute.isShow = isShow
    }
    provide("carouselAttribute", carouselAttribute)
    provide("setCarouselAttribute", setCarouselAttribute)

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
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  }
}
</style>
