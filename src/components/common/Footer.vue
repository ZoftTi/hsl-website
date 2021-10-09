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
    padding: 40px 0 20px;

    .el-row {
      width: var(--client-width);
      margin: 0 auto;

      .el-col {
        h2,
        h4 {
          margin-bottom: 48px;
        }
      }

      .or-img {
        display: flex;
        justify-content: flex-end;

        @media screen and (max-width: 768px) {
          justify-content: center;
        }

        img {
          width: 236px;
          height: 236px;
        }
      }
    }

    .copyright {
      margin-top: 40px;
      width: 100%;
      height: 40px;
      text-align: center;
      padding: 0px 10px;
    }
  }
}
</style>
