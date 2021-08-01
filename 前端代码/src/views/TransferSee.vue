<template>
<el-container style="height: 1200px; border: 0px solid #409EFF">

  <el-container>
    

    <el-main style="solid: #DCDFE6">
          <p style="text-align: center; margin: 0 0 100px">查询条件</p>
<el-divider>移出方</el-divider>
 <el-form :inline="true" :model="formInline" class="demo-form-inline">
 <el-form-item label="销售部门">
    <el-select v-model="formInline.dep" placeholder="销售部门">
      <el-option label="销售一部" value="dep1"></el-option>
      <el-option label="销售二部" value="dep2"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="客户经理">
    <el-select v-model="formInline.manager" placeholder="客户经理">
      <el-option label="王小虎" value="shanghai"></el-option>
      <el-option label="李小虎" value="beijing"></el-option>
    </el-select>
  </el-form-item>
</el-form>
<el-divider>接收方</el-divider>
<el-form :inline="true" :v-model="formInline1" class="demo-form-inline">
 <el-form-item label="销售部门">
    <el-select v-model="formInline1.dep" placeholder="销售部门">
      <el-option label="销售一部" value="dep1"></el-option>
      <el-option label="销售二部" value="dep2"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="客户经理">
    <el-select v-model="formInline1.manager" placeholder="客户经理">
      <el-option label="王小虎" value="shanghai"></el-option>
      <el-option label="李小虎" value="beijing"></el-option>
    </el-select>
      <el-form-item label="客户名称">
    <el-input v-model="formInline1.cusname" placeholder="客户名称"></el-input>
  </el-form-item>
  <el-form-item label="机会名称">
    <el-input v-model="formInline1.opponame" placeholder="机会名称"></el-input>
  </el-form-item>
  <el-button @click="resetForm('formInline1')">重置</el-button>
  <el-form-item>
</el-form>
<el-divider>Query Result</el-divider>
<el-button type="primary">Report export<i class="el-icon-upload el-icon--right"></i></el-button>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="movedep"
      label="Move out department"
      width="180">
    </el-table-column>
    <el-table-column
      prop="movemanager"
      label="Move out manager"
      width="180">
    </el-table-column>
    <el-table-column
      prop="receivedep"
      label="Receiver sales department">
    </el-table-column>
    <el-table-column
      prop="receivemanager"
      label="Receiver manager">
    </el-table-column>
    <el-table-column
      prop="cusid"
      label="Customer Id">
    </el-table-column>
    <el-table-column
      prop="cusname"
      label="Customer Name">
    </el-table-column>
      <el-table-column
      prop="oppoid"
      label="Opportunity Id">
    </el-table-column>
      <el-table-column
      prop="opponame"
      label="Opportunity Name">
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
movedep:'1',
movemanager:'1',
receivedep:'1',
receivemanager:'1',
cusid:'1',
cusname:'1',
oppoid:'1',
opponame:'1',
 }],
        formInline: {
          dep: '',
          manager: ''
        },
         formInline1: {
          dep: '',
          manager: '',
           cusname:'',
          opponame:'',
        },
        
        
      }
    },
    
    methods:{
        resetForm(formInline1) {
        this.$refs[formInline1].resetFields(formInline1);
      },

      },
      
  };
</script>

<style>


  .el-aside {
    color: #333;
  }
 
</style>
