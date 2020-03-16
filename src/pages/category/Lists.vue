<template>
  <div class="list-container _Svyl">
    <li class="list-view__item border _rp3"
    v-for="value in firstPageCategoryAlbums"
    :key="value.id"
    >
      <a href="/youshengshu/24995314/">
        <div class="xm-album clearfix _8vVq">
          <div class="xm-album-cover rel cover cover _8vVq _9m" style="width: 70px; height: 70px;">
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
              class="xm-album__title txt-1 ellipsis _8vVq"
              style="color: rgb(51, 51, 51);"
            >{{value.albumInfo.title}}</h3>
            <p class="xm-album__subtitle c9 ellipsis _8vVq">{{value.albumInfo.customTitle}}</p>
            <div class="xm-album__info c9 _8vVq">
              <span class="count _8vVq">
                <i class="xm-icon icon-sound"></i>&nbsp; {{value.statCountInfo.trackCount}}
              </span>
              <span class="count _8vVq">
                <i class="xm-icon icon-data"></i>&nbsp; {{value.statCountInfo.trackCount}}
              </span>
            </div>
          </div>
        </div>
      </a>
    </li>
  </div>
</template>

<script>
import { get } from "utils/http";
export default {
    data(){
        return{
            firstPageCategoryAlbums:''
        }
    },
    props:['sort'],
    created(){
        console.log(this.sort+'_');
        
    },
    async mounted() {
        console.log(this.sort);
        
        let result = await get({
            url: `/ajax/m-revision/page/category/queryCategoryPage?categoryCode=youshengshu&pageSize=30&sort=${this.sort}`
        });
        this.firstPageCategoryAlbums =
      result.data.firstPageCategoryAlbums.albumBriefDetailInfos;
    }
};
</script>

<style>
</style>