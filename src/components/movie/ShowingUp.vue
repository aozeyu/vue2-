<template>
<div class="showing-up">
    <div class="btn" @click="lazyLoad">
        <p>查看更多</p>
    </div>
</div>
</template>

<script>
    export default {
        name: "ShowingUp",
        props:['currComponent'],
        data(){
            return {
                loading:false,
                movieIds:[],
                movieList:[]
            }
        }
    }
</script>

<style lang="less" scoped>
.showing-up{
    font-size: 0px;
}
.btn{
    height: 1.7rem;
    text-align: center;
    background: #fff;
    p{
        padding: 10px 0;
        font-size: .24rem;
        color: rgb(107,107,107);
    }
}
</style>
