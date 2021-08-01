<template>
  <el-container style="height: 900px; border: 0px solid #409EFF">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div>
                     <el-card class="box-card" >
  <template #header>
    <div class="card-header">
      <span> User =>Customer Transfering Search</span> 
    </div>
  </template>
 <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.VkIZkc-iGJcuqZIYKn2KAwAAAA?w=146&h=150&c=7&o=5&pid=1.7" class="image">
 <div></div>
 <span>{{this.$store.state.user.name}}</span> 
 <div></div>
 <span>Position：事业部经理</span> 
 <div></div>
 <div></div>
 
 </el-card>
            </div>
          </el-col>
        </el-row>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>移出方</span>
            </div>
          </template>
          <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="销售部门">
                <el-select v-model="value1" placeholder="请选择">
                  <el-option
                      v-for="item in optionsForDept"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="客户经理">
                <el-select v-model="value2" placeholder="请选择">
                  <el-option
                      v-for="item in optionsForStaff"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>接收方</span>
            </div>
          </template>
          <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="销售部门">
                <el-select v-model="value3" placeholder="请选择">
                  <el-option
                      v-for="item in optionsForDept2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="客户经理">
                <el-select v-model="value4" placeholder="请选择">
                  <el-option
                      v-for="item in optionsForStaff2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="客户名称">
                <el-input v-model="inputForCusName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="机会名称">
                <el-input v-model="inputForOppoName" placeholder=""></el-input>
              </el-form-item>
            </el-form>


          </div>
        </el-card>
        <el-row :gutter="24">
          <el-col :span="16"><div></div></el-col>
          <el-col :span="4"><div>
            <el-button  icon="el-icon-search" type="info" style="font-size:15px" @click="createtrans()">查询</el-button>
          </div></el-col>
          <el-col :span="4"><div>
            <el-button type="primary" icon="el-icon-refresh-left" style="font-size:15px">重置</el-button>
          </div></el-col>
        </el-row>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <el-row :gutter="20">
                <el-col :span="8"><div>
                  <span>查询结果</span>

                </div></el-col>
                <el-col :span="12"><div></div></el-col>
                <el-col :span="4"><div>
                  <el-button class="button" type="warning" icon="el-icon-star-off" style="font-size:15px">报表导出</el-button>

                </div></el-col>
              </el-row>
            </div>
          </template>
          <div>
            <el-table
                :data="tableData"
                height="180"
                border
                style="width: 100%">
              <el-table-column
                  prop="deptOut"
                  label="移出方销售部门"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="staffOut"
                  label="移出方客户经理"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="deptIn"
                  label="接收方销售部门"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="staffIn"
                  label="接收方客户经理"
                  width="180">
              </el-table-column>

              <el-table-column
                  prop="cusId"
                  label="客户编号">
              </el-table-column>
              <el-table-column
                  prop="cusName"
                  label="客户名称">
              </el-table-column>
              <el-table-column
                  prop="oppoId"
                  label="机会编号">
              </el-table-column>
              <el-table-column
                  prop="oppoName"
                  label="机会名称">
              </el-table-column>
            </el-table>
          </div>
        </el-card>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from 'axios'
import {defineComponent, ref} from 'vue'


export default {
  data() {
    return {
      optionsForDept: [{
        value: '事业部一部',
        label: '事业部一部'
      }, {
        value: '事业部二部',
        label: '事业部二部'
      }, {
        value: '事业部三部',
        label: '事业部三部'
      }],
      value1: '',
      optionsForStaff: [{
        value: '孙八',
        label: '孙八'
      }, {
        value: '李九',
        label: '李九'
      }, {
        value: '周十',
        label: '周十'
      }],
      value2: '',
      optionsForDept2: [{
        value: '事业部一部',
        label: '事业部一部'
      }, {
        value: '事业部二部',
        label: '事业部二部'
      }, {
        value: '事业部三部',
        label: '事业部三部'
      }],
      value3: '',
      optionsForStaff2: [{
        value: '孙八',
        label: '孙八'
      }, {
        value: '李九',
        label: '李九'
      }, {
        value: '周十',
        label: '周十'
      }],
      value4: '',
      inputForCusName: ref(''),
      inputForOppoName: ref(''),
      tableData: []

    }
  },
  
  methods: {
createtrans() {
  　depot.get({
      url: 'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/handover',
    
      cb: (res)=> {
           console.log(res)      
       
       this.tableData.push(res.data[0])   
       this.tableData.push(res.data[1])   
     
         
      }})
},


  }


};

</script>

<style>
.el-aside {
  color: #333;
}
</style>
