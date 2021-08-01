<template>
<el-container style="height: 1200px; border: 0px solid #409EFF">
  <el-aside width="250px"  style="height: 1200px; background-color: rgba(9, 13, 45, 0.8)">
    <el-menu :default-openeds="['1', '3']" background-color="rgba(9, 13, 45, 0.8)" text-color="rgba(241, 242, 248, 0.8)">

      <el-submenu index="1">
        <template #title><i class="el-icon-message"></i>机会管理</template>
        <el-menu-item-group>
          <template #title>机会查询</template>
          <el-menu-item index="1-1" @click="showit">我的机会</el-menu-item>
          <el-menu-item index="1-2" @click="showdepop">下属机会</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="机会新增">
          <el-menu-item index="1-3" @click="createOpp">创建机会</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>机会修改</template>
          <el-menu-item index="1-4-1">我的机会</el-menu-item>
          <el-menu-item index="1-4-2" @click="track">机会跟踪</el-menu-item>
        </el-submenu>
                <el-submenu index="1-5">
          <template #title>机会审批</template>
          <el-menu-item index="1-5-1">全部机会</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template #title><i class="el-icon-menu"></i>客户管理</template>
        <el-menu-item-group>
          <template #title>我的客户</template>
          <el-menu-item index="2-1" @click="mycus">查看我的</el-menu-item>
          <el-menu-item index="2-2">查看下属</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title><i class="el-icon-setting"></i>日报管理</template>
        <el-menu-item-group>
          <template #title>日报管理</template>
          <el-menu-item index="3-1">编写日报</el-menu-item>
          <el-menu-item index="3-2">查询日报</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    
    <el-header  height="90px" >     
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">NPMS项目管理系统</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/show' }"><a href="/">活动管理</a></el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/create' }">活动列表</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/login' }">活动详情</el-breadcrumb-item>
</el-breadcrumb>


<span style="text-align: left; font-size:50px">NPMS项目管理系统</span>
      <el-dropdown>
        <i class="el-icon-setting"  style="margin-right: 25px;font-size:20px "  ></i>
        <template #dropdown>
          <el-dropdown-menu>
              <el-dropdown-item  @click="home">个人中心</el-dropdown-item>
              <el-dropdown-item @click="backlog">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>

    <el-main style="solid #DCDFE6">
      <div>
      <el-avatar size="200" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <span style="text-align: right; font-size:25px">欢迎使用系统，王小虎</span>
    <div class="block">
    <span class="demonstration"></span>
    <el-carousel trigger="click" height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
  export default {
    methods:{
      showdepop(){
          this.$router.replace('/depopp')
      },
      home(){
        this.$router.replace('/')
      },
      backlog(){
        this.$router.replace('/login')
      },
        loginit(){
 
          this.$router.replace('/login')
        },
      mycus(){
        this.$router.replace('/mycus')
      },
        showit(){
          this.$router.replace('/show')
        },
        createOpp(){
          this.$router.replace('/create')
        },
        track(){
          this.$router.replace('/track')
      },
      },
      
  };
</script>

<style>
.el-header {
    background-color: #6c95ca;
    color: #F2F6FC;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
 
</style>
