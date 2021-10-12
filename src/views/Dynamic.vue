<template>
  <div class="dynamic">
    <div class="header">
      <h2>行业动态</h2>
      <div class="line-div"></div>
    </div>

    <div class="post">
      <el-row v-for="(item, index) in dynamic" :key="index">
        <el-col
          :xs="24"
          :sm="10"
          :md="{ span: 6, offset: 4 }"
          :lg="{ span: 6, offset: 4 }"
          :xl="{ span: 6, offset: 4 }"
        >
          <img :src="item.picture" />
        </el-col>
        <el-col
          :xs="24"
          :sm="14"
          :md="{ span: 10, offset: 0 }"
          :lg="{ span: 10, offset: 0 }"
          :xl="{ span: 10, offset: 0 }"
        >
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
          <span>{{ item.time }}</span>
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
    const dynamic = reactive([
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e71e6e8e74f82.09843614.jpg",
        title: "极具就业前景的10大职校热门专业",
        content:
          "哪些职校专业最具就业前景？根据各大人才网站招聘、各学校就业学生情况等因素，盘点下近几年就业前景比较好的热门专业供大家参考！",
        time: "2020-03-17",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e71e704d29cb1.62033044.jpg",
        title: "教育最大的骗局是什么，就是“孩子，你只要快乐就好”",
        content: "你不吃学习的苦，将来就要吃生活的苦！“孩子不喜欢就别逼他。”",
        time: "2020-03-17",
      },
      {
        picture:
          "https://xibaiimg.gz.bcebos.com/hongshulinjy/5e71e72e2b07d6.87738941.jpg",
        title: "职校、职高、技校、中专、大专的解读及区别",
        content:
          "职校、职高、技校、中专、大专之间到底有什么区别呢？很多同学及家长经常会把几者弄混......",
        time: "2020-03-17",
      },
    ])
    return {
      dynamic,
    }
  },
})
</script>

<style lang="less" scoped>
.dynamic {
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
      margin-bottom: 60px;

      .el-col {
        min-height: 200px;
        background-color: #f2f2f2;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .el-col:nth-child(2) {
        padding: 20px 24px;
        position: relative;

        h4 {
          margin-bottom: 30px;
        }

        span {
          position: absolute;
          bottom: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 32px);
    
    .post {
      .el-row {
        .el-col:nth-child(2) {
          padding: 20px 10px;

          span {
            position: relative;
            bottom: -20px;
          }
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
