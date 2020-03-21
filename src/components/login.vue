<template>
    <div class="hello">
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1"/>
        </van-dropdown-menu>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                value1: 0,
                value2: 'a',
                option1: [
                    { text: '全部商品', value: 0 },
                    { text: '新款商品', value: 1 },
                    { text: '活动商品', value: 2 }
                ],
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
