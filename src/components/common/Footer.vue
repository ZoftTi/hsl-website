<template>
  <el-footer>
    <div class="footer">
      <el-row>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <h2>广州红树林教育科技有限公司</h2>
          <h4>电话: 020-8699-3876</h4>
          <h4>地址：广州市花都区狮岭镇新花路9号</h4>
          <h4>邮箱：GX18598092445@163.com</h4>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="or-img">
          <img
            src="https://zqimg.gz.bcebos.com/hongshulinjy/608117bbd017c7.77812335.jpg"
          />
        </el-col>
      </el-row>
      <div class="copyright">
        广州红树林教育科技有限公司 All Right Reserved.
        备案编号:粤ICP备19148605号
      </div>
    </div>
  </el-footer>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: "App",
  setup() {
    return {}
  },
})
</script>

<style lang="less" scoped>
.el-footer {
  padding: 0;
  height: auto;

  .footer {
    width: 100%;
    color: #f2f2f2;
    background-color: #333333;
    padding: 60px 0px 40px;

    .el-row {
      width: calc(100% - 60px);
      max-width: 1200px;
      margin: 0 auto;

      .el-col h2,
      .el-col h4 {
        margin-bottom: 48px;
      }

      .or-img {
        display: flex;
        justify-content: flex-end;
      }
    }

    .copyright {
      width: 100%;
      height: 40px;
      text-align: center;
      padding: 0px 10px;
      margin: 40px auto 0;
    }
  }

  @media screen and (max-width: 768px) {
    .footer .el-row,
    .footer .copyright {
      width: calc(100% - 64px);

      font-size: 14px;
    }

    .footer .el-row .or-img {
      width: 100%;
      display: block;
      img {
        width: 100%;
      }
    }

    .footer .copyright {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 768px) {
    .footer .el-row {
      width: calc(100% - 100px);
    }
  }

  @media screen and (min-width: 1200px) {
    .footer .el-row {
      width: calc(100% - 70px);
    }
  }
}
</style>
