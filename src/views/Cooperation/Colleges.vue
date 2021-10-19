<template>
  <div class="colleges">
    <div class="header">
      <h2>合作院校</h2>
      <div class="line-div"></div>
    </div>

    <div class="post">
      <el-row v-for="(item, index) in colleges" :key="index">
        <el-col
          :xs="24"
          :sm="10"
          :md="{ span: 6, offset: 3 }"
          :lg="{ span: 6, offset: 3 }"
          :xl="{ span: 6, offset: 3 }"
        >
          <img :src="item.picture" />
        </el-col>
        <el-col
          :xs="24"
          :sm="14"
          :md="{ span: 12, offset: 1 }"
          :lg="{ span: 12, offset: 1 }"
          :xl="{ span: 12, offset: 1 }"
        >
          <h4>{{ item.name }}</h4>
          <div class="line-div"></div>
          <p>{{ item.content }}</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue"
export default defineComponent({
  name: "App",
  setup() {
    const colleges = reactive([
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e716dd0589156.96315359.jpg",
        name: "阳江职业技术学院",
        content: "阳江职业技术学院是经广东省人民政府批准设立，国家教育部备案，阳江市人民政府举......",
        url: "/",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e716dcfcc0af2.17979223.jpg",
        name: "广州市实验技术学校",
        content: "广州市实验技工学校创办于1995年，是经广东省劳动和社会保障厅批办，广州市劳动......",
        url: "/",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e716dcee21c04.29495312.jpg",
        name: "广东省交通运输技师学院",
        content: "广东省交通运输技师学院（以下简称学院）创办于1960 年，2001 年与广州公路工程技工......",
        url: "/",
      },
    ])
    return {
      colleges,
    }
  },
})
</script>

<style lang="less" scoped>
.colleges {
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
      margin-bottom: 80px;

      .el-col {
        min-height: 200px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .el-col:nth-child(2) {
        padding: 20px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h4 {
          margin-bottom: 30px;
        }

        .line-div {
          width: 56px;
          height: 5px;
          background-color: #3C8EE2;
          margin: 0px 0px 32px 0px;
        }

      }
    }
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 32px);

    .post {
      .el-row {
        .el-col:nth-child(2) {
          padding: 20px 0px;
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
