<template>
<el-container style="height: 1200px; border: 0px solid #409EFF">

  <el-container>
    

    <el-main style="solid: #DCDFE6">
 <div class="block">
  <span class="demonstration">选择可查询的部门</span>
  <el-cascader
    placeholder="试试搜索：销售部门"
    :options="options"
    :props="{ multiple: true }"
    filterable></el-cascader>
</div>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
  export default {
    data() {
    
      
      return {
       
        options: [{
          value: 'yingxiao',
          label: '营销',
          children: [{
            value: 'centeryinxiao',
            label: '营销管理中心',
            children: [{
              value: 'yingxiao1',
              label: '销售一部'
            }, {
              value: 'yingxiao2',
              label: '销售二部'
            }, {
              value: 'yingxiao3',
              label: '销售三部'
            }, {
              value: 'yingxiao4',
              label: '销售四部'
            }, {
              value: 'yingxiao5',
              label: '销售五部'
            },
             {
              value: 'shichang',
              label: '市场部'
            },
             {
              value: 'lianmeng',
              label: '联盟部'
            }
            ]
          },]
        } ]
    }
    },
    methods:{
    }
  };
</script>

<style>


  .el-aside {
    color: #333;
  }
 
</style>
