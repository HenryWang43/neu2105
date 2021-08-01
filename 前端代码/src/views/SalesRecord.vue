<template>
  <el-container style="height: 900px; border: 0px solid #409EFF">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div>
              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <span> User =>SalesDaily Writing</span>
                  </div>
                </template>
                <img
                    src="https://tse3-mm.cn.bing.net/th/id/OIP-C.VkIZkc-iGJcuqZIYKn2KAwAAAA?w=146&h=150&c=7&o=5&pid=1.7"
                    class="image">
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
        <div class="block">
          <span class="demonstration">请选择日期     </span>
          <el-date-picker
              v-model="value2"
              type="daterange"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :shortcuts="shortcuts"
          >
          </el-date-picker>
          <!--          <span class="demonstration">日期选择</span>-->
          <!--          <el-date-picker-->
          <!--              v-model="value"-->
          <!--              type="daterange"-->
          <!--              start-placeholder="Start Date"-->
          <!--              end-placeholder="End Date"-->
          <!--              :default-value="[new Date(2021, 7, 22), new Date(2021, 7, 23)]">-->
          <!--          </el-date-picker>-->
        </div>
        <el-row>
          <div>

          </div>
        </el-row>

        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <el-row :gutter="24">
                <el-col :span="12">
                  <div>
                    <span>销售日报撰写</span>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div>

                    <el-button type="primary" icon="el-icon-edit" circle style="font-size:18px"
                               @click="addSalesRecord(),dialogFormVisible = true">
                    </el-button>
                    <el-dialog title="新建销售日报" v-model="dialogFormVisible">
                      <el-form :model="form">
                        <el-form-item label="日期" :label-width="formLabelWidth">
                          <el-date-picker
                              v-model="value1"
                              type="date"
                              placeholder="选择日期">
                          </el-date-picker>
                        </el-form-item>
                        <el-form-item label="星期" :label-width="formLabelWidth">
                          <el-select v-model="value2" placeholder="请选择星期">
                            <el-option
                                v-for="item in optionsForWeekday"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="工作内容" :label-width="formLabelWidth">
                          <el-input
                              type="textarea"
                              :rows="3"
                              placeholder="请输入工作内容"
                              v-model="textarea">
                          </el-input>

                        </el-form-item>

                      </el-form>
                      <template #footer>
                        <span class="dialog-footer">
                          <el-button @click="dialogFormVisible = false">取 消</el-button>
                          <el-button type="primary" @click="addClick">保 存</el-button>
                        </span>
                      </template>
                    </el-dialog>

                  </div>
                </el-col>
                <el-col :span="3">
                  <!--                  <div>-->
                  <!--                    <el-button class="button" type="primary " size="small" @click="modifyClick">修改</el-button>-->
                  <!--                  </div>-->
                </el-col>
                <el-col :span="3">
                  <!--                  <div>-->
                  <!--                    <el-button class="button" type="danger " size="small" @click="deleteClick">删除</el-button>-->
                  <!--                  </div>-->
                </el-col>
                <el-col :span="3">
                  <!--                  <div>-->
                  <!--                    <el-button class="button" type="primary " size="small" @click="saveClick">保存</el-button>-->
                  <!--                  </div>-->
                </el-col>
              </el-row>
            </div>
          </template>
          <div>
            <el-table
                :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
              <el-table-column
                  prop="date"
                  label="日期"
                  sortable
                  width="150">
              </el-table-column>
              <el-table-column
                  prop="weekDay"
                  label="星期"
                  width="150">
              </el-table-column>
              <el-table-column
                  prop="workNote"
                  label="工作内容"
                  width="200">
              </el-table-column>
              <el-table-column
                  align="right">
                <template #header>
                  <el-input
                      v-model="search"
                      size="mini"
                      placeholder="输入关键字搜索"/>
                </template>
                <template #default="scope">
                  <el-button
                      size="mini"
                      @click="modifyClick(scope.$index,scope.row) ">编辑
                  </el-button>
                  <el-dialog title="编辑销售日报" v-model="dialogFormVisible1">
                    <el-form :model="form">
                      <el-form-item label="日期" :label-width="formLabelWidth">
                        <div class="block">
                          <el-date-picker
                              v-model="value3"
                              type="date"
                              placeholder="选择日期">
                          </el-date-picker>
                        </div>
                      </el-form-item>
                      <el-form-item label="星期" :label-width="formLabelWidth">
                        <div class="block">
                          <el-select v-model="value4" placeholder="请选择星期">
                            <el-option
                                v-for="item in optionsForWeekday2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                          </el-select>
                        </div>
                      </el-form-item>
                      <el-form-item label="工作内容" :label-width="formLabelWidth">
                        <div class="block">
                          <el-input
                              type="textarea"
                              :rows="3"
                              placeholder="请输入工作内容"
                              v-model="textarea2">
                          </el-input>
                        </div>
                      </el-form-item>
                    </el-form>
                    <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible1 = false">取 消</el-button>
      <el-button type="primary" @click="lert()">确 定</el-button>
    </span>
                    </template>
                  </el-dialog>
                  <el-button
                      size="mini"
                      type="danger"
                      @click.prevent="handleDelete(scope.$index, tableData)">删除
                  </el-button>
                </template>
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
      disabledDate(time) {
        return time.getTime() > Date.now()
      },
      tableData: [{
        date: '2021-07-19',
        weekDay: '一',
        workNote: '参加部门会议'
      }, {
        date: '2021-07-18',
        weekDay: '日',
        workNote: '与客户沟通'

      }],
      multipleSelection: [],
      value1: '',
      value2: '',
      value3: '',
      dialogFormVisible1: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      optionsForWeekday: [{
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
      optionsForWeekday2: [{
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
      }

      ],
      textarea: ref(''),
      textarea2: ref(''),
    }
  },
  methods: {
    addSalesRecord() {
      depot.get({
        url: 'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/getSalesRecord',
        cb: (res) => {
          console.log(res)
          this.tableData.push(res.data[0])
        }
      })

    },
    addClick() {
      this.dialogFormVisible = false;
      this.$alert('提交成功！');

    },
    modifyClick(index,row) {
      this.dialogFormVisible1 = true;
      handleDelete(index, rows);
      depot.get({
        url: 'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/getSalesRecord',
        cb: (res) => {
          console.log(res)
          this.tableData.push(res.data[1])
        }
      })



    },
    deleteClick() {

    },
    saveClick() {

    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, rows) {
      rows.splice(index, 1);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    lert(){
    this.dialogFormVisible1 = false;
      this.$alert('修改成功！');
    }
  }


};

</script>

<style>
title:{
  padding: 40px;
}
</style>
