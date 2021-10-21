<template>
  <div class="about">
    <div class="about-us post">
      <h2>关于我们</h2>
      <div class="line-div"></div>
      <el-row>
        <el-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11">
          <p>
            广州红树林教育科技有限公司隶属于广州市高新教育集团，专业从事教育投资和教学管理输出，业务涵盖技能培训、
            就业输出、专业共建、学校托管等领域。目前拥有合作职业院校20余所，在册学生达10万+。
          </p>
          <br />
          <p>
            公司以“打造有世界影响力的技能教育品牌”为目标，整合优质资源，探索出与职业学校联合办学的管理新模式。
            我们以对客户负责、对奋斗者负责、对社会负责的企业价值观，致力培养具有中国灵魂和国际视野的优秀学生为目标，
            致力成为中国知名培养和输送优秀职业人的基地，嫁接各类名校，植入先进理念，大胆实践，积极创新办学模式，目前已
            经总结和形成了具有红树林特征的办学经验，取得了辉煌的成绩。“聘歌云职场”是广州红树林教育科技有限公司联合各大高校打造的“资源整合+共享服务”的新型人力资源服务创新
            平台。整合高校人才资源、企业资源，构建一个新的人力资源聚合体。
            根据多年办学经验和人才输出经历探索出院校和企
            业的人才对接新模式，实现“人才共享”。借助大平台的人力资源数据库及流量优势，抢占全国人才招聘市场，将“聘歌
            云职场”发展成为一个人力资源服务市场的新型行业独角兽。
          </p>
          <br />
          <p>企业愿景：打造最有温度的大数据就业平台。</p>
          <p>企业使命：让企业没有难找的人才。</p>
          <p>企业核心价值观：对客户负责、对奋斗者负责、对社会负责。</p>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="{ span: 12, offset: 1 }"
          :lg="{ span: 12, offset: 1 }"
          :xl="{ span: 12, offset: 1 }"
        >
          <img src="@/assets/images/about-us-frist.jpg" alt="" />
        </el-col>
      </el-row>
    </div>

    <div class="idea post">
      <h2>发展理念</h2>
      <div class="line-div"></div>
      <p>使命：培养适合企业发展需求的合格职业人</p>
      <p>愿景：成为中国知名培养和输送优秀职业人的基地</p>
      <p>宗旨：对客户负责、对奋斗者负责、对社会负责</p>
      <p>理念：诚信、敬业、创新、共赢</p>
    </div>

    <div class="service-mode post">
      <h2>服务模式</h2>
      <div class="line-div"></div>
      <el-row>
        <el-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11">
          <p>
            勤工俭学：组织工作以高标准，高要求的原则，确保我司与合作企业项目的顺利运行，多方位提升学生综合素质；
          </p>
          <br />
          <p>
            学校开发：合作办学、专业共建的深度合作；学生实习，就业安置合作；短期勤工俭学（双11，双12、寒暑假）合作；
          </p>
          <br />
          <p>
            培训就业输出：常年开发合作伙伴及人才，确保人才输送；规范管理，服务好企业及人才；
          </p>
          <br />
          <p>
            职业核心能力培训体系：开展大学生职业核心能力培训；开展企业岗位能力提升培训。
          </p>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="{ span: 12, offset: 1 }"
          :lg="{ span: 12, offset: 1 }"
          :xl="{ span: 12, offset: 1 }"
        >
          <img src="@/assets/images/about-idea.jpg" alt="" />
        </el-col>
      </el-row>
    </div>
    <div class="contact-us post">
      <h2>服务模式</h2>
      <div class="line-div"></div>
      <el-row>
        <el-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11">
          <p>
            广州红树林教育科技有限公司
          </p>
          <br />
          <p>
            电话：020-8699-3876
          </p>
          <br />
          <p>
            E-mail：GX18598092445@163.com
          </p>
          <br />
          <p>
            地址：广州市花都区狮岭镇新花路9号
          </p>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="{ span: 12, offset: 1 }"
          :lg="{ span: 12, offset: 1 }"
          :xl="{ span: 12, offset: 1 }"
        >
          <!-- <img src="@/assets/images/map.png" alt="" /> -->
          <div id="mapContainer" style="width: 100%;height: 100%"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, onMounted } from "vue"
import headerPicture from "@/assets/images/headerPicture/1569489442.jpg"
export default defineComponent({
  name: "App",
  setup() {
    onMounted(() => {
      var map = new BMap.Map("mapContainer")
      var point = new BMap.Point(113.30456, 23.462931)
      map.centerAndZoom(point, 15)
      var marker = new BMap.Marker(point)
      map.addOverlay(marker)
      map.addControl(new BMap.NavigationControl())
      map.enableScrollWheelZoom(true)
    })

    inject("setCarouselAttribute")(false, headerPicture)
    return {}
  },
})
</script>

<style lang="less" scoped>
.about {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  padding: 80px 0px;

  .line-div {
    width: 100%;
    height: 5px;
    background-color: #3c8ee2;
    margin-top: 16px;
    margin-bottom: 36px;
  }

  .post {
    padding-bottom: 60px;

    .el-row {
      width: 100%;
      max-width: 1200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .about-us {
    .el-row {
      p:nth-child(1),
      p:nth-child(3) {
        text-indent: 2rem;
      }
    }
  }

  .idea {
    p {
      line-height: 2.5rem;
    }
  }

  .contact-us {
    padding-bottom: 0;
    p {
      line-height: 2.5rem;
    }

    #mapContainer {
      width: 100%;
      height: 100%;
      min-height: 400px;
    }
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 32px);

    .post {
      .el-row {
        width: 100%;

        .el-col:nth-child(1) {
          margin-bottom: 40px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: calc(100% - 35px);

    .post .el-row {
      .el-col:nth-child(1) {
        margin-bottom: 40px;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    width: calc(100% - 50px);
  }
}
</style>
