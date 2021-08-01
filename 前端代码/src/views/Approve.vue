<template>
  <el-container style="height: 900px; border: 0px solid #409EFF">
    <el-container>
      <el-main>
                            <el-card class="box-card" >
  <template #header>
    <div class="card-header">
      <span> User =>Process Approving </span> 
    </div>
  </template>
 <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.VkIZkc-iGJcuqZIYKn2KAwAAAA?w=146&h=150&c=7&o=5&pid=1.7" class="image">
 <div></div>
 <span>Name：{{this.$store.state.user.name}}</span> 
 <div></div>
 <span>Position：事业部经理</span> 
 <div></div>
 <span>Pending Approval Process : 2</span> 
  <el-button icon="el-icon-search" circle @click="getprocess()"></el-button>
 <div></div>
 
 </el-card>
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
              align="center">
            <template #header>
              <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
            </template>
            <el-button size="medium" @click="dialogTableVisible = true" type="success" plain> 审批</el-button>

            <el-dialog title="机会审批" v-model="dialogTableVisible">
              <el-row class="row-bg" justify="end">
                <el-col :span="6">
                  <div></div>
                </el-col>
                <el-col :span="6">
                  <div></div>
                </el-col>
                <el-col :span="6">
                  <div>
                    <el-button size="medium" @click="dialogTableVisible = false"> 提交</el-button>
                    <el-button size="medium" @click="dialogVisible = true"> 流程图</el-button>

                    <el-dialog title="流程图" v-model="dialogVisible" width="50%" :before-close="handleClose">
                      <el-steps :active="active" finish-status="success">
                        <el-step title="提交人"></el-step>
                        <el-step title="营销副总审批 2"></el-step>
                        <el-step title="销售总监审批"></el-step>
                      </el-steps>
                      <template #footer>
                      <span class="dialog-footer">
                        <el-button type="primary" @click="dialogVisible = false" align="center">确 定</el-button>
                       </span>
                      </template>
                    </el-dialog>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-card class="box-card" shadow="never" body-style="width=400px">
                  <template #header>
                    <div class="card-header">
                      <span>机会阶段说明</span>
                      <el-steps :active="1">
                        <el-step title="E" description="仅有意向、选型还未开始"></el-step>
                        <el-step title="D" description="交流展示中"></el-step>
                        <el-step title="C" description="交流展示结束、等待投标"></el-step>
                        <el-step title="B" description="投标中"></el-step>
                        <el-step title="A" description="中标、商务、合同中"></el-step>
                        <el-step title="S" description="合同已签订"></el-step>
                      </el-steps>
                    </div>
                  </template>
                </el-card>
              </el-row>
              <el-row>
                <el-card class="box-card" shadow="never">
                  <template #header>
                    <div class="card-header">
                      <span>机会基本信息</span>
<!--                      <el-descriptions class="margin-top" title="垂直无边框列表" :column="4" direction="vertical">-->
<!--                        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>-->
<!--                        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>-->
<!--                        <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>-->
<!--                        <el-descriptions-item label="备注">-->
<!--                          <el-tag size="small">学校</el-tag>-->
<!--                        </el-descriptions-item>-->
<!--                        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>-->
<!--                      </el-descriptions>-->
                      <el-form ref="form" :model="oppoForm" label-width="80px" size="mini">
                        <el-row>
                          <el-col :span="12">
                            <div>
                              <el-form-item label="机会编号">
                                <el-form-item label="20210001"></el-form-item>
                              </el-form-item>
                            </div>
                          </el-col>
                          <el-col :span="12">
                            <div>
                              <el-form-item label="机会名称">
                                <el-form-item label="小学期实训项目外包" label-width="150"></el-form-item>
                              </el-form-item>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="8">
                            <div>
                              <el-form-item label="销售部门">
                                <el-form-item label="销售五部"></el-form-item>
                              </el-form-item>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div>
                              <el-form-item label="客户经理">
                                <el-form-item label="李九"></el-form-item>
                              </el-form-item>

                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div>
                              <el-form-item label="机会归属">
                                <el-form-item label="行业事业一部 咨询一部 " label-width="150"></el-form-item>
                              </el-form-item>

                            </div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="6">
                            <div>
                              <el-form-item label="机会来源">
                                <el-form-item label="公司"></el-form-item>
                              </el-form-item>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div>
                              <el-form-item label="预签时间">
                                <el-form-item label="2021-07"></el-form-item>
                              </el-form-item>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div>
                              <el-form-item label="机会阶段">
                                <el-form-item label="D" label-width="50px"></el-form-item>
                              </el-form-item>

                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div>
                              <el-radio v-model="radio" label="1">烟草/电力老客户</el-radio>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="20">
                          <el-col :span="5">
                            <div>
                              <el-form-item label="机会背景说明">
                              </el-form-item>
                            </div>
                          </el-col>
                          <el-col :span="15">
                            <div>
                              <el-input
                                  type="textarea"
                                  :rows="2"
                                  placeholder="请输入内容"
                                  v-model="textarea">
                              </el-input>
                            </div>
                          </el-col>
                        </el-row>
                      </el-form>
                    </div>
                  </template>
                </el-card>
              </el-row>
              <el-row>
                <el-card class="box-card" shadow="never">
                  <template #header>
                    <div class="card-header">
                      <span>类型列表</span>
                      <el-table :data="gridDataForOppo">
                        <el-table-column property="suboppoId" label="子机会编号" width="150"></el-table-column>
                        <el-table-column property="oppoId" label="机会名称" width="150"></el-table-column>
                        <el-table-column property="oppoType" label="机会类型" width="150"></el-table-column>
                        <el-table-column property="product" label="产品" width="150"></el-table-column>
                        <el-table-column property="dept" label="销售部门" width="150"></el-table-column>

                      </el-table>
                    </div>
                  </template>
                </el-card>
              </el-row>
              <el-row>
                <el-card class="box-card" shadow="never">
                  <template #header>
                    <div class="card-header">
                      <span>竞争情况</span>
                      <el-table :data="gridDataForCompetitor">
                        <el-table-column property="competitorName" label="竞争对手" width="350"></el-table-column>
                        <el-table-column property="competitorSituation" label="竞争位势" width="350"></el-table-column>
                      </el-table>

                    </div>
                  </template>
                </el-card>
              </el-row>
              <el-row>
                <el-card class="box-card" shadow="never">
                  <template #header>
                    <div class="card-header">
                      <span>客户基本信息</span>
                      <el-form ref="form" :model="customerForm" label-width="80px" size="mini">
                        <el-row>
                          <el-col :span="8">
                            <div>
                              <el-form-item label="客户编号" label-width="100px">
                                <el-form-item label="124"></el-form-item>
                              </el-form-item>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div>
                              <el-form-item label="客户名称">
                                <el-form-item label="东北大学"></el-form-item>
                              </el-form-item>

                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div>
                              <el-form-item label="增值税登记号" label-width="100px">
                                <el-form-item label="211384234432887"></el-form-item>
                              </el-form-item>

                            </div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="8">
                            <div>
                              <el-form-item label="公司性质" label-width="100px">
                                <el-form-item label="国有企业"></el-form-item>
                              </el-form-item>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div>
                              <el-form-item label="年销售收入" label-width="100px">
                                <el-form-item label="5亿"></el-form-item>
                              </el-form-item>

                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div>
                              <el-form-item label="核心软件品牌" label-width="100px">
                                <el-form-item label="SAP"></el-form-item>
                              </el-form-item>

                            </div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="20">
                          <el-col :span="10">
                            <div>
                              <el-form-item label="客户城市" label-width="100px">
                                <el-form-item label="辽宁省沈阳市" label-width="100"></el-form-item>
                              </el-form-item>
                            </div>
                          </el-col>
                          <el-col :span="10">
                            <div>
                              <el-form-item label="详细地址" label-width="100px">
                                <el-form-item label="浑南区智慧大街500号" label-width="150"></el-form-item>
                              </el-form-item>
                            </div>
                          </el-col>

                        </el-row>
                        <el-row :gutter="20">
                          <el-col :span="10">
                            <div>
                              <el-form-item label="邮编">
                                <el-form-item label="414002" label-width="100"></el-form-item>
                              </el-form-item>
                            </div>
                          </el-col>
                          <el-col :span="10">
                            <div>
                              <el-form-item label="经营产品类型" label-width="100px">
                                <el-form-item label="各种本科生、硕士研究生和博士研究生" label-width="150"></el-form-item>
                              </el-form-item>
                            </div>
                          </el-col>

                        </el-row>

                      </el-form>
                    </div>
                  </template>
                </el-card>
              </el-row>
              <el-row>
                <el-card class="box-card" shadow="never">
                  <template #header>
                    <div class="card-header">
                      <span>购买决策人信息</span>
                      <el-table :data="gridDataForBuyer">
                        <el-table-column property="businessType" label="业务类别" width="150"></el-table-column>
                        <el-table-column property="interviewDate" label="访谈日期" width="150"></el-table-column>
                        <el-table-column property="ourStaff" label="我方人员" width="150"></el-table-column>
                        <el-table-column property="customerStaff" label="客户方人员" width="150"></el-table-column>
                        <el-table-column property="thirdStaff" label="第三方人员" width="150"></el-table-column>
                        <el-table-column property="communicationType" label="沟通方式" width="150"></el-table-column>
                        <el-table-column property="location" label="地点" width="150"></el-table-column>
                        <el-table-column property="communicationSituation" label="沟通情况" width="150"></el-table-column>
                        <el-table-column property="communicationEffect" label="沟通效果" width="150"></el-table-column>
                      </el-table>
                    </div>
                  </template>
                </el-card>
              </el-row>

              <el-row>
                <el-card class="box-card" shadow="never">
                  <template #header>
                    <div class="card-header">
                      <span>机会跟踪记录</span>
                      <el-table :data="gridDataForOppoTrack">
                        <el-table-column property="businessType" label="姓名"></el-table-column>
                        <el-table-column property="interviewDate" label="部门"></el-table-column>
                        <el-table-column property="ourStaff" label="职位"></el-table-column>
                        <el-table-column property="customerStaff" label="联系电话"></el-table-column>
                        <el-table-column property="thirdStaff" label="购买决策人"></el-table-column>
                        <el-table-column property="communicationType" label="影响程度"></el-table-column>
                        <el-table-column property="location" label="认可程度"></el-table-column>
                      </el-table>

                    </div>
                  </template>
                </el-card>
              </el-row>
              <el-row>
                <el-card class="box-card" shadow="never">
                  <template #header>
                    <div class="card-header">
                      <span>机会审批日志</span>
                      <el-table :data="gridDataForOppoApprove">
                        <el-table-column property="stageName" label="流程名称"></el-table-column>
                        <el-table-column property="approver" label="审批人"></el-table-column>
                        <el-table-column property="approveStatus" label="审批状态"></el-table-column>
                        <el-table-column property="approveComment" label="审批意见"></el-table-column>
                        <el-table-column property="approveTime" label="申请时间"></el-table-column>
                      </el-table>

                    </div>
                  </template>
                </el-card>
              </el-row>
              <el-row gutter="20">
                <el-col :span="5">
                  <div>
                    <el-form-item label="处理意见"></el-form-item>
                  </div>
                </el-col>
                <el-col :span="5">
                  <div>
                    <el-select v-model="value" placeholder="请选择">
                      <el-option>
                           <el-option label="同意" value="同意"></el-option>
                           <el-option label="退回" value="退回"></el-option>
                      </el-option>
                    </el-select>

                  </div>
                </el-col>

                <el-col :span="15">
                  <div>
                    <el-input
                        type="textarea2"
                        :rows="2"
                        placeholder="请填写审批意见"
                        v-model="textarea">
                    </el-input>
                  </div>
                </el-col>
              </el-row>
            </el-dialog>

          </el-table-column>

          <el-table-column
              label="流程名称"
              prop="approveName">
          </el-table-column>
          <el-table-column
              label="机会编号"
              prop="oppoId">
          </el-table-column>
          <el-table-column
              label="机会名称"
              prop="oppoName">
          </el-table-column>
          <el-table-column
              label="提交人"
              prop="submitter">
          </el-table-column>
          <el-table-column
              label="提交日期"
              prop="submitDate">
          </el-table-column>

        </el-table>
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
      value:[],
      gridDataForOppo: [{
        suboppoId: ' 20210101',
        oppoId: '机会管理',
        oppoType: '小学期实训项目外包',
        product: 'SAP',
        dept: '销售部一部'
      }, {
        suboppoId: ' 20210102',
        oppoId: '售前管理',
        oppoType: '小学期实训项目外包',
        product: 'SAP',
        dept: '销售部一部'
      }],
      gridDataForCompetitor:[{
        competitorName:'西软公司',
        competitorSituation:'落后'
      }
      ],
      gridDataForBuyer:[{
        businessType:'第三方软件业务',
        interviewDate:'2021-07-14',
        ourStaff:'张三',
        customerStaff:'冯谋',
        thirdStaff:'海子',
        communicationType:'线下',
        location:'芦苇广场',
        communicationSituation:'正常',
        communicationEffect:'良好',

      }],
      gridDataForOppoTrack:[{
        businessType:'冯谋',
        interviewDate:'技术服务中心',
        ourStaff:'主任',
        customerStaff:'13024445019',
        thirdStaff:'技术负责人',
        communicationType:'高',
        location:'中立',
      }],
      gridDataForOppoApprove:[{
        stageName:'机会创建流程',
        approver:'张三',
        approveStatus:'正常',
        approveComment:'阅，通过',
        approveTime:'2021-7-22',

      }

      ],

      tableData: [],
      dialogTableVisible: false,
      dialogVisible: false,
      oppoForm: {
        // name: '',
        // region: '',
        // date1: '',
        // date2: '',
        // delivery: false,
        // type: [],
        // resource: '',
        // desc: ''
      },
      customerForm: {},
      radio: '1',
      textarea: ref(''),
      textarea2: ref(''),
      options: [{
        value: '同意',
        label: '同意'
      }, {
        value: '退回',
        label: '退回'
      }, {
        value: '拒绝',
        label: '拒绝'
      }],
      //value: '',
      //active: 0
    }
  },
  methods: {
getprocess(){
     　depot.get({
      url: 'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/shenpi',
    
      cb: (res)=> {
           console.log(res)
        // this.tableDataA.push(res.data[4])

        this.tableData.push(res.data[0]);
       this.tableData.push(res.data[1]);
         
       
         
      }})
      },
  },

};

</script>

<style>
.el-header {
  background-color: #6c95ca;
  color: rgb(92, 36, 36);
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-card {
    min-width: 960px;

  }
  .el-card:hover{
    margin-top: -5px;
  }
</style>
