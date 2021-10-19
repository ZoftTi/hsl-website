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
        <el-row class="news-list-box" :gutter="30">
          <el-col
            class="news-list-item information"
            :xs="24"
            :sm="16"
            :md="16"
            :lg="16"
            :xl="16"
          >
            <div class="header">
              <div class="title">
                <h2>新闻资讯</h2>
                <div class="line-div"></div>
              </div>
              <router-link class="move" to="/news">更多</router-link>
            </div>
            <el-row :gutter="30">
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <img
                  src="https://xibaiimg.gz.bcebos.com/hongshulinjy/5e706f7451bbe9.17343751.jpg"
                />
                <div class="content">
                  <h1>职场人际交往技巧一</h1>
                  <span>2021-10-7</span>
                  <div class="describe">
                    职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                  </div>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <img
                  src="https://xibaiimg.gz.bcebos.com/hongshulinjy/5e71e6e8e74f82.09843614.jpg"
                />
                <div class="content">
                  <h1>职场人际交往技巧一</h1>
                  <span>2021-10-7</span>
                  <div class="describe">
                    职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col
            class="news-list-item dynamic"
            :xs="24"
            :sm="8"
            :md="8"
            :lg="8"
            :xl="8"
          >
            <div class="header">
              <div class="title">
                <h2>行业动态</h2>
                <div class="line-div"></div>
              </div>
              <router-link class="move" to="/dynamic">更多</router-link>
            </div>
            <el-row>
              <el-col :span="24">
                <img
                  src="https://xibaiimg.gz.bcebos.com/hongshulinjy/5e71e72e2b07d6.87738941.jpg"
                />
                <div class="content">
                  <h1>职场人际交往技巧一</h1>
                  <span>2021-10-7</span>
                  <div class="describe">
                    职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                  </div>
                </div>
              </el-col>
            </el-row>
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
  components: {},
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

  .line-div {
    margin: 16px 0 40px 0;
    width: 200px;
    height: 5px;
    background-color: #3c8ee2;
  }

  .about-us {
    max-width: 1200px;
    width: calc(100% - 32px);

    margin: 0 auto;
    padding: 60px 0px 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3 {
      color: #707070;
      font-size: 26px;
    }

    .about-us-describe {
      width: 100%;
      color: #707070;
      font-size: 14px;
      margin-bottom: 62px;
    }

    .about-us-list {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      max-width: 100%;

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
    color: #f2f2f2;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 80px 0px 70px;

    h2 {
      font-size: 28px;
      margin-bottom: 40px;
    }

    span {
      font-size: 18px;
    }

    .education-list {
      width: 100%;
      max-width: 1200px;
      margin-top: 80px;

      .education-item {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 25%;
        margin-bottom: 70px;

        h2 {
          font-size: 18px;
          margin-bottom: 6px;
        }

        .line-div {
          width: 30px;
          height: 1px;
          background-color: white;
        }

        p {
          margin-top: 18px;
          font-size: 14px;
          width: 130px;
          text-align: center;
        }
      }
    }
  }

  .news {
    max-width: 1200px;
    margin: 0 auto;
    padding: 90px 0px;

    .header {
      display: flex;
      justify-content: space-between;

      align-items: center;
      padding-right: 30px;

      .move {
        display: block;
        border: 1px solid #7a7a7a;
        text-align: center;
        border-radius: 30px;
        padding: 5px 18px;
        margin-top: -35px;
        cursor: pointer;

        color: #7a7a7a;
      }
    }

    .line-div {
      width: 100px;
    }

    .news-list-box .news-list-item .el-row .el-col {
      display: flex;
      flex-direction: column;
      padding: 0px 20px;

      img {
        width: 100%;
        height: 230px;
        object-fit: cover;
      }

      .content {
        cursor: pointer;
        padding: 16px;
        background: #f8f8f8;

        h1 {
          line-height: 2rem;
          font-size: 16px;
          font-weight: 400;
        }

        span {
          font-size: 14px;
          color: #7a7a7a;
        }

        .describe {
          font-size: 14px;
          padding: 20px 0;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .about-us {
      padding: 60px 20px 70px;
    }

    .education {
      background-attachment: scroll;
      background-position: center top;
      background-repeat: no-repeat;
    }

    .news {
      width: calc(100% - 32px);
      padding-bottom: 20px;

      .header {
        padding-right: 0;
      }

      .news-list-box .news-list-item .el-row .el-col {
        margin-bottom: 40px;
      }

      .dynamic .el-row .el-col {
        padding: 0 !important;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .news {
      width: calc(100% - 64px);

      .dynamic .el-row .el-col {
        padding: 0 !important;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .news {
      width: calc(100% - 96px);
    }
  }
}
</style>
