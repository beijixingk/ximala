<template>
  <div id="award">
    <div class="category-sort page _AJm">
      <div class="category-sort-fixed fixed-download-bar _AJm">
        <header class="xm-header__search _9FPi">
          <a class="logo-icon cate _9FPi" href="/category">
            <i class="xm-icon cate-arrow _9FPi icon-arrow-left"></i>
            <span class="cate-title _9FPi">有声书</span>
          </a>
          <a href="/search" class="searchInput _9FPi">
            <header class="searchWrapper _LhAj">
              <div class="formWrapper _LhAj">
                <form class="inputWrapper _LhAj">
                  <i class="xm-icon icon-searchlight _LhAj"></i>
                  <p class="placeholder ellipsis _LhAj">搜索</p>
                </form>
              </div>
              <p class="_LhAj"></p>
            </header>
          </a>
          <a class="eG0ta _9FPi" to="iting://open">打开APP</a>
        </header>
      </div>
      <div class="sort-page-fixed fixed-tab-container _AJm">
        <div class="tab-container pages _qldL">
          <div class="auto-container _qldL">
            <a class="tab-item active _qldL">
              全部
              <span class="red-line _qldL"></span>
            </a>
            <a class="tab-item _qldL" v-for="sub in subCategories" :key="sub.subCategoryId">
              {{sub.displayValue}}
              <span class="red-line _qldL"></span>
            </a>
          </div>
          <i @click="hiddenClick" class="xm-icon arrow-btn _qldL icon-arrow-down"></i>
        </div>
      </div>
      <div class="cate-container pages _p0t" :class="{ hidden: isHidden}">
        <div class="header _p0t">
          <div class="header-left _p0t">请选择分类</div>
          <i @click="hiddenClick" class="xm-icon arrow-up _p0t icon-arrow-up"></i>
        </div>
        <div class="categories _p0t">
          <a class="categories-item _p0t">全部</a>
          <a
            class="categories-item _p0t"
            v-for="sub in subCategories"
            :key="sub.subCategoryId"
          >{{sub.displayValue}}</a>
        </div>
      </div>
      <div class="dropdown-menu _AJm" :class="{ hidden: isHidden2}">
        <div class="menu-list _AJm">
          <div class="sort-container _uft">
            <div class="sort-page-fixed fixed-subtab-container _uft">
              <div class="menu-row _cu">
                <a  @click="changeClick(0)" class="row-item active _cu">综合排序</a>
                <a  @click="changeClick(2)" class="row-item _cu">最多播放</a>
                <a  @click="changeClick(1)" class="row-item _cu">最近更新</a>
              </div>
            </div>
            <div class="category-select _uft">
              <i class="xm-icon icon-abc_btn_sift"></i>
              <span class="_uft" @click="hiddenClick2">收起</span>
            </div>
          </div>
          <div class="menu-row _cu" v-for="cate in categoryMetaDatas" :key="cate.id">
            <a class="row-item active _cu">{{cate.displayName}}</a>
            <a
              class="row-item _cu"
              v-for="cates in cate.metaValues"
              :key="cates.id"
            >{{cates.displayName}}</a>
          </div>
        </div>
        <div class="dropdown-menu-mask _AJm"></div>
      </div>
      <div class="select-bar-fixed hide-fixed-tab _uft">
        <span class="_uft">综合排序</span>
        <i class="xm-icon select-bar-icon _uft icon-arrow-down"></i>
      </div>
      <div class="select-bar-fixed hide-fixed-tab _uft">
        <span class="_uft">综合排序</span>
        <i class="xm-icon select-bar-icon _uft icon-arrow-down"></i>
      </div>

      <div class="main_pages">
        <div class="scrollPage">
          <div class="sort-container _uft">
            <div class="sort-page-fixed fixed-subtab-container _uft">
              <div class="menu-row _cu">
                <a  @click="changeClick(0)" class="row-item active _cu">综合排序</a>
                <a  @click="changeClick(2)" class="row-item _cu">最多播放</a>
                <a  @click="changeClick(1)" class="row-item _cu">最近更新</a>
              </div>
            </div>
            <div class="category-select _uft">
              <i class="xm-icon icon-abc_btn_sift"></i>
              <span class="_uft" @click="hiddenClick2">筛选</span>
            </div>
          </div>
          <Lists :sort="sort"></Lists>
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "utils/http";
import BScroll from "better-scroll";
import Footer from "components/mainPage/Footer";
import Lists from 'pages/category/Lists'
export default {
  data() {
    return {
      isHidden: true,
      isHidden2: true,
      subCategories: "",
      categoryMetaDatas: "",
      firstPageCategoryAlbums: "",
      sort:0
    };
  },
  components: {
    Footer,
    Lists
  },
  methods: {
    hiddenClick() {
      console.log(0);

      this.isHidden = !this.isHidden;
      console.log(this.isHidden);
    },
    hiddenClick2() {
      console.log(0);

      this.isHidden2 = !this.isHidden2;
      console.log(this.isHidden2);
    },
    changeClick(sort){
      this.sort = sort
      console.log(this.sort);
      
    }
  },
  async mounted() {
    let result = await get({
      url: `/ajax/m-revision/page/category/queryCategoryPage?categoryCode=youshengshu&pageSize=30&sort=${this.sort}`
    });

    this.subCategories = result.data.subCategories;
    this.categoryMetaDatas = result.data.categoryMetaDatas;
    this.firstPageCategoryAlbums =
      result.data.firstPageCategoryAlbums.albumBriefDetailInfos;

    let bScroll = new BScroll(".main_pages", {
      click: true
    });
    bScroll.on("scroll", () => {
      console.log(bScroll.y);
    });
  }
};
</script>

<style lang="stylus" scoped>
.main_pages {
  max-height: 600px;
  width: 100%;
}

.scrollPage {
  height: auto;
  width: 100%;
}
</style>