<template>
  <div class="home">
    <el-container>
      <div class="about-us">
        <h2>关于红树林</h2>
        <div class="line-div"></div>
        <p class="about-us-describe">
          广州红树林教育科技有限公司隶属于广州市高新教育集团业务涵盖技能培训、就业输出、专业共建、学校托管等领域
        </p>

        <div class="about-us-list">
          <div
            class="about-us-item"
            v-for="(item, index) in aboutData"
            :key="index"
          >
            <h4>{{ item.title }}</h4>
            <h2>{{ item.data }}</h2>
            <h4>{{ item.unit }}</h4>
          </div>
        </div>
      </div>
      <div class="education">
        <h2>教育为本</h2>
        <span>整合优质资源，培养输送优秀职业人</span>
        <el-row class="education-list">
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="6"
            :xl="6"
            v-for="item in educationData"
            class="education-item"
          >
            <h2>{{ item.title }}</h2>
            <div class="line-div"></div>
            <p>{{ item.content }}</p>
          </el-col>
        </el-row>
      </div>
      <div class="news">
        <el-row :gutter="40">
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
            <div class="information">
              <h2>新闻资讯</h2>
              <div class="line-div"></div>
              <el-row :gutter="30">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <img
                    src="https://xibaiimg.gz.bcebos.com/hongshulinjy/5e706f7451bbe9.17343751.jpg"
                    alt=""
                  />
                  <span>职场人际交往技巧一</span>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <img
                    src="https://xibaiimg.gz.bcebos.com/hongshulinjy/5e706f7451bbe9.17343751.jpg"
                    alt=""
                  />
                  <span>职场人际交往技巧一</span>
                </el-col>
              </el-row>
              <span class="more">更多</span>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="16">
            <div class="dynamic">
              <h2>行业动态</h2>
              <div class="line-div"></div>
              <el-row :gutter="30">
                <el-col :xl="24">
                  <img
                    src="https://xibaiimg.gz.bcebos.com/hongshulinjy/5e706f7451bbe9.17343751.jpg"
                    alt=""
                  />
                  <span>职场人际交往技巧一</span>
                </el-col>
              </el-row>
              <span class="more">更多</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-container>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue"
export default defineComponent({
  name: "App",
  components: {
  },
  setup() {
    const aboutData = reactive([
      { title: "合作职业院校", data: 10, unit: "余所" },
      { title: "合作企业", data: 40, unit: "多家" },
      { title: "专家顾问", data: 40, unit: "余人 " },
      { title: "教职员工", data: 10, unit: "余人" },
      { title: "在册学生", data: 10000, unit: "余人" },
    ])
    const educationData = reactive([
      { title: "大讲堂", content: "每月定期职场大讲堂提升校友综合实力" },
      { title: "培养再就业", content: "高端岗位职业培训进行二次就业服务" },
      { title: "天使投资", content: "为有想法有创意校友联合企业定点投资" },
      { title: "增值服务", content: "学历提升技能提升各种类型平台服务" },
    ])
    return {
      aboutData,
      educationData,
    }
  },
})
</script>

<style lang="less" scoped>
.el-container {
  margin: 0 auto;
  flex-direction: column;

  .about-us {
    max-width: var(--client-width);
    margin: 0 auto;
    padding: 60px 0px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      color: #707070;
      font-size: 26px;
    }

    .line-div {
      margin: 16px 0 40px 0;
      width: 200px;
      height: 5px;
      background-color: #3c8ee2;
    }

    .about-us-describe {
      width: 360px;
      color: #707070;
      font-size: 14px;
      margin-bottom: 62px;
    }

    .about-us-list {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      width: var(--client-width);

      .about-us-item {
        width: 180px;
        height: 180px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin-top: 25px;

        border-radius: 50%;

        h4 {
          font-size: 16px;
          line-height: 2rem;
        }

        h2 {
          font-size: 26px;
          color: #3764e7;
        }
      }
    }
  }

  .education {
    max-width: 100%;
    background-image: url("https://zqimg.gz.bcebos.com/hongshulinjy/5e71764ba75bc4.44393478.jpg");
    background-attachment: fixed;
    background-position: center top;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
      background-attachment: scroll;
      background-position: center top;
      background-repeat: no-repeat;
    }

    color: #f2f2f2;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 80px 0px 70px;

    h2 {
      font-size: var(--headline);
      margin-bottom: 40px;
    }

    span {
      font-size: var(--subtitle);
    }

    .education-list {
      width: var(--client-width);

      margin-top: 80px;

      .education-item {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 25%;
        margin-bottom: 70px;

        h2 {
          font-size: var(--subtitle);
          margin-bottom: 6px;
        }

        .line-div {
          width: 30px;
          height: 1px;
          background-color: white;
        }

        p {
          margin-top: 18px;
          font-size: var(--text-font);
          width: 130px;
          text-align: center;
        }
      }
    }
  }

  .news {
    max-width: 1200px;
    width: var(--client-width);
    margin: 0 auto;
    padding: 90px 0px;

    .information {
      border-right: 1px solid #f2f2f2;
      padding-right: 35px;
    }

    .el-row {
      width: calc(100% + 32px);

      .el-col {
        img {
          width: 100%;
        }

        span {
          font-size: 16px;
          line-height: 2rem;
        }
      }
    }

    .h2 {
      font-size: var(--headline);
    }

    .line-div {
      margin: 16px 0 26px 0;
      width: 200px;
      height: 5px;
      background-color: #3c8ee2;
    }

    .more {
      display: block;
      font-size: 16px;
      float: right;
    }

    @media screen and (max-width: 768px) {
      padding: 50px 0px;
      .information {
        border: none;
        padding-right: 0;
      }
    }
  }
}
</style>
