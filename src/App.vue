<template>
    <div id="app">
        <div id="nav">
            <AppHeader v-show="showHeader" :show-back="showBack" :title="title"></AppHeader>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import AppHeader from "./components/AppHeader";

    export default {
        name: 'app',
        provide() {
            return {
                app: this
            }
        },
        data() {
            return {
                title: '猫眼电影',
                city: '广州',
                showHeader: true,
                showTab: true,
                showBack: false,
                loginStatus: false,
                payOrders: []
            }
        },
        computed: {
            unread() {
                return this.payOrders.length
            }
        },
        methods: {
            updateTitle(title) {
                this.title = title
            },
            updatePayOrder(orderInfo) {
                this.payOrders.push(orderInfo)
            }
        },
        components: {
            AppHeader
        }
    }
</script>

