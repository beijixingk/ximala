<template>
    <a   class="hotWordWrapper _1ac" :class="{blur:(index2 > 19)} "
        @click="keyWordClick(items.word)"
        >
        <span class="rank _1ac">{{index2+1}}</span>
        <span class="hotWord _1ac">{{items.word}}</span>
        <i class="xm-icon iconRank _1ac" 
        :class="{
            rise: items.shift===1,
            'icon-rise': items.shift===1,
            fall:items.shift===-1,
            'icon-fall':items.shift===-1,
            same:items.shift===0,
            'icon-same':items.shift===0,
        }"></i>
    </a>
</template>
<script>

import { get } from "utils/http";
export default {
    props:['items','index2'],
    methods:{
        keyWordClick(key){
            // console.log(key);
            this.$router.push(`/searchdetail/searchall/?keyword=${key}`)
        }
    }
}

</script>