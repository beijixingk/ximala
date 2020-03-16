<template>
  <div id="award">
    <div class="search_main">
      <section class="search page _mOo">
        <header class="searchWrapper _LhAj">
          <div class="formWrapper _LhAj">
            <!-- <form class="inputWrapper _LhAj"> -->
            <div class="inputWrapper _LhAj">
              <i class="xm-icon icon-searchlight _LhAj"></i>
              <input
                id="inputs"
                v-model="message"
                v-on:input="changes"
                class="input ellipsis _LhAj"
                type="search"
                @keyup.enter="visitedKey()"
              />
              <i @click="Clear" class="xm-icon icon-bg_delete _LhAj"></i>
            </div>
              
            <!-- </form> -->
          </div>
          <button class="cancel _LhAj" @click="buttonClick">取消</button>
          <p class="_LhAj"></p>
        </header>
        <section class="searchHistory _mOo" :class="{visible : message!=='' && (upData.length>0 || boData.length>0) ,hidden : !isHidden && (upData.length>0 || boData.length>0)}">
          <p class="title _mOo">
            <span class="_mOo">搜索历史</span>
            <i @click="clearvisitedKey" class="xm-icon icon-delete _mOo"></i>
          </p>
          <p class="historyList _mOo" >
            <a v-for="values in visKey"
            :key="values.id" @click="keyWordClick(values.keys)" data-item="相声" class="keyword ellipsis _I_P" 
            
            >{{values.keys}}</a>
          </p>
          <section class="billboard _1ac" style="margin: 0px -14px;"  >
            <Nav></Nav>
            <a class="tipMask _n9rL">
              <p class="content _n9rL">打开喜马拉雅App</p>
              <p class="content _n9rL">可查看完整热搜榜</p>
            </a>
          </section>
        </section>
        <section class="searchMatch _mOo" :class="{hidden : isHidden || (searchDatas.albumResultList===[] && searchDatas.queryResultList===[])}">
          <div class="albumResult _mOo"
          v-for="value1 in searchDatas.albumResultList"
          :key="value1.id"
          >
            <div class="albumInfo _mOo">
              <img
                class="albumImg _mOo"
                :src="value1.imgPath"
              />
              <div class="albumDescWrapper _mOo">
                <p class="albumTitle highlightKeyword ellipsis _mOo">{{value1.keyword}}</p>
                <p class="albumDesc _mOo">
                  <span class="category _mOo">{{value1.category}}</span>
                  <i class="xm-icon icon-data _mOo"></i>
                  <span class="play _mOo">{{value1.play}}</span>
                  <i class="xm-icon icon-sound _mOo"></i>
                  <span class="tracks _mOo">{{value1.tracks}}集</span>
                </p>
              </div>
            </div>
            <span class="albumPlay _mOo">
              <i class="xm-icon icon-w_play _mOo"></i>
            </span>
          </div>
          <p v-for="value2 in searchDatas.queryResultList" :key="value2.id" class="queryResult highlightKeyword _mOo"
          @click="keyWordClick(value2.keyword)"
          
          >{{value2.keyword}}</p>
         
        </section>
      </section>

      <Xmfooter></Xmfooter>
    </div>
  </div>
</template>
<script>
import Xmfooter from "components/mainPage/Footer";
import Nav from "components/mainPage/Nav";
import Searchitem from "components/mainPage/Searchitem";

import store from 'store'
import _ from "lodash";
import BScroll from "better-scroll";
import { get } from "utils/http";
import { log } from "util";
import { async } from "q";

export default {
  data() {
    return {
      dataNav: "",
      isSelect: [],
      dataId: "",
      id: "",
      message: "",
      isHidden:true,
      searchDatas:'',
      count:0,
      visKey:[],
      upData:[],
      boData:[]
    };
  },
  methods: {
    created(){
      this.visKey = store.get('visitedKeys')
    },
    handleClick(id) {
      this.dataId = id;
    },
    buttonClick() {
      this.$router.push("index/home/recommend");
    },
    keyWordClick(key){
      // console.log(key);
      this.$router.push(`/searchdetail/searchall/?keyword=${key}`)
    },
    changes: _.debounce(async function() {
      if(this.message!=='')
        this.isHidden = false
      else
        this.isHidden = true
      // console.log(this.message);
      let result = await get({
        url: `/ajax/revision/suggest?kw=${this.message}&paidFilter=false&scope=all`
      })
      this.searchDatas = result.data.result
      this.upData = result.data.result.albumResultList
      this.boData = result.data.result.queryResultList
    }, 200),
    async visitedKey(){
      console.log(this.message);
      this.count++
        let msgs = store.get('visitedKeys') || []
        let keys = this.message
        // let id = this.count
        msgs.push({
          // id,
          keys
        })
        store.set('visitedKeys',_.uniqBy(msgs, (value) => {
          return value.keys !== keys
        }))
        
      console.log(this.count);
      
     await this.aa()
      
    },
    clearvisitedKey(){
      store.remove('visitedKeys')
      this.$router.go(0);
    },
    aa(){
      this.$router.push(`/searchdetail/searchall/?keyword=${this.message}`)
    },
    Clear(){
      this.message = ''
      this.isHidden = true
    }
  },
  components: {
    Xmfooter,
    Nav,
    Searchitem
  },
  mounted(){
    this.visKey = store.get('visitedKeys')
    console.log(store.get('visitedKeys'));
    
  }
};
</script>
<style lang="stylus" scoped>
.title._mOo {
  display: flex;
  justify-content: space-between !importment;
  padding: 10px 0 5px !importment;
}

#award {
  width: auto;
  height: 600px !important;
  overflow-y: scroll;
}
.visible
  visibility:hidden
</style>