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
        <el-col :xs="24" :sm="14" :md="12" :lg="12" :xl="12">
          <h4>{{ item.name }}</h4>
          <div class="line-div"></div>
          <p>{{ item.content }}</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, reactive } from "vue"
import headerPicture from '@/assets/images/headerPicture/1569464033.jpg'
export default defineComponent({
  name: "enterprise",
  setup() {
    const enterprise = reactive([
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e7070ea2e2e22.59908897.jpg",
        name: "广州市花都区英朗培训中心",
        content:
          "广州市花都区英朗培训中心（简称英朗教育）是高新教育集团属下的成人教育培训机构。作为一所智慧型社会教育服务机构，英朗教育秉承“厚德博学、求实创新”的办学宗旨，专注为社会继续学习提供创新服务。英朗教育（原广州市花都区集博教育培训中心）成立于2005年4月，以坚定的办学理念，开创了学历教育与职业技能教育相结合的教学模式，构建了校企事业单位合作的办学思路，走出一条以“社会实用性为导向”的独具英朗特色的办学之路。",
        url: "/",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e706f479f9c32.48762827.jpg",
        name: "广东省高新技术职业培训学院",
        content:
          "广东省高新技术职业培训学院成立于2008年，是一所培养中、高级技能人才的省属全日制省重点技工学校。学校坐落在广州北站枢纽，广州新机场经济圈内，毗邻花都空港经济区、广州万达文化旅游城、花都汽车城、花都珠宝城、狮岭国际皮具城等大型工、商业园区，交通便利，环境优越，企业云集，可为学子提供良好的实习就业平台。",
        url: "/",
      },
    ])
    
    inject('setCarouselAttribute')(false, headerPicture)

    
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
        padding: 32px 24px 32px 40px;
        display: flex;
        flex-direction: column;

        h4 {
          margin-bottom: 24px;
        }

        .line-div {
          width: 56px;
          height: 5px;
          background-color: #3c8ee2;
          margin: 0px 0px 24px 0px;
        }

        p {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
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
