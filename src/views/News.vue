<template>
  <div class="news">
    <div class="header">
      <h2>新闻</h2>
      <div class="line-div"></div>
    </div>

    <div class="post">
      <router-link
        to="/news/article/1212"
        v-for="(item, index) in news"
        :key="index"
      >
        <el-row>
          <el-col
            :xs="24"
            :sm="10"
            :md="{ span: 6, offset: 4 }"
            :lg="{ span: 6, offset: 4 }"
            :xl="{ span: 6, offset: 4 }"
          >
            <img :src="item.picture" />
          </el-col>
          <el-col
            :xs="24"
            :sm="14"
            :md="{ span: 10, offset: 0 }"
            :lg="{ span: 10, offset: 0 }"
            :xl="{ span: 10, offset: 0 }"
          >
            <h4>{{ item.title }}</h4>
            <p>{{ item.content }}</p>
            <span>{{ item.time }}</span>
          </el-col>
        </el-row>
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, reactive } from "vue"
export default defineComponent({
  name: "App",
  setup() {
    const news = reactive([
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e706e840fb943.80109379.jpg",
        title: "凝心聚力，共赢未来 | 广州高新医药技校隆重签约云职场平台",
        content: "广州高新医药技校广州红树林教育科技云职场平台合作签约仪式",
        time: "2020-09-23",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5f68743e989ff3.75743496.jpg",
        title: "携手并进，共创辉煌 | 珠峰机器人隆重签约云职场平台",
        content: "广州珠峰机器人 | 广州红树林教育科技云职场平台合作签约仪式",
        time: "2020-09-21",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5f6872384cdaf5.79593949.jpg",
        title: "快报 | 我司与广信科技IT学院校企合作揭牌仪式顺利进行",
        content:
          "2020年8月18日上午10:00，由广信IT学院与广州红树林教育科技有限公司（以下简称“我公司”）共同举办的校企合作揭牌仪式在广东信息科技职业培训学院南沙校区顺利召开。",
        time: "2020-09-21",
      },
    ])

    return {
      news,
    }
  },
})
</script>

<style lang="less" scoped>
.news {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  padding: 60px 0 40px;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .line-div {
      margin: 16px 0 80px 0;
      width: 200px;
      height: 5px;
      background-color: #3c8ee2;
    }
  }

  .post {
    .el-row {
      width: 100%;
      max-width: 1200px;
      margin-bottom: 60px;

      .el-col {
        min-height: 200px;
        background-color: #f2f2f2;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .el-col:nth-child(2) {
        padding: 20px 24px;
        position: relative;

        h4 {
          margin-bottom: 30px;
        }

        span {
          position: absolute;
          bottom: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 32px);

    .post {
      .el-row {
        .el-col:nth-child(2) {
          padding: 20px 10px;
          span {
            position: relative;
            bottom: -20px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: calc(100% - 35px);
  }

  @media screen and (min-width: 1200px) {
    width: calc(100% - 50px);
  }
}
</style>
