<template>
<el-container style="height: 1200px; border: 0px solid #409EFF">

  <el-container>
    

    
<el-main>
    <div>
      
    <el-col :span="12">
      <el-form :inline="true" :model="formInline1" class="demo-form-inline">
  <el-form-item label="销售部门"  label-width="90px">
    <el-select v-model="formInline1.region1" placeholder="销售部门">
      <el-option label="事业部一部" value="shanghai"></el-option >
      <el-option label="事业部二部" value="beijing"></el-option>
    </el-select>
    </el-form-item>
     <el-form-item label="客户经理" label-width="90px">
    <el-select v-model="formInline1.region2" placeholder="客户经理" >
      <el-option label="李九" value="shanghai"></el-option>
      <el-option label="张八" value="beijing"></el-option>
    </el-select>
  </el-form-item>
 
</el-form>
      <el-table
            :data="data1"
            border
            ref="selection" 
            @selection-change="checkAll"
            style="width: 150%">
            <el-table-column
              type="selection"
              width="50">
              </el-table-column>
              <el-table-column
                prop="cusid"
                label="客户编号"
                width="100"
                >
              </el-table-column>
              <el-table-column
                prop="cusname"
                label="客户名称"
                width="300"
                >
              </el-table-column>          
        </el-table>
         <el-table
            :data="data2"
            border
            ref="selection" 
            @selection-change="checkAll"
            style="width: 150%">
            <el-table-column
              type="selection"
              width="50">
              </el-table-column>
              <el-table-column
                prop="oppoid"
                label="机会编号"
                width="100"
                >
              </el-table-column>
              <el-table-column
                prop="opponame"
                label="机会名称"
                width="300"
                >
              </el-table-column>          
        </el-table>
    </el-col>
    <el-col :span="2">
      <div class="opSetting">
        <div @click="handelSelect">
          <el-button icon="el-icon-d-arrow-right" :disabled="nowSelectData.length?false:true" :size="buttonSize" type="primary" >
              移交
          </el-button>
        </div>
        <div class="spacing" @click="handleRemoveSelect">
          <el-button icon="el-icon-d-arrow-left" :disabled="nowSelectRightData.length?false:true" :size="buttonSize" type="primary">
             取消
          </el-button>
        </div>
      </div>
    </el-col>

    <el-col :span="12">
         <el-form :inline="true" :model="formInline2" class="demo-form-inline">
  <el-form-item label="销售部门"  label-width="90px">
    <el-select v-model="formInline2.region1" placeholder="销售部门">
      <el-option label="事业部一部" value="shanghai"></el-option >
      <el-option label="事业部二部" value="beijing"></el-option>
    </el-select>
     </el-form-item>
     <el-form-item label="客户经理" label-width="90px">
    <el-select v-model="formInline2.region2" placeholder="客户经理" >
      <el-option label="李九" value="shanghai"></el-option>
      <el-option label="张八" value="beijing"></el-option>
    </el-select>
  </el-form-item>

</el-form>
         <el-table
            :data="selectArr"
            border
            ref="selection" 
            @selection-change="checkRightAll"
            style="width: 100%">
            <el-table-column
              type="selection"
              width="30">
            </el-table-column>
              <el-table-column
                prop="cusid"
                label="客户编号"
                width="100"
                >
              </el-table-column>
              <el-table-column
                prop="cusname"
                label="客户名称"
                width="300"
                >
              </el-table-column>
            
        </el-table>
         <el-table
           :data="selectArr"
            border
            ref="selection" 
            @selection-change="checkRightAll"
            style="width: 150%">
            <el-table-column
              type="selection"
              width="50">
              </el-table-column>
              <el-table-column
                prop="oppoid"
                label="机会编号"
                width="100"
                >
              </el-table-column>
              <el-table-column
                prop="opponame"
                label="机会名称"
                width="300"
                >
              </el-table-column>          
        </el-table>
    </el-col>
 
  </div>
  
</el-main>

  </el-container>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      formInline1: {
          region1: '',
          region2:'',
        },
         formInline2: {
          region1: '',
          region2:'',
        },
      selectArr:[], 
     
      buttonSize: 'large',
      options: [],
        value: '',
      data1:[{
          cusid:'20180101',
          cusname: '东北大学',
        }, {
        cusid:'20180101',
          cusname: '东南大学',
        }, ],
      nowSelectData: [], // 左边选中列表数据
      nowSelectRightData: [], 

    };
  },
  methods: {
    checkAll(val){
      this.nowSelectData = val;
    },
    checkRightAll(val) {
      this.nowSelectRightData = val;
    },
    // 选中
    handelSelect(){   
      this.selectArr = this.handleConcatArr(this.selectArr, this.nowSelectData) 
      this.handleRemoveTabList(this.nowSelectData,  this.data1);
      this.nowSelectData = [];
    ;
   },
    // 取消
    handleRemoveSelect() {
      this.data1 = this.handleConcatArr(this.data1, this.nowSelectRightData) 
      this.handleRemoveTabList(this.nowSelectRightData,  this.selectArr);
      this.nowSelectRightData = [];
    },
    handleConcatArr(selectArr, nowSelectData) {
      let arr = [];
      arr = arr.concat(selectArr, nowSelectData);   
      return arr;
    },
    handleRemoveTabList(isNeedArr,  originalArr) {
      if(isNeedArr.length && originalArr.length) {
         for(let i=0; i<isNeedArr.length; i++) {
            for(let k=0; k<originalArr.length; k++) {
              if(isNeedArr[i]["name"] === originalArr[k]["name"]) {
                originalArr.splice(k, 1);   
              }
            }
         }
      }
    }
  },
};
</script>

<style>


  .el-aside {
    color: #333;
  }
 .el-transfer-panel{
        width: 500px;
        height: 800px;
    }
   .el-transfer-panel__list.is-filterable{
        height: 800px;
    }
</style>
