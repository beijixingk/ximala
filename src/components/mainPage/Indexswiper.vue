<template>
  <div class="swiper">
    <swiper :options="swiperOption" class="banner">
        <swiper-slide class="item" v-for="(value,index) in tabswiper"
        :key="index"
        >
            <img :src="value.adFocusPictureDetail.cover" alt="">
        </swiper-slide>
      
    </swiper>
  </div>
</template>
<script>
import Vue from "vue";
import { get } from "utils/http";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

export default {
  name: "Indexswiper",
  data() {
    return {
      swiperOption: {
        autoplay:{
            delay: 2000,
            disableOnInteraction: false,
        },//自动滑动
        // speed:500,//自动滑动开始到结束的时间（单位ms）
        // loop:true,//开启循环
        loopedSlides:3,//在loop模式下使用slidesPerview:'auto',还需使用该参数设置所要用到的loop个数。
        slidesPerView:'auto',//设置slider容器能够同时显示的slides数量(carousel模式)。另外，支持'auto'值，会根据容器container的宽度调整slides数目。
        // effect:'coverflow',//可以实现3D效果的轮播,
        centeredSlides:true,//设定为true时，active slide会居中，而不是默认状态下的居左。
        spaceBetween:18,
        
      },
      
    }
  },
  props:[
      'tabswiper'
  ],

  mounted(){
    //   for(var i=0;i<this.tabData.length;i++){
    //       this.imgs[i]=this.tabData[i].adFocusPictureDetail.cover
    //       console.log(this.imgs[i]);
          
    //   }
    //   if(this.tabData.length<3)
    //     this.imgs[2]=this.tabData[0].adFocusPictureDetail.cover

      console.log(this.tabswiper.length);
  }
}
</script>
<style lang="stylus" scoped>
    .swiper{
        width:100%;
        height:126px;
    }
    .banner {
        height: 100%;
    }
    .banner .swiper-slide {
        width: 293px;
        height: 116px;
        
    }
    .banner .swiper-slide-next,.banner .swiper-slide-prev{
        top:3px;
    }
    .swiper-slide img{
        width: 100%;
        height:100%
        border-radius:10px;
    }
    .banner .swiper-slide-active{
        width: 293px;
        height: 126px;
        top:0;
    }
    .banner .swiper-slide-active img{
        width: 100%;
        height:100%
    }
    .banner.swiper-container-horizontal>.swiper-pagination-bullets,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
        bottom: .24rem;
    }
    
    .banner.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 0 .06rem;
    }
    
    .banner .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        opacity: 1;
        background: #888888;
    }
    
    .banner .swiper-pagination-bullet-active {
        background: #C71045;
    }

</style>