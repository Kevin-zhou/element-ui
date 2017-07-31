<template>
    <div id="app">
        <h3> {{msg}}</h3>
        <hr/>
        <div class="left">
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <router-link to="/home">
                            <el-menu-item index="1">
                                <i class="el-icon-menu"></i>
                                首页
                            </el-menu-item>
                        </router-link>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-message"></i>会员管理</template>
                            <router-link to="/news">
                                <el-menu-item index="2-1">会员反馈</el-menu-item>
                            </router-link>
                            <router-link to="/login">
                                <el-menu-item index="2-2">会员列表</el-menu-item>
                            </router-link>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-message"></i>用户管理</template>
                            <router-link to="/reg">
                                <el-menu-item index="3-1">用户列表</el-menu-item>
                            </router-link>
                        </el-submenu>
                        <router-link to="/user">
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>分销商管理</el-menu-item>
                        </router-link>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="right">
            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <router-view></router-view>
            </transition>
        </div>

    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            msg: '后台管理系统'
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="scss">
h3 {
    text-align: center
}

a {
    color: #48576A;
    text-decoration: none;
}

#app div {}

.left {
    float: left;
    width: 20%; // background: red;
}

.right {
    float: left;
    width: 79%; // background: blue;
}
</style>
