<template>
    <div class="vue1">
    	<p>{{pages}}</p>
    	<router-link to="/home">点击返回到首页</router-link>
    </div>
</template>
<script>
export default {
    name:'vue1',
    data (){
        return {
        	pages:"我是页面1"
        }
    },
}
</script>
<style lang="scss" scoped>

</style>