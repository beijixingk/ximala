<template>
   <mainpage :name="nm"></mainpage>
</template>
<script>
import mainpage from 'pages/nav/You'
    export default {
      data(){
        return{
          nm:this.$route.name
        }
      },
      mounted(){
        this.nm=this.$route.name
        console.log(this.nm);
        
      },
      components:{
        mainpage
      }
    }
</script>
<style lang="stylus" scoped>

</style>