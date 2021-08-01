<template>
<el-container style="height: 900px; border: 0px solid #409EFF">
  <el-aside width="250px"  style="height: 900px; background-color: rgba(9, 13, 45, 0.8)">
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
      <el-table
    :data="tableData"
    style="width: 100%"
    max-height="450"
    height="450px">
    <el-table-column
      fixed
      prop="date"
      label="机会编号"
      width="220">
    </el-table-column>
    <el-table-column
      prop="name"
      label="机会名称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="address"
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
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
           tableData1: [{
          date: '2016-05-03',
          ourpeople: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          ourpeople: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
          dialogTableVisible: false,
        dialogFormVisible: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '未跟踪'
        }, {
          date: '2016-05-04',
          name: '李小虎',
          address: '未跟踪'
        }, {
          date: '2016-05-01',
          name: '刘小虎',
          address: '未跟踪'
        }, {
          date: '2016-05-03',
          name: '黑小虎',
          address: '已跟踪'
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
        }
      },
      track(){
          this.$router.replace('/track')
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
