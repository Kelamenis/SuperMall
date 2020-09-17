<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="middle"><slot name="middle"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar' 
}
</script>

<style  scoped>
    .nav-bar{
        display: flex;
        height: 44px;
         /* 因为没有内容所以单独使用line-height是不能撑起来的 */
        line-height: 44px;
        text-align: center;
        /* 设置导航条的阴影 */
        box-shadow: 0 1px 1px rgba(100, 100, 100,.1);
    }

    .left, .right {
        width: 60px;
        /* 背景颜色用于测试 */
        /* background-color: red; */
    }

    .middle {
        flex: 1;
        /* 背景颜色用于测试 */
        /* background-color: blue; */
    }
</style>