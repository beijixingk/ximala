<template>
   <div class="cate-wrap _UQg">
      <a class="cate-box _UQg"  @click="handleClick(value.name)" v-for="(value,index) in cate"
     :key="index">
        <div class="cate-pic _UQg">
          <img
            :src="value.img"
            alt="糖葫芦"
            class="_UQg"
          />
        </div>
        <p class="cate-txt _UQg">{{value.name}}</p>
      </a>
    </div>
</template>
<script>
export default {
  props:['cate'],
  methods:{
    handleClick(name){
      if(name==='排行榜')
        this.$router.push('/top/free/all')
      if(name === '分类')
        this.$router.push('/category')
      console.log(0);
      
    }
  }
}
    
</script>
<style lang="stylus" scoped>

</style>