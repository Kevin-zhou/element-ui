<template>
    <div class="user">
        我是分销商管理页
        <hr/>
        <router-link to="/user/login">会员列表</router-link>
        <router-link to="/user/reg">用户列表</router-link>
        <router-view></router-view>
        <h3>{{msg}}</h3>
        <button @click="show">去会员列表</button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                msg:"hello"
            }
        },
        methods:{
            show(){
                this.$router.replace({path:"/user/login"})
            }
        }
    }
</script>
<style>

</style>
