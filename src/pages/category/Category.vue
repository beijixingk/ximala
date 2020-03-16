<template>
  <div id="award">
      <Header></Header>
    <div class="page">
      
      <div class="ca_content">
          
        <div class="cate_left">
          <div class="cate_left_main">
            <van-sidebar v-model="activeKey">
              <van-sidebar-item 
              :title="value1.category.displayName"
              v-for="(value1) in queryCategories"
              :key="value1.id"
               @click="handleClick(value1.category.displayName)" />
        
            </van-sidebar>
          </div>
        </div>
        <div class="cate-show _FRB">
          <div class="cl-wrap _FRB">
            <div class="c-right-classify _FRB" 
            data-index="0"
            v-for="(value1) in queryCategories"
            :key="value1.id"
            >
              <div class="c-title clearfix _FRB">
                <a class="ca-title _FRB" 
                  :id="value1.category.displayName" :ref="value1.category.displayName"
                  @click="otherClick(value1.category.displayName)"
                >
                  <p class="title  fl _FRB" :id="value1.category.displayName+'_'">
                    {{value1.category.displayName}}
                    <span class="_FRB">
                      /共
                      <!-- -->
                      {{value1.albumCount}}
                      <!-- -->
                      张专辑
                    </span>
                  </p>
                  <p class="more _FRB"></p>
                </a>
              </div>
              <div class="class-data _FRB">
                <a 
                v-for="value2 in value1.category.subCategories"
                :key="value2.subCategoryId"
                 >
                  <span  class="_FRB">{{value2.displayValue}}</span>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "components/mainPage/Header";
import BScroll from "better-scroll";
import { get } from 'utils/http'
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";
Vue.use(Sidebar);
Vue.use(SidebarItem);


export default {
  data() {
    return {
      activeKey: 0,
      queryCategories:'',
      bScroll:''
    };
  },
  components: {
    Header
  },
  methods:{
    handleClick(id){
      let target = document.querySelector('#'+id)
      this.bScroll.scrollToElement(target)
      if(document.querySelector('.active') !==null)
        document.querySelector('.active').setAttribute('class','title  fl _FRB')
      document.querySelector('#'+id+'_').setAttribute('class','active title  fl _FRB')
    },
    otherClick(id){
      if(id==='有声书'){
        this.$router.push('/demos')
      }
    }
  },
  async mounted() {
     new BScroll(".cate_left", {
      click: true
    });
    this.bScroll = new BScroll(".cate-show", {
      click: true
    });

    let result = await get({
        url:'/ajax/m-revision/page/category/queryCategories'
    })
    this.queryCategories = result.data
   await document.querySelector('#有声书_').setAttribute('class','active title  fl _FRB')
   
  }
};
</script>

<style lang="stylus" scoped>
#award {
  height: 100%;
  overflow: hidden;
}
.xm-header__search ._9FPi
  height 100%
.page {
  height: 100%;

}

.ca_content {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.cate-show._FRB {
  margin-left: 0 !important;
  width: 100%;
  max-height: 100%;
    margin-bottom 50px !important;
  overflow: hidden !important;
}

.cate_left {
  width: 90px;
  max-height: 100%;
    margin-bottom 50px
}

.cate_left_main {
  width: 100%;
  height: auto;
}



.cl-wrap {
  width: 100%;
  height: auto;
}
</style>