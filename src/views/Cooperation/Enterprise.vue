<template>
  <div class="enterprise">
    <div class="header">
      <h2>教育培训</h2>
      <div class="line-div"></div>
    </div>

    <div class="post">
      <el-row v-for="(item, index) in enterprise" :key="index">
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
  name: "enterprise",
  setup() {
    const enterprise = reactive([
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e7070ea2e2e22.59908897.jpg",
        name: "广州市花都区英朗培训中心",
        content: "广州市花都区英朗培训中心（简称英朗教育）是高新教育集团属下的成人教育培训机构。",
        url: "http://www.gzhsljy.com/jiaoyupe/165/",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e706f479f9c32.48762827.jpg",
        name: "广东省高新技术职业培训学院",
        content: "广东省高新技术职业培训学院成立于2008年，是一所培养中、高级技能人才的省属全日制省重点技工学校。学校坐落在广州北站枢纽",
        url: "http://www.gzhsljy.com/hezuoyua/164/",
      }
    ])
    return {
      enterprise,
    }
  },
})
</script>

<style lang="less" scoped>
.enterprise {
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
