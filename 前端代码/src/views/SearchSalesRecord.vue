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
      <span> User =>SalesDaily Querying</span> 
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
              <span>查询条件</span>
            </div>
          </template>
          <div >
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="销售部门">
                <el-select v-model="value1" placeholder="">
                  <el-option
                      v-for="item in optionsForDept"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="客户经理">
                <el-select v-model="value2" placeholder="">
                  <el-option
                      v-for="item in optionsForStaff"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="星期">
                <el-select v-model="value3" placeholder="">
                  <el-option
                      v-for="item in optionsForWeekday"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
           <div class="block">
    <span class="demonstration">请选择日期</span>
    <el-date-picker
      v-model="value22"
      type="daterange"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :shortcuts="shortcuts"
    >
    </el-date-picker>
  </div>

            <el-row :gutter="24">
              <el-col :span="16">
              </el-col>
              <el-col :span="4">
                <div>
                  <el-button   type="primary" plain icon="el-icon-search" style="font-size:16px"  @click="search()">查询</el-button>
                </div>
              </el-col>
              <el-col :span="4">
                <div>
                  <el-button type="primary" plain style="font-size:16px" icon="el-icon-refresh-left">重置</el-button>
                </div>
              </el-col>
            </el-row>

          </div>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <el-row :gutter="20">
                <el-col :span="8"><div>
                  <span>查询结果</span>

                </div></el-col>
                <el-col :span="12"><div></div></el-col>
                <el-col :span="4"><div>
                  <el-button type="warning" icon="el-icon-star-off" >Export Daily</el-button>

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
                  prop="staffId"
                  label="客户经理编号"
                  width="180">
              </el-table-column>
            
              <el-table-column
                  prop="dailyDate"
                  label="日期">
              </el-table-column>
              <el-table-column
                  prop="week"
                  label="星期">
              </el-table-column>
              <el-table-column
                  prop="detail"
                  label="工作内容">
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
      shortcuts: [{
          text: '最近一周',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          })(),
        }, {
          text: '最近一个月',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          })(),
        }, {
          text: '最近三个月',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          })(),
        }],
        value22: '',
      value1: '',
      optionsFordept :[{
        value: '事业部一部',
        label: '事业部一部'
      }, {
        value: '事业部二部',
        label: '事业部二部'
      }, {
        value: '事业部三部',
        label: '事业部三部',
      }],
      value2: '',
      optionsForStaff: [{
        value: '周十',
        label: '周十'
      }, {
        value: '李九',
        label: '李九'
      }, {
        value: '孙八',
        label: '孙八'
      }],
      
      value3:'',
      optionsForWeekday:[{
        value: '一',
        label: '一'
      }, {
        value: '二',
        label: '二'
      }, {
        value: '三',
        label: '三'
      }, {
        value: '四',
        label: '四'
      }, {
        value: '五',
        label: '五'
      }, {
        value: '六',
        label: '六'
      }, {
        value: '日',
        label: '日'
      }],
      value4: '',
      tableData: []
    }


  },
  methods: {

  search(){
     　depot.get({
      url: 'http://82.156.9.146:10230/NPMS-PROVIDER/npmstest/sale-daily/selectAllSalesDaily',
      cb: (res)=> {
        console.log(res)      
        var arr=new Array()
         arr=res
         console.log(arr[0])
       this.tableData.push(arr[0])
       this.tableData.push(arr[1])
       this.tableData.push(arr[2])
       this.tableData.push(arr[3])
       this.tableData.push(arr[4])
      }})
      },



  }


};

</script>

<style>

</style>
