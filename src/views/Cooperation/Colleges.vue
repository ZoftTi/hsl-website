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
  name: "colleges",
  setup() {
    const colleges = reactive([
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e716dd0589156.96315359.jpg",
        name: "阳江职业技术学院",
        content:
          "阳江职业技术学院是经广东省人民政府批准设立，国家教育部备案，阳江市人民政府举办的综合性普通高等学校。我院以“崇德远志，精艺博才”为校训，按照“立足地方，以区域发展需要的专业为主体；培养可持续发展的高技能实操型人才；建设为区域发展做出重要贡献的高等职业院校”的办学定位，办优师范、办强工科，突出优势，凝聚特色，注重实践能力的培养和人文素质的教育。培养人民满意、社会需要、具有持续竞争力的高素质技术技能人才。",
        url: "/",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e716dcfcc0af2.17979223.jpg",
        name: "广州市实验技术学校",
        content:
          "广州市实验技工学校创办于1995年，是经广东省劳动和社会保障厅批办，广州市劳动和社会保障局主管的一所全日制技工学校。学校强化“以就业为导向，以能力为本位”的理念，坚持“建设文明校园，树立文明校风”的教育，以“走向朝阳的人生，从职业教育开始”为办学宗旨，营造务实求新的教学氛围，取得了令人瞩目的办学成绩。学校位于海珠区新港西25号自编1号。交通便利，多条公交线路途经学校。",
        url: "/",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e716dcee21c04.29495312.jpg",
        name: "广东省交通运输技师学院",
        content:
          "广东省交通运输技师学院（以下简称学院）创办于1960 年，2001 年与广州公路工程技工学校、广东省船舶工业技工学校、广东省船员技工学校合并。2003 年获评国家重点技工学校，2005 年晋升为高级技工学校，2010 年获评全国交通中等职业教育示范院校，2011 年晋升为技师学院，2014 年通过国家中等职业教育改革发展示范学校验收。",
        url: "/",
      },
    ])

    inject('setCarouselAttribute')(false, headerPicture)


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
