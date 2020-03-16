<template>
  <section class="listView _ld" style="background: rgb(255, 255, 255);">
    <ul class="_ld">
      <li class="resultItem _PLR"
      v-for="(album,index2) in albumView"
      :key="index2"
      >
        <div class="itemWrapper _PLR">
          <a>
            <div class="xm-album clearfix _8vVq">
              <div
                class="xm-album-cover rel cover cover _8vVq _9m"
                style="width: 70px; height: 70px;"
              >
                <img
                  class="cover-image _8vVq"
                  :alt="album.albumInfo.title"
                  :src="album.albumInfo.cover_path"
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
                >{{album.albumInfo.title}}</h3>
                <p class="xm-album__subtitle c9 ellipsis _8vVq">{{album.albumInfo.recommend_reason}}</p>
                <div class="xm-album__info c9 _8vVq">
                  <span class="user-channel ellipsis-1 _8vVq">
                    <i class="xm-icon icon-user"></i>&nbsp; {{album.albumInfo.nickname}}
                  </span>
                  <span class="count _8vVq">
                    <i class="xm-icon icon-sound"></i>&nbsp; {{album.albumInfo.tracks}}
                  </span>
                  <span class="count _8vVq">
                    <i class="xm-icon icon-data"></i>&nbsp; {{album.albumInfo.play}}
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { get } from "utils/http";
import BScroll from "better-scroll";
import { async } from "q";
export default {
  data() {
    return {
      userView: "",
      albumView: "",
      trackView: "",
      specialView: "",
      others: [],
      keyword: "",
      pageNo: 1,
      total: 0,
      pageSize: 0
    };
  },
  props: ["bScroll"],
  async mounted() {
    let req = /[^\/](\w+)/g;
    this.types = this.$route.path.match(req)[1];

    let message = this.$route.query.keyword;
    this.keyword = this.$route.query.keyword;
    let result = await get({
      url: `/ajax/m-revision/page/search?kw=${message}&core=album&page=1&rows=10`
    });
    // this.userView = result.data.userViews.users;
    this.albumView = result.data.albumViews.albums;
    // this.trackView = result.data.trackViews.tracks;
    // this.specialView = result.data.specialViews.specials;
    this.total = result.data.albumViews.total;
    this.pageSize = result.data.albumViews.pageSize;
    

    this.bScroll.on("pullingUp", async () => {
      console.log(0);
      console.log(this.pageNo, this.pageSize, this.total);
      if (this.pageNo < Math.ceil(this.total / this.pageSize)) {
        this.pageNo++;
        let result = await get({
          url: `/ajax/m-revision/page/search?kw=${message}&core=album&page=${this.pageNo}&rows=10`
        });
        this.$options.getData.call(this, result);

        await this.$nextTick();
        this.bScroll.refresh();
      }
      this.bScroll.finishPullUp();
    });
  },

  getData(result) {
    this.albumView = [...this.albumView, ...result.data.albumViews.albums];
  }
};
</script>

<style lang="stylus" scoped>
  .listView
    padding-top 120px
</style>