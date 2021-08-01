<template>
<el-container style="height: 1200px; border: 0px solid #409EFF">

  <el-container>
    

    <el-main style="solid :#DCDFE6">



      <el-table
    :data="tableData"
    style="width: 100%"
    max-height="450"
    height="450px">
    <el-table-column
      fixed
      prop="id"
      label="机会编号"
      width="220">
    </el-table-column>
    <el-table-column
      prop="name"
      label="机会名称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="status"
      label="机会状态"
      width="250">
    </el-table-column>
    <el-table-column
      label="编辑跟踪"
      width="120"
      >
      <template #default="scope">
        <el-button
         
          @click.prevent="deleteRow(scope.$index, tableData)"
           @click="dialogFormVisible = true"
          type="text"
          size="small">
          编辑
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="机会跟踪" v-model="dialogFormVisible">
  <el-form :v-model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  >
  <el-form-item label="我方人员" prop="ourname">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="客户方人员" prop="cusname">
    <el-input v-model="ruleForm.name1"></el-input>
  </el-form-item>
   <el-form-item label="第三方人员" prop="outname">
    <el-input v-model="ruleForm.name2"></el-input>
  </el-form-item>
  <el-form-item label="业务类型" prop="region1">
    <el-select v-model="ruleForm.region1" placeholder="请选择业务类型">
      <el-option label="类型一" value="shanghai"></el-option>
      <el-option label="二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="访谈日期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
   <el-form-item label="沟通方式" prop="way">
    <el-select v-model="ruleForm.region3" placeholder="请选择沟通方式">
      <el-option label="面对面" value="shanghai"></el-option>
      <el-option label="网络" value="beijing"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="沟通地点" prop="address">
    <el-input type="textarea" v-model="ruleForm.address"></el-input>
  </el-form-item>
  <el-form-item label="沟通情况" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
    <el-form-item label="沟通效果" prop="desc1">
    <el-input type="textarea" v-model="ruleForm.desc1"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
           
      <el-button type="primary" @click="addtrack(), dialogFormVisible = false">确 定</el-button>
    </span>
  </template>
</el-dialog>
<el-table
    :data="tableData1"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="date"
      label="访谈日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="业务类别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="ourpeople"
      label="我方人员"
      width="120">
    </el-table-column>
    <el-table-column
      prop="cuspeople"
      label="客户方人员"
      width="120">
    </el-table-column>
    <el-table-column
      prop="threepeople"
      label="第三方人员"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地点"
      width="320">
    </el-table-column>
       <el-table-column
      prop="situation"
      label="沟通情况"
      width="320">
    </el-table-column>
       <el-table-column
      prop="effect"
      label="沟通效果"
      width="320">
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
           tableData1: [],
          dialogTableVisible: false,
        dialogFormVisible: false,
        tableData: [{
          id: '20210001',
          name: '小学期实训项目外包',
          status: '未跟踪'
        }, {
          id: '20210002',
          name: '超市结账系统',
          status: '未跟踪'
        }, {
          id: '20210003',
          name: '食堂结账系统',
          status: '未跟踪'
        }, {
          id: '20210004',
          name: '图书馆借书管理系统',
          status: '已跟踪'
        }],
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
         rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      
    }
      },
    
    methods:{
/*
       edit(){
         depot.get({
           url:'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/getTrackOppEdit',
           cb:(res)=>{
             console.log(res)
             this.tableData1.push(res.data[0])
           }
         })

       },
*/
      addtrack() {
       
    　depot.get({
      url: 'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/showtrack',
      cb: (res)=> {
        console.log(res)  
        this.tableData1.push(res.data)
      }})},
         submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    
 
      deleteRow(index, rows) {
          if(this.tableData.status='未跟踪'){
        rows.splice(index, 1);
        }

      },
}

  };
</script>

<style>


  .el-aside {
    color: #333;
  }
 
</style>
