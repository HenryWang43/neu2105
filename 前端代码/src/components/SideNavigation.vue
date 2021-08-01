<template>
  <div id="sideNavigation">
    <el-menu router>
      <el-submenu index="1">
        <template #title>客户管理</template>
        <el-menu-item index="managecus">客户管理</el-menu-item>
        <el-menu-item index="transfercus">客户交接</el-menu-item>
		<el-menu-item index="searchTransferCus">客户交接查询</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template #title>
          <span>机会管理</span>
        </template>
        <el-menu-item index="show">机会维护</el-menu-item>
        <el-menu-item index="edit">机会跟踪</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title>日报管理</template>
        <el-menu-item index="salesRecord">编写日报</el-menu-item>
        <el-menu-item index="searchSalesRecord">查询日报</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template #title>
          <span>机会审批</span>
        </template>
        <el-menu-item index="approve">机会审批</el-menu-item>
      </el-submenu>
      <el-menu-item index="chat">聊天室</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
#sideNavigation {
  .el-menu {
    border-right: none;
    .el-menu-item {
      margin-left: 20px;
      &:hover {
        color: #409eff;
        background-color: #fff;
      }
      &.is-active {
        color: #409eff;
        background-color: #edf4fe;
        border-radius: 20px 0 0 20px;
      }
    }
  }
}
</style>
