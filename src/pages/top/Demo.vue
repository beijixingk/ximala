<template>
  <div class="scrollWrapper" style="height:600px;width:100%;overflow-y:hidden">
    <div class="content _ld" style="width:100%;box-sizing:border-box">
      <section class="listView _ld" style="overflow-x:hidden;overflow-y:auto;background:#fff">
        <ul class="_ld">
          <li class="listItem _3Jg"
          v-for="(value,index) in freeList"
          :key="value.id"
          @click="handleClick(value.id)"
          >
            <span class="ranking _3Jg">{{index+1}}</span>
            <div class="albumWrapper _3Jg">
              <a>
                <div class="xm-album clearfix _8vVq">
                  <div
                    style="width:70px;height:70px"
                    class="xm-album-cover rel cover cover _8vVq _9m"
                  >
                    <img
                      class="cover-image _8vVq"
                      :alt="value.albumInfo.title"
                      :src="'//imagev2.xmcdn.com/'+value.albumInfo.cover+'!op_type=3&amp;columns=144&amp;rows=144&amp;magick=webp'"
                    />
                    <div class="xm-album-cover__wrap _9m">
                      <div class="mask _9m"></div>
                      <div class="play-btn _9m"></div>
                    </div>
                  </div>
                  <div class="content _8vVq">
                    <h3
                      class="xm-album__title txt-1 ellipsis-2 _8vVq"
                      style="color:#40404c;font-family:PingFangSC-Medium;font-weight:500"
                    >{{value.albumInfo.title}}</h3>
                    <p
                      class="xm-album__subtitle c9 ellipsis _8vVq"
                      style="margin-bottom:10px"
                    >{{value.albumInfo.salePoint}}</p>
                    <div class="xm-album__info c9 _8vVq">
                      <span class="count _8vVq">
                        <i class="xm-icon icon-ic_play"></i>&nbsp;
                        <!-- -->
                        {{value.statCountInfo.playCount}}
                      </span>
                      <span class="count _8vVq">
                        <i class="xm-icon icon-sound"></i>&nbsp;
                        <!-- -->
                        {{value.statCountInfo.trackCount}}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { get } from 'utils/http'
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            freeList:'',
            type:'',
            types:''
        }
    },
    methods:{
        handleClick(id){
            this.$router.push(`/detail/${id}`)
            this.$router.go(0)
        }
    },
    async mounted(){
        let req = /[^\/](\w+)/g;
        this.type = this.$route.path.match(req)[1];
        this.types = this.$route.path.match(req)[2];

        let result = await get({
            url:`/ajax/m-revision/page/rank/queryRank?clusterCode=${this.type}&categoryCode=${this.types}`
        })
        this.freeList = result.data.rankModuleInfoList
        new BScroll('.scrollWrapper',{
            click:true
        })
        
    }

};
</script>

<style lang="stylus" scoped>
    .scrollWrapper
        width calc(100%-85px) !important
</style>