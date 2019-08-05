<template>
    <div>
   <img :src="focused?selectedImg:normalImg" alt="" class="imgstyle"/>
  </div>
</template>

<script>
export default {
    props:{
        normalImg:{default:""},
        selectedImg:{defaul:""},
        focused:false,
    }
}
</script>

<style scoped>
    .imgstyle{
        width:30px;
        height: 30px;
    }
</style>


