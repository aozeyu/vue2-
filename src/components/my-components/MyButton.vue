<template>
<div class="my-button">
    <span v-if="type === 'buy'" class="btn buy">
        <slot>购票</slot>
    </span>
</div>
</template>

<script>
    export default {
        name: "MyButton"
    }
</script>

<style scoped>

</style>
