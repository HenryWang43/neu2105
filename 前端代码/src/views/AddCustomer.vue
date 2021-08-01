<template>
  <el-container style="height: 1200px; border: 0px solid #409EFF">


    <el-container>


      <el-main style="solid: #DCDFE6">
        <el-radio-group v-model="labelPosition" size="small">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="客户名称">
            <el-input v-model="formLabelAlign.cusname" placeholder="客户名称"></el-input>
          </el-form-item>
          <el-form-item label="国家">
            <el-input v-model="formLabelAlign.country" placeholder="国家"></el-input>
          </el-form-item>
          <el-form-item label="省市区">
            <el-select v-model="formLabelAlign.city" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>

            <el-form-item label="详细地址">
              <el-input v-model="formLabelAlign.address" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="邮编">
              <el-input v-model="formLabelAlign.stamp" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="网址">
              <el-input v-model="formLabelAlign.net" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="纳税人识别号">
              <el-input v-model="formLabelAlign.user" placeholder="国家"></el-input>
            </el-form-item>
            <el-form-item label="税分类">
              <el-select v-model="formLabelAlign.fenlei" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
              <el-form-item label="账户分配组">
                <el-select v-model="formLabelAlign.fenpei" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-form-item label="企业性质">
                  <el-select v-model="formLabelAlign.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                  <el-form-item label="年销售收入">
                    <el-input v-model="formLabelAlign.user" placeholder="国家"></el-input>
                  </el-form-item>
                  <el-form-item label="经营产品类型">
                    <el-input v-model="formLabelAlign.user" placeholder="国家"></el-input>
                  </el-form-item>
                  <el-form-item label="核心软件品牌">
                    <el-input v-model="formLabelAlign.user" placeholder="国家"></el-input>
                  </el-form-item>
                  <el-form-item label="信息化应用现状及效果" label-width="150px">
                    <el-input v-model="formLabelAlign.user" placeholder="国家"></el-input>
                  </el-form-item>
        </el-form>
        <el-divider>这是一条神奇的天anan路啊啊啊</el-divider>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-table
            :data="tableData"
            style="width: 100%"
            max-height="250">
          <el-table-column
              prop="name"
              label="姓名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="dep"
              label="部门"
              width="120">
          </el-table-column>
          <el-table-column
              prop="position"
              label="职位"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tele"
              label="座机"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mobile"
              label="手机"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tex"
              label="传真"
              width="120">
          </el-table-column>
          <el-table-column
              prop="tele"
              label="座机"
              width="120">
          </el-table-column>
          <el-table-column
              prop="mail"
              label="邮箱"
              width="120">
          </el-table-column>
          <el-table-column
              prop="qq"
              label="QQ"
              width="120">
          </el-table-column>
          <el-table-column
              prop="wechat"
              label="微信"
              width="120">
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              width="120">
            <template #default="scope">
              <el-button
                  @click.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-divider>关联客户列表</el-divider>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-table
            :data="tableData2"
            style="width: 100%"
            max-height="250">
          <el-table-column
              prop="conname"
              label="关联客户姓名"
              width="350">
          </el-table-column>
          <el-table-column
              prop="conid"
              label="关联客户编号"
              width="350">
          </el-table-column>
          <el-table-column
              prop="relationship"
              label="与客户关系"
              width="350">
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              width="120">
            <template #default="scope">
              <el-button
                  @click.prevent="deleteRow2(scope.$index, tableData2)"
                  type="text"
                  size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
export default {

  data() {
    return {
      tableData: [{
        name: '王小虎',
        dep: '',
        position: '',
        tele: '',
        qq: '',
        wechat: '',
        mail: '',
        tex: '',
        moblie: '',
      }, {
        name: '刘小虎',
        dep: '',
        position: '',
        tele: '',
        qq: '',
        wechat: '',
        mail: '',
        tex: '',
        moblie: '',
      },],
      tableData2: [{
        conname: '王小虎',
        conid: '',
        relatioship: '',
      }, {
        conname: '王小虎',
        conid: '',
        relatioship: '',
      },],
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    deleteRow2(index, rows) {
      rows.splice(index, 1);
    },

  },

};
</script>

<style>

.el-aside {
  color: #333;
}

</style>
