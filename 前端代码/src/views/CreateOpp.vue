<template>
<el-container style="height: 1200px; border: 0px solid #409EFF">

  <el-container>
    

    <el-main>
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
  <el-form-item label="机会名称" prop="oppname" >
    <el-input v-model="ruleForm.oppname" style="width:700px"></el-input>
  </el-form-item>
   <el-form-item label="客户名称" prop="cusname">
    <el-input v-model="ruleForm.cusname" style="width:700px"></el-input>
  </el-form-item>
  <el-form-item label="机会来源" prop="region">
    <el-select v-model="ruleForm.region1" placeholder="请选择机会来源">
      <el-option label="公司" value="10"></el-option>
      <el-option label="个人" value="20"></el-option>
      <el-option label="厂商" value="30"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="机会阶段" prop="state">
    <el-select v-model="ruleForm.region2" placeholder="请选择机会阶段">
      <el-option label="仅有意向，选型尚未开始" value="E"></el-option>
      <el-option label="交流展示中" value="D"></el-option>
      <el-option label="等待投标" value="C"></el-option>
        <el-option label="投标中" value="B"></el-option>
      <el-option label="中标、商务、合同中" value="A"></el-option>
      <el-option label="合同已签订" value="S"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="预签时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 80%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="4">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 80%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="电力、烟草老客户" prop="delivery" label-width="160px">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
 <el-form-item label="机会归属" prop="own">
     <div class="block">
  <span class="demonstration">选择营销部门</span>
  <el-cascader
    placeholder="试试搜索：销售一部"
    :options="options"
    :props="{ multiple: false }"
    filterable></el-cascader>
</div>
  </el-form-item>
 
  <el-form-item label="机会背景说明" prop="desc" label-width="120px">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <i class="el-icon-s-goods"></i>
<el-button type="text" @click="dialogFormVisible1 = true">机会/产品类型</el-button>

<el-dialog title="机会/产品类型" v-model="dialogFormVisible1">
  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="流水号" >
    <el-input v-model="sizeForm.number" placeholder="123442"></el-input>
  </el-form-item>
  <el-form-item label="机会/产品类型" label-width="120px">
    <el-select v-model="sizeForm.type" placeholder="请选择机会/产品类型">
      <el-option label="第三方软件产品" value="第三方软件产品"></el-option>
     <el-option label="第三方软件产品" value="第三方软件产品"></el-option>
     <el-option label="第三方软件产品" value="第三方软件产品"></el-option>
     <el-option label="第三方软件产品" value="第三方软件产品"></el-option>
     <el-option label="定制开发" value="定制开发"></el-option>
     <el-option label="自有软件产品" value="自由软件产品"></el-option>
     <el-option label="自有方软件产品维护" value="自有软件产品维护"></el-option>
     <el-option label="非产品研发" value="非产品研发"></el-option>
     <el-option label="产品研发" value="产品研发"></el-option>
    <el-option label="产品研发" value="产品研发"></el-option>
    <el-option label="硬件产品" value="硬件产品"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="事业部" label-width="80px">
    <el-select v-model="sizeForm.dep" placeholder="请选择部门">
      <el-option label="事业部" value="1"></el-option>
     <el-option label="2" value="2"></el-option>
     <el-option label="3" value="3"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="金额">
    <el-input v-model="sizeForm.money" placeholder="万元"></el-input>
  </el-form-item>
<template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible1 = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
    </span>
  </template>
  </el-form>
</el-dialog>
<i class="el-icon-finished"></i>

<el-button type="text" @click="dialogFormVisible = true">竞争信息</el-button>

<el-dialog title="竞争人" v-model="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="竞争人名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="竞争位势" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择竞争位势">
        <el-option label="优势" value="shanghai"></el-option>
        <el-option label="劣势" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
 <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </span>
  </template>
</el-dialog>
<i class="el-icon-user-solid"></i>

<el-button type="text" @click="dialogFormVisible2 = true">购买决策人信息</el-button>

<el-dialog title="购买决策人" v-model="dialogFormVisible2">
  <el-form :model="decideform">
    <el-form-item label="决策人名称" :label-width="formLabelWidth2">
      <el-input v-model="decideform.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="决策人部门" :label-width="formLabelWidth2">
      <el-input v-model="decideform.dep" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="决策人职位" :label-width="formLabelWidth2">
      <el-input v-model="decideform.pos" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="决策人电话" :label-width="formLabelWidth2">
      <el-input v-model="decideform.phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="购买决策人" :label-width="formLabelWidth2">
      <el-select v-model="decideform.people" placeholder="请选择购买决策人">
        <el-option label="1" value="shanghai"></el-option>
        <el-option label="2" value="beijing"></el-option>
      </el-select>
      </el-form-item>
      <el-form-item label="影响程度" :label-width="formLabelWidth2">
      <el-select v-model="decideform.effect" placeholder="请选择影响程度">
        <el-option label="1" value="shanghai"></el-option>
        <el-option label="2" value="beijing"></el-option>
      </el-select>
      </el-form-item>
      <el-form-item label="认可程度" :label-width="formLabelWidth2">
      <el-select v-model="decideform.agree" placeholder="请选择认可程度">
        <el-option label="1" value="shanghai"></el-option>
        <el-option label="2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible2 = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
    </span>
  </template>
</el-dialog>
  <el-form-item>
    <el-button type="primary" @click="onSubmit('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import axios from 'axios';
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
        } ],
        sizeForm: {
          number: '',
          type: '',
          dep: '',
          money: '',
        },
        dialogTableVisible: false,
        dialogFormVisible: false,
         dialogTableVisible1: false,
        dialogFormVisible1: false,
        dialogTableVisible2: false,
        dialogFormVisible2: false,
         form: {
          name: '',
          region:''
        },
         decideform: {
          name: '',
          dep: '',
          pos: '',
          phone: '',
          people:'',
          effect:'',
          agree: ''
        },
        formLabelWidth: '120px',
        ruleForm: {
          oppname: '',
          cusname:'',
          region1: '',
          region2:'',
          region3:'',
          state:'',
          date1: '',
          date2: '',
          resource: '',
          own:'',
          desc:'',
          
        },
        rules: {
          oppname: [
            { required: true, message: '请输入机会名称', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
           cusname: [
            { required: true, message: '请输入客户名称', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          region1: [
            { required: true, message: '请选择机会来源', trigger: 'change' }
          ],
          region2: [
            { required: true, message: '请选择机会来源', trigger: 'change' }
          ],  
          region3: [
            { required: true, message: '请选择机会来源', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
        
          desc: [
            { required: true, message: '请填写背景说明', trigger: 'blur' }
          ]
        }
      };
    },
    methods:{
     onSubmit(ruleForm) {
      axios.post('/create',{ruleForm})
       .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
      },
       gohome(){
        this.$router.replace('/')
      },

      resetForm(ruleForm) {
        this.$refs[ruleForm].resetFields();
      },
        resetsizeForm(sizeForm) {
        this.$refs[sizeForm].resetFields();
      },
      },
      
    
  };
</script>

<style>


  .el-aside {
    color: #333;
  }
 
</style>
