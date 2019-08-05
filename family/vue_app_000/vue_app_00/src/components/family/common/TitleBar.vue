<template>
    <div class="page_head">
        <span>{{leftTitle}}</span>

    </div>
</template>

<script>
export default {
    props:{
        leftTitle:{default:""}
    }
}
</script>

<style scoped>
    div.page_head{
        width: 100%;
        height: 40px;
        background-color: lightblue;
        font-size: 20px;
        align-items: center;
        line-height: 40px;
        display: flex;
        justify-content: space-around;
    }
</style>
