<template>
<div>
 <div class="tabs _k_" style="height: 35px; line-height: 35px;">
   <div class="scrollWrapper _k_" style="display: flex; align-items: center;">
       
    <a class="item  _k_" :class="{select : arry[index]===1 }"
        style=" margin: 0px 12px 0px 20px;"
  @click="handleClick(value.categoryId,index)"   v-for="(value,index) in dataNav" :key="index">{{value.categoryName}}</a>
          <p class="underline _k_" style="width: 18px; display: block; left: 25px;transform-origin: right center;"></p>
        </div>
        </div>
     <Searchitem 
     v-for="(items,index2) in searchItems" 
     :key="index2"
     :items="items"
     :index2="index2"
     ></Searchitem>
</div>
</template>
<script>
import Searchitem from 'components/mainPage/Searchitem'
import { get } from 'utils/http'
export default {
  data(){
    return{
      dataNav:{},
      dataid:'',
      searchItems:{},
      arry:[1,0,0,0,0,0,0,0,0],
      lefts:[25,92,173,248,308,367,428,494,575]
    }
  },
  props: {
    navs: {
      type: Object
    },
    index: Number,
    id:String
  },
  components:{
    Searchitem
  },
  methods:{
     async handleClick(id,index){
       console.log(0);
       
        this.dataid = id
        let resultItem = await get({
            url:`/searchData/hotWordBillboard/list/2.0?categoryId=${this.dataid}&size=24`
        })
        this.searchItems = resultItem.hotWordResultList

        for(var i=0;i<9;i++){
          this.arry[i]=0
        }
        this.arry[index]=1
        document.querySelector('.underline').style.left=this.lefts[index]+'px'
        
      },
      
  },
  async mounted(){
    let result = await get({
      url:'/ajax/hotWordBillboardCategory'
    })
    this.dataNav = result.category
    this.dataNav[0].categoryName='热门'
    let resultItem = await get({
        url:`/searchData/hotWordBillboard/list/2.0?categoryId=-1&size=24`
    })
    this.searchItems = resultItem.hotWordResultList
  }
}
    
</script>
<style lang="stylus" scoped>
  .select
    transform translateY(-2px) scale(1.28571)
</style>