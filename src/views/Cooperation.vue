<template>
  <div class="cooperation">
    <div class="post institutions">
      <div class="post-header">
        <h2>合作院校</h2>
        <router-link to="/colleges">
          <span>更多</span>
        </router-link>
      </div>
      <div class="line-div"></div>
      <el-row>
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          :xl="8"
          v-for="item in institutions"
        >
          <a :href="item.url">
            <img :src="item.picture" alt="" />
            <h4>{{ item.name }}</h4></a
          >
        </el-col>
      </el-row>
    </div>
    <div class="post">
      <h2>校企合作</h2>
      <div class="line-div"></div>
      <el-row>
        <el-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11">
          <p>（一）酒店服务类</p>
          <br />
          <p>
            广州合兴大酒店有限公司、广东湖景金阁饮食有限公司、广州花都竹缘美食、广州金骏酒店有限公司、广州金联福餐饮有限公司、广州民航大酒店、广州福荟来餐饮服务有限公司广州豪苑酒店有限公司、广州华钜君悦酒店有限公司、中南民航经济发展公司芙蓉会议中心
          </p>
          <br />
          <p>（二）化妆品轻工业类</p>
          <br />
          <p>
            广州一兆无纺日化有限公司、广州喜悦生物科技有限公司、丹姿集团（广州市科能化妆品科研有限公司）、广州艾蓓生物科技有限公司
          </p>
          <br />
          <p>（三）电子制造业类</p>
          <br />
          <p>
            广州科林电器有限公司、佛山鋐利电子有限公司、步步高教育电子有限公司、东莞清溪富崴电子厂、光宝电子（广州）有限公司、广东新宝电器股份有限公司、东莞欧珀精密电子有限公司、广州市尊浪电器有限公司、东莞库柏电子有限公司、深圳思纬市场资讯有限公司广州分公司、佛山顺德北滘塑料电器有限公司、比亚迪股份有限公司、广东泛仕达机电有限公司、广州南联航空食品有限公司、中山TCL制冷设备有限公司、海信广东空调有限公司、佛山振宣精密科技有限公司、广州市亿丰彩印包装有限公司、广州市博泰光学科技有限公司、广州帅著运动用品有限公司、上海苏博眼镜有限公司、广州奥博文具有限公司、广州市恒俊生态农业发展有限公司、广东云山仓储服务有限公司、广州碧源管业有限公司、广州市佳宏电子有限公司
          </p>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="{ span: 12, offset: 1 }"
          :lg="{ span: 12, offset: 1 }"
          :xl="{ span: 12, offset: 1 }"
        >
          <img src="@/assets/images/cooperation-frist.jpg" alt="" />
        </el-col>
      </el-row>
    </div>
    <div class="post training-institutions">
      <div class="post-header">
        <h2>教育培训</h2>
        <router-link to="/enterprise">
          <span>更多</span>
        </router-link>
      </div>
      <div class="line-div"></div>
      <el-row>
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          :xl="8"
          v-for="item in training"
        >
          <a :href="item.url">
            <img :src="item.picture" alt="" />
            <h4>{{ item.name }}</h4></a
          >
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
    const institutions = reactive([
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e716dd0589156.96315359.jpg",
        name: "阳江职业技术学院",
        url: "/",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e716dcfcc0af2.17979223.jpg",
        name: "广州市实验技术学校",
        url: "/",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e716dcee21c04.29495312.jpg",
        name: "广东省交通运输技师学院",
        url: "/",
      },
    ])
    const training = reactive([
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e7070ea2e2e22.59908897.jpg",
        name: "广州市花都区英朗培训中心",
        url: "/",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e706f479f9c32.48762827.jpg",
        name: "广东省高新技术职业培训学院",
        url: "/",
      },
    ])
    return {
      institutions,
      training,
    }
  },
})
</script>

<style lang="less">
.cooperation {
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

    .post-header {
      display: flex;
      justify-content: space-between;
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

  .institutions,
  .training-institutions {
    // padding-bottom: 0px;

    .el-col {
      padding-left: 20px;

      &:nth-child(1) {
        padding-left: 0;
      }

      h4 {
        line-height: 50px;
      }

      img {
        height: 80%;
      }
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

    .institutions,
    .training-institutions {
      .el-col {
        padding: 0;
        margin: 0 !important;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: calc(100% - 40px);
  }

  @media screen and (min-width: 1200px) {
    width: calc(100% - 50px);
  }
}
</style>
