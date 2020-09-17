<template>
  <div class="tab-bar-item" @click="itemClick">
      <!-- 设置图片，当文字被点击时进行替换 
            当前没有图片，只能不显示
      -->
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      
      <!-- 同理，文字也需要跟随着改变 -->
      <div :class="{active:isActive}">
          <slot name="item-text"></slot>
      </div>
  </div>
  
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        }
    },
    methods:{
        itemClick() {
            this.$router.replace(this.path);
            this.isActive = true;
        }
    }
  }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  
  .tab-bar-item img{
      width: 24px;
      height: 24px;
  }

  .active{
      color: red;
  }
</style>
