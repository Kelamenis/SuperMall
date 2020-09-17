<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar',
  }
</script>

<style>
  /* 设置tabbar的样式 */
  #tab-bar{

    display: flex;
    background-color: #f6f6f6;

    /* 设置标签的位置 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 设置标签的阴影 */
    box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.2);
  }
</style>
