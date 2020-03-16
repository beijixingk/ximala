<template>
  <div
    style="padding:15px 15px 22px 15px;margin-bottom:10px;background-color:#fff"
    class="xm-list list-view thumbnail list-view--split _rp3"
  >
    <div class="list-view__header _rp3">
      <h2 class="list-view__title _rp3" style="font-size:18px;padding-bottom:10px">相似专辑</h2>
      <div class="tag-bar _MV">
        <a class="xm-tag _MV">
          言情
          <i class="xm-icon icon-album_btn_more"></i>
        </a>
        <a class="xm-tag _MV">
          古言
          <i class="xm-icon icon-album_btn_more"></i>
        </a>
      </div>
    </div>
    <ul class="list-view__body _rp3">
      <li
        style="width:30%"
        class="list-view__item border _rp3"
        v-for="related in relatedInfos"
        :key="related.id"
        @click="detailClick(related.id)"
      >
        <section class="album-wrap _Uf">
          <a class="album-container _Uf">
            <div style="padding-bottom:100%;height:0" class="album-cover rel _Uf">
              <img
                class="img-cover _Uf"
                :src="'//imagev2.xmcdn.com/'+related.albumInfo.cover+'!op_type=3&amp;columns=144&amp;rows=144&amp;magick=webp'"
              />
              <div class="album-cover-panel _Uf">
                <div class="abs info-bar ellipsis _Uf">
                  <svg width="20" height="20" class="icon">
                    <use xlink:href="#icon-play_ic_shound" />
                  </svg>
                  {{related.statCountInfo.playCount}}
                </div>
              </div>
            </div>
            <div class="album-desc _Uf">
              <p class="ellipsis-2 _Uf">{{related.albumInfo.title}}</p>
            </div>
          </a>
        </section>
      </li>

      <a class="hidden _MV more-item _MV">
        <div class="mark-wrap _MV">
          <div class="mark _MV">
            <i class="xm-icon icon-arrow-right"></i>
          </div>
          <p class="tc tit ellipsis _MV">更多有声书</p>
        </div>
      </a>
      <div class="layout-fix _MV"></div>
      <div class="layout-fix _MV"></div>
      <div class="layout-fix _MV"></div>
    </ul>
    <div class="list-view__footer _rp3">
      <div class="go-next__container tc _MV">
        <div class="go-next inlb _MV">
          <i class="xm-icon v-m _MV icon-btn_change" style="font-size:16px;height:100%"></i>
          <span class="v-m _MV">换一批</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "utils/http";
export default {
    data(){
        return{
            relatedInfos:"",
        }
    },
    props:['id'],
    async mounted() {
        console.log(this.id);
        
        let relatedResult = await get({
            url: `/ajax/m-revision/common/album/queryAlbumRelatedRecommendAlbums?albumId=${this.id}&page=1&pageSize=6`
        })
        this.relatedInfos = relatedResult.data.albumBriefDetailInfos;
    }
};
</script>

<style>
</style>