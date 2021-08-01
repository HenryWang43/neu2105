<template>
<el-container style="height: 1200px; border: 0px solid #409EFF">

    

    <el-main>
       <el-card class="box-card" >
  <template #header>
    <div class="card-header">
      <span>User =>Opportunity Maintaining</span>  
    </div>
  </template>
 <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.VkIZkc-iGJcuqZIYKn2KAwAAAA?w=146&h=150&c=7&o=5&pid=1.7" class="image">
 <div></div>
 <span>{{this.$store.state.user.name}}</span> 
 <div></div>
 <span>Position：事业部经理</span> 
 <div></div>
 <span>My related opportunities : 2</span>  <el-button icon="el-icon-search" circle @click="getList()"></el-button>
 <div></div>
 <div class="bottom">
          <time class="time">{{ currentDate }}</time>
          
        </div>
</el-card>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Opportunity ID"
      prop="oppoid">
    </el-table-column>
    <el-table-column
      label="Opportunity Name"
      prop="opponame">
    </el-table-column>
        <el-table-column
      label="Opportunity Source"
      prop="opposource">
    </el-table-column>
        <el-table-column
      label="Opportunity Phase"
      prop="oppophase">
    </el-table-column>
    <el-table-column
      label="Signing time"
      prop="time">
    </el-table-column>
        <el-table-column
      label="Sales Department"
      prop="dep">
    </el-table-column>
        <el-table-column
      label="Customer Manager"
      prop="manager">
    </el-table-column>
    <el-table-column
      align="right">
      <template #header>
        <el-input
          v-model="search"
          size="mini"
          placeholder="Enter a keyword to search"/>
      </template>
      <template #default="scope">
         <el-button
          size="mini"
          @click="dialogFormVisible3 = true"
          >Track</el-button>
        <el-button
          size="mini"
          @click="editing(scope.row),dialogFormVisible0 = true"
          >Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
 <div>
    <span> <el-button type="success" @click="dialogFormVisible0 = true" icon="el-icon-edit" style="font-size:20px;margin-left: 450px">Add Opportunities</el-button></span>
    <el-dialog title="新增机会" v-model="dialogFormVisible0">
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
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible0 = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible0 = false">确 定</el-button>
    </span>
  </template>
</el-dialog>
    <el-divider direction="vertical"></el-divider>
    <el-divider direction="vertical"></el-divider>
    <span><el-button  type="warning" icon="el-icon-star-off" style="font-size:20px;margin-left: 150px" >Export Table</el-button></span>
  </div>
   <el-dialog title="机会跟踪" v-model="dialogFormVisible3">
  <el-form :v-model="ruleForm1" :rules="rules1" ref="trackform" label-width="100px" class="demo-ruleForm"  >
  <el-form-item label="我方人员" prop="ourname">
    <el-input v-model="ruleForm1.name"></el-input>
  </el-form-item>
   <el-form-item label="客户方人员" prop="cusname">
    <el-input v-model="ruleForm1.name1"></el-input>
  </el-form-item>
   <el-form-item label="第三方人员" prop="outname">
    <el-input v-model="ruleForm1.name2"></el-input>
  </el-form-item>
  <el-form-item label="业务类型" prop="region1">
    <el-select v-model="ruleForm1.region1" placeholder="请选择业务类型">
      <el-option label="类型一" value="shanghai"></el-option>
      <el-option label="二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="访谈日期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm1.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm1.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
   <el-form-item label="沟通方式" prop="way">
    <el-select v-model="ruleForm1.region3" placeholder="请选择沟通方式">
      <el-option label="面对面" value="shanghai"></el-option>
      <el-option label="网络" value="beijing"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="沟通地点" prop="address">
    <el-input type="textarea" v-model="ruleForm1.address"></el-input>
  </el-form-item>
  <el-form-item label="沟通情况" prop="desc">
    <el-input type="textarea" v-model="ruleForm1.desc"></el-input>
  </el-form-item>
    <el-form-item label="沟通效果" prop="desc1">
    <el-input type="textarea" v-model="ruleForm1.desc1"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm1()">立即创建</el-button>
    <el-button @click="resetForm1('ruleForm1')">重置</el-button>
  </el-form-item>
</el-form>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible3 = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
    </span>
  </template>
</el-dialog>
</el-main>
  </el-container>
</template>

<script>
//import {getList} from 
  export default {
     data() {
      return {
        tableData: [
         ],
     
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
        dialogTableVisible0: false,
        dialogFormVisible0: false,
         dialogTableVisible3: false,
        dialogFormVisible3: false,
         ruleForm1: {
          name: '',
          name1:'',
          name2:'',
          region3:'',
          region: '',
          date1: '',
          date2: '',
        desc1:'',
        address:'',
          desc: ''
        },
         rules1: {
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
        },
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
          oppname: '1',
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
      editing(row){
        
        this.ruleForm.oppname=row.opponame

      },
       getList() {
    　depot.get({
      url: 'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/oppo',
      cb: (res)=> {
        console.log(res)
        
        this.tableData.push(res.data)
        this.tableData.push(res.data1)
      }})},

onsubmit(){
  depot.post({
      url: 'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/create',
      data: {

      },
      cb: (res)=> {
        console.log(res)
      }})
},

   submitForm1(){
      console.log(this.$refs.trackform);
      alert(this.$refs.trackform.value);
  depot.post({
      url: 'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/track',
      data: {
     name:this.ruleForm1.name,
     name1:this.ruleForm1.name1,
     name2:this.ruleForm1.name2,
     region3:this.ruleForm1.region3,
          region:this.ruleForm1.region,
          date1:this.ruleForm1.date1,
          date2:this.ruleForm1.date2,
        desc1:this.ruleForm1.desc1,
        address:this.ruleForm1.address,
          desc:this.ruleForm1.desc

      },
      cb: (res)=> {
        console.log(res.data)
      
      }})
},
          
       resetForm1(ruleForm1) {
        this.$refs[ruleForm1].resetFields();
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
