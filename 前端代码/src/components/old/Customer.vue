<template>
<el-container style="height: 900px; border: 0px solid #409EFF">
  <el-aside width="250px"  style="height: 900px; background-color: rgb(239, 241, 246)">
    <el-menu :default-openeds="['1', '3']" background-color="rgba(9, 13, 45, 0.8)" text-color="rgba(241, 242, 248, 0.8)">
      <el-submenu index="1">
        <template #title><i class="el-icon-message"></i>机会管理</template>
        <el-menu-item-group>
          <template #title>机会查询</template>
          <el-menu-item index="1-1" @click="showit">我的机会</el-menu-item>
          <el-menu-item index="1-2">下属机会</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="机会新增">
          <el-menu-item index="1-3" @click="createOpp">创建机会</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>机会修改</template>
          <el-menu-item index="1-4-1">我的机会</el-menu-item>
          <el-menu-item index="1-4-2">下属机会</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template #title><i class="el-icon-menu"></i>客户管理</template>
        <el-menu-item-group>
          <template #title>我的客户</template>
          <el-menu-item index="2-1">查看我的</el-menu-item>
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

    <el-main>
      <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
        <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
        <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
        <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
        <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      align="right">
      <template #header>
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template #default="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
  export default {
      data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '李小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '张小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '刘小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    methods:{
      home(){
        this.$router.replace('/')
      },
      backlog(){
        this.$router.replace('/login')
      },
        loginit(){
 
          this.$router.replace('/login')
        },
      
        
        showit(){
          this.$router.replace('/show')
        },
        createOpp(){
          this.$router.replace('/create')
        },
         handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
