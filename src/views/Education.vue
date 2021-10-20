<template>
  <div class="education">
    <div class="post">
      <h2>教育体系</h2>
      <div class="line-div"></div>
      <p>
        在加强高层次人才引进方面，重点引进学科领军人物和创新团队、高层次青年人才和急需紧缺青年专门人才。对紧缺的特殊人才，开辟专门渠道，实现精准引进，科学制定引才规划，明确引才目标任务、重点领域和优先次序。
      </p>
      <br />
      <p>
        支持高层次人才承担科技计划项目及课题，深度参与科研攻关和技术创新，发挥用人主体作用，完善支持配套政策，为高层次人才在生活上提供更多便利，在工作上提供更多机会和更大舞台，创新高层次人才组织和管理模式。
      </p>
      <br />
      <p>
        在人才输出方面，不断通过综合实训、学期实训、顶岗实训，加强学生动手操作能力，以此来提高学生的技能专业水平。在引领学生走向职场时，确保人才培养标准与真实产业需求无缝对接，提升学生的就业能力和创新创业能力。
      </p>
      <br />
      <p>
        通过严格把控专业建设标准、人才培养方案、就业流程体系等服务环节，已经形成良好有序的精准生源吸引到应用人才输出的高效持续轨道，为各类型企业输出更多有用、实用的未来栋梁之才。
      </p>
    </div>
    <div class="post">
      <h2>校友服务</h2>

      <div class="line-div"></div>
      <el-row>
        <el-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11">
          <p>
            大讲堂：每月定期职场大讲堂，提升校友综合实力；
          </p>
          <br />
          <p>
            培训再就业：高端（政府、国企、出国等）工作岗位，组织校友培训，进行二次就业服务；
          </p>
          <br />
          <p>天使投资：为有想法、有创意校友，联合企业定点投资、扶持；</p>
          <br />
          <p>
            增值服务：为校友提供学历提升、技能提升、婚礼策划、育子经验的各类平台服务。
          </p>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="{ span: 12, offset: 1 }"
          :lg="{ span: 12, offset: 1 }"
          :xl="{ span: 12, offset: 1 }"
        >
          <img src="@/assets/images/education-frist.jpg" alt="" />
        </el-col>
      </el-row>
    </div>
    <div class="post">
      <h2>职场培训</h2>
      <div class="line-div"></div>
      <el-row>
        <el-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11">
          <p>
            大学生培训：为即将就业的大学生提供职业素养培训体系课程，增加大学生的职业核心竞争力；
          </p>
          <br />
          <p>
            企业在岗培训：为企业在岗员工提共专业的技能提升及管理能力培训体系课程，为企业提供全方面服务。
          </p>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="{ span: 12, offset: 1 }"
          :lg="{ span: 12, offset: 1 }"
          :xl="{ span: 12, offset: 1 }"
        >
          <img src="@/assets/images/education-second.jpg" alt="" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject } from "vue"
import headerPicture from '@/assets/images/headerPicture/child-gc83b684d8_1920.jpg'
export default defineComponent({
  name: "App",
  setup() {
    inject("setCarouselAttribute")(false, headerPicture)
    return {}
  },
})
</script>

<style lang="less" scoped>
.education {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  padding: 80px 0px;

  .post {
    padding-bottom: 60px;

    p {
      line-height: 2rem;
    }

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

  .line-div {
    width: 100%;
    height: 5px;
    background-color: #3c8ee2;
    margin-top: 16px;
    margin-bottom: 36px;
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
