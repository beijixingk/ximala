<template>
<div class="top_main">
    <div class="top_mainn">
        <van-sidebar v-model="activeKey">
            <van-sidebar-item title="总榜" to="/top/rise/all" />
            <van-sidebar-item title="新品" to="/top/rise/all1"/>
            <van-sidebar-item title="有声书" to="/top/rise/youshengshu"/>
        </van-sidebar>
    </div>
  <router-view></router-view>
</div>
  
</template>

<script>
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'vant';
import 'vant/lib/index.css';
import BScroll from 'better-scroll'

Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  async mounted(){
      new BScroll('.top_main',{
          click:true
      })
  }

}
</script>

<style lang="stylus" scoped>
    .top_main
        max-height 100%
        display flex
        flex-direction row
        flex-wrap nowrap
    .top_mainn
        height 100%
    .van-sidebar
      width 70.24px
    .van-sidebar-item
      background-color #f3f4f5
    .van-sidebar-item--select
      background-color #fff
</style>