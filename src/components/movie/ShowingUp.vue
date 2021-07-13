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

<style scoped>

</style>
