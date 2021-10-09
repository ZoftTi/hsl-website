<template>
  <div class="nav-bar">
    <div class="logo">
      <img src="@/assets/images/home-logo.jpg" alt="" />
    </div>
    <div class="nav-item-wrap">
      <div
        v-for="(item, index) in nav"
        @click="routerLink(index, item.path)"
        :class="navIndex === index ? 'nav-item item-active' : 'nav-item'"
      >
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div
      class="hanburger-button"
      @click="isShow = !isShow"
      :class="{ 'hanburger-button-close': isShow }"
    >
      <span></span>
    </div>
  </div>
  <div class="mobile-nav-bar" :style="{ 'margin-top': isShow ? '0' : '-200%' }">
    <div class="mobile-nav-item-wrap">
      <div
        v-for="(item, index) in nav"
        @click="routerLink(index, item.path)"
        :class="navIndex === index ? 'nav-item item-active' : 'nav-item'"
      >
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, watch, ref, reactive } from "vue"
import { useRoute, useRouter } from "vue-router"
export default defineComponent({
  name: "App",
  setup() {
    const router = useRouter()
    const nav = reactive([
      { title: "首页", path: "/home", children: [] },
      { title: "关于", path: "/about", children: [] },
      { title: "教育体系", path: "/education", children: [] },
      {
        title: "携手合作",
        path: "/cooperation",
        children: [
          { title: "合作院校", path: "/colleges" },
          { title: "教育培训", path: "/enterprise" },
        ],
      },
      { title: "行业动态", path: "/dynamic", children: [] },
      {
        title: "新闻",
        path: "/news",
        children: [{ title: "新闻详情", path: "/newsdetail" }],
      },
    ])

    // 移动端导航是否显示
    const isShow = ref(false)

    // 导航高亮下标
    const navIndex = ref(null)

    // 路由跳转函数
    const routerLink = (index, path) => {
      isShow.value = false
      navIndex.value = index

      router.push(path)
    }

    const checkRouterLocal = (path) => {
      // 查找当前路由下标高亮
      const findNavIndex = nav.findIndex((item) => item.path === path)

      if (findNavIndex !== -1) {
        navIndex.value = findNavIndex
      } else {
        navIndex.value = nav.findIndex((item) => item.children.findIndex((item) => item.path === path) !== -1)
      }
    }

    // 路由守卫查询路由状态
    router.afterEach((to, from) => {
      checkRouterLocal(to.fullPath)
    })

    return { isShow, nav, navIndex, routerLink }
  },
})
</script>

<style lang="less">
.nav-bar {
  max-width: 1200px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 999;

  background-color: white;

  .logo {
    width: 188px;
    height: 60px;
    padding: 5px 0;

    img {
      height: 100%;
    }
  }

  .hanburger-button {
    display: block;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    position: relative;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    span {
      display: block;
      position: absolute;
      background-color: black;
      height: 4px;
      top: 22px;
      left: 8px;
      right: 8px;
      border-radius: 2px;
      transition: background-color 0.4s ease-in-out;

      &::after,
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: black;
        border-radius: 2px;
        transition: transform 0.4s ease-in-out, top 0.4s ease-in-out,
          bottom 0.4s ease-in-out;
      }

      &::after {
        bottom: -10px;
      }

      &::before {
        top: -10px;
      }
    }
  }

  .hanburger-button-close {
    span {
      background-color: white;

      &::after {
        bottom: 0;
        transform: rotate(-45deg);
      }

      &::before {
        top: 0;
        transform: rotate(45deg);
      }
    }
  }

  .nav-item-wrap {
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-item {
      height: 60px;
      font-size: 16px;
      margin-left: 42px;
      color: #707070;
      cursor: pointer;
      position: relative;

      p {
        line-height: 56px;
        transition: 0.3s ease-in-out;
      }

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        width: 0%;
        height: 4px;
        border-radius: 2px;
        transition: 0.3s ease-in-out;
      }

      &:hover {
        &::before {
          width: 100%;
          background-color: #3764e7;
        }

        p {
          color: #3764e7;
        }
      }
    }

    .item-active {
      p {
        color: #3764e7;
      }
      &::before {
        width: 100%;
        background-color: #3764e7;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .nav-item-wrap {
      display: none;
    }
  }
}

.mobile-nav-bar {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0px;
  margin-top: -200%;

  transition: margin-top 0.4s ease-in-out;

  background-color: white;

  .nav-item {
    height: 60px;
    text-align: center;
  }

  .item-active {
    p {
      color: #3764e7;
    }
  }
}

@media screen and (min-width: 768px) {
  .mobile-nav-bar {
    display: none;
  }

  .nav-bar .hanburger-button {
    display: none;
  }
}
</style>
