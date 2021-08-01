<template>
  <el-container style="height: 1200px; border: 0px solid #409EFF">

    <el-container>


      <el-main style="solid: #DCDFE6">
        <el-card class="box-card" >
          <template #header>
            <div class="card-header">
              <span>用户信息</span>
            </div>
          </template>
          <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.VkIZkc-iGJcuqZIYKn2KAwAAAA?w=146&h=150&c=7&o=5&pid=1.7" class="image">
          <div></div>
          <span>Name：{{this.$store.state.user.name}}</span>
          <div></div>
          <span>Position：事业部经理</span>
          <div></div>
          <span>Number of customers this month： 4</span>  <el-button icon="el-icon-search" circle @click="seecus()"></el-button>
          <div></div>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>

          </div>
        </el-card>

        <el-table
            :data="tableDataA"
            style="width: 100%">
          <el-table-column
              label="客户名称"
              prop="customer_name">
          </el-table-column>
          <el-table-column
              label="客户编号"
              prop="customer_ID">
          </el-table-column>
          <el-table-column
              label="经营产品类型"
              prop="product_type">
          </el-table-column>
          <el-table-column
              label="企业性质"
              prop="enterprise_nature">
          </el-table-column>
          <el-table-column
              label="销售部门"
              prop="staff_department">
          </el-table-column>
          <el-table-column
              label="客户经理"
              prop="staff_name">
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
                  @click="edit(scope.row),dialogFormVisibleForModify = true">修改
              </el-button>
            </template>

          </el-table-column>
        </el-table>
        <div>
          <span><el-button type="primary" icon="el-icon-edit" circle @click="dialogFormVisibleForAdd = true" style="font-size:20px;margin-left: 500px">新增</el-button></span>
          <el-divider direction="vertical"></el-divider>
          <span><el-button  type="warning" icon="el-icon-star-off" circle @click="open" style="font-size:20px;margin-left: 150px">导出</el-button></span>
          <el-divider direction="vertical"></el-divider>
        </div>
        <el-dialog title="增加" v-model="dialogFormVisibleForAdd">
          <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
            <el-divider>新增</el-divider>
            <el-button type="primary" @click="dialogFormVisibleForAdd = false">取 消</el-button>
            <el-button type="primary" @click="saveAdd()">保存</el-button>
          </el-radio-group>
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlignForAdd">
            <el-form-item label="客户名称">
              <el-input v-model="formLabelAlignForAdd.customerName" placeholder="客户名称"></el-input>
            </el-form-item>
            <el-form-item label="国家">
              <el-input v-model="formLabelAlignForAdd.country" placeholder="国家"></el-input>
            </el-form-item>
            <el-form-item label="省市区">
              <el-select v-model="formLabelAlignForAdd.provinceCityDistrict" placeholder="省市区">
                <el-option label="北京市" value="shanghai"></el-option>
                <el-option label="天津市" value="beijing"></el-option>
                <el-option label="南京市" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-input v-model="formLabelAlignForAdd.detailAddress" placeholder="详细地址"></el-input>
            </el-form-item>
            <el-form-item label="邮编">
              <el-input v-model="formLabelAlignForAdd.postcode" placeholder="邮编"></el-input>
            </el-form-item>
            <el-form-item label="网址">
              <el-input v-model="formLabelAlignForAdd.website" placeholder="网址"></el-input>
            </el-form-item>
            <el-form-item label="纳税人识别号">
              <el-input v-model="formLabelAlignForAdd.taxIndentificationNumber" placeholder="纳税人识别号"></el-input>
            </el-form-item>
            <el-form-item label="税分类">
              <el-select v-model="formLabelAlignForAdd.taxClassification" placeholder="税分类">
                <el-option label="上税" value="上税"></el-option>
                <el-option label="免税" value="免税"></el-option>
              </el-select>
              <el-form-item label="账户分配组">
                <el-select v-model="formLabelAlignForAdd.accountGroup" placeholder="账户分配组">
                  <el-option label="国内" value="国内"></el-option>
                  <el-option label="国际" value="国际"></el-option>
                  <el-option label="附属公司" value="附属公司"></el-option>
                </el-select>
                <el-form-item label="企业性质">
                  <el-select v-model="formLabelAlignForAdd.enterpriseNature" placeholder="企业性质">
                    <el-option label="外商独资" value="shanghai"></el-option>
                    <el-option label="国有企业" value="beijing"></el-option>
                    <el-option label="民营企业" value="beijing"></el-option>
                    <el-option label="其他" value="beijing"></el-option>

                  </el-select>
                  <el-form-item label="年销售收入">
                    <el-input v-model="formLabelAlignForAdd.annualSaleRevenue" placeholder="年销售收入"></el-input>
                  </el-form-item>
                  <el-form-item label="经营产品类型">
                    <el-input v-model="formLabelAlignForAdd.productType" placeholder="定制开发/第三方服务"></el-input>
                  </el-form-item>
                  <el-form-item label="核心软件品牌">
                    <el-input v-model="formLabelAlignForAdd.coreSoftwareBrand" placeholder="核心软件品牌"></el-input>
                  </el-form-item>
                  <el-form-item label="信息化应用现状及效果" label-width="150px">
                    <el-input v-model="formLabelAlignForAdd.informationStatusEffect" placeholder="信息化应用现状及效果"></el-input>
                  </el-form-item>
                </el-form-item>
              </el-form-item>
            </el-form-item>
          </el-form>
          <el-divider>客户联系人信息</el-divider>
          <el-button type="primary" icon="el-icon-edit" circle @click="write0()"></el-button>
          <el-dialog title="填写客户联系人" v-model="dialogFormVisible00">
            <el-form :model="form00">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form00.name" autocomplete="off" ref="contactorName"></el-input>
              </el-form-item>
              <el-form-item label="部门" :label-width="formLabelWidth">
                <el-input v-model="form00.dept" autocomplete="off" ref="contactorDept"></el-input>
              </el-form-item>
              <el-form-item label="职位" :label-width="formLabelWidth">
                <el-input v-model="form00.pos" autocomplete="off" ref="contactorPosition"></el-input>
              </el-form-item>
              <el-form-item label="座机" :label-width="formLabelWidth">
                <el-input v-model="form00.landline" autocomplete="off" ref="contactorLandline"></el-input>
              </el-form-item>
              <el-form-item label="手机" :label-width="formLabelWidth">
                <el-input v-model="form00.phone" autocomplete="off" ref="contactorPhone"></el-input>
              </el-form-item>
              <el-form-item label="传真" :label-width="formLabelWidth">
                <el-input v-model="form00.fax" autocomplete="off" ref="contactorFax"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="form00.email" autocomplete="off" ref="contactorEmail"></el-input>
              </el-form-item>
              <el-form-item label="QQ" :label-width="formLabelWidth">
                <el-input v-model="form00.qq" autocomplete="off" ref="contactorQq"></el-input>
              </el-form-item>
              <el-form-item label="微信" :label-width="formLabelWidth">
                <el-input v-model="form00.wexin" autocomplete="off" ref="contactorWexin"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogFormVisible01 = false">取 消</el-button>
                <el-button type="primary" @click="writedown0,dialogFormVisible01 = false">确 定</el-button>
              </span>
            </template>
          </el-dialog>

          <el-table
              :data="tableData0"
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
                prop="phone"
                label="手机"
                width="120">
            </el-table-column>
            <el-table-column
                prop="fax"
                label="传真"
                width="120">
            </el-table-column>
            <el-table-column
                prop="email"
                label="邮箱"
                width="120">
            </el-table-column>
            <el-table-column
                prop="qq"
                label="QQ"
                width="120">
            </el-table-column>
            <el-table-column
                prop="wexin"
                label="微信"
                width="120">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="120">
              <template #default="scope">
                <el-button
                    @click.prevent="deleteRowFromTable0(scope.$index, tableData0)"
                    type="text"
                    size="small">
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-divider>关联客户列表</el-divider>
          <el-button type="primary" icon="el-icon-edit" circle @click="write1()"></el-button>
          <el-dialog title="填写关联客户" v-model="dialogFormVisible01">
            <el-form :model="form01">
              <el-form-item label="关联客户姓名" :label-width="formLabelWidth">
                <el-input v-model="form01.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="关联客户编号" :label-width="formLabelWidth">
                <el-input v-model="form01.id" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="关联客户关系" :label-width="formLabelWidth">
                <el-input v-model="form01.rela" autocomplete="off"></el-input>
              </el-form-item>

            </el-form>
            <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible01 = false">取 消</el-button>
      <el-button type="primary" @click="writedown1">确 定</el-button>
    </span>
            </template>
          </el-dialog>
          <el-table
              :data="tableData2"
              style="width: 100%"
              max-height="250">
            <el-table-column
                prop="conname"
                label="关联客户姓名"
                width="150">
            </el-table-column>
            <el-table-column
                prop="conid"
                label="关联客户编号"
                width="150">
            </el-table-column>
            <el-table-column
                prop="relationship"
                label="与客户关系"
                width="100">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="120">
              <template #default="scope">
                <el-button
                    @click="deleteRowFromTable2(scope.$index, tableData2)"
                    type="text"
                    size="small">
                  删除
                </el-button>
              </template>
            </el-table-column>
            <template #footer>
    <span class="dialog-footer">

    </span>
            </template>
          </el-table>
        </el-dialog>
        <el-dialog title="修改" v-model="dialogFormVisibleForModify">
          <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
            <el-divider>新增</el-divider>
            <el-button type="primary" @click="dialogFormVisibleForModify = false">取 消</el-button>
            <el-button type="primary" @click="saveModify()">保存</el-button>
          </el-radio-group>
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlignForModify">
            <el-form-item label="客户名称">
              <el-input v-model="formLabelAlignForModify.customerName" placeholder="客户名称"></el-input>
            </el-form-item>
            <el-form-item label="国家">
              <el-input v-model="formLabelAlignForModify.country" placeholder="国家"></el-input>
            </el-form-item>
            <el-form-item label="省市区">
              <el-select v-model="formLabelAlignForModify.provinceCityDistrict" placeholder="省市区">
                <el-option label="北京市" value="shanghai"></el-option>
                <el-option label="天津市" value="beijing"></el-option>
                <el-option label="南京市" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-input v-model="formLabelAlignForModify.detailAddress" placeholder="详细地址"></el-input>
            </el-form-item>
            <el-form-item label="邮编">
              <el-input v-model="formLabelAlignForModify.postcode" placeholder="邮编"></el-input>
            </el-form-item>
            <el-form-item label="网址">
              <el-input v-model="formLabelAlignForModify.website" placeholder="网址"></el-input>
            </el-form-item>
            <el-form-item label="纳税人识别号">
              <el-input v-model="formLabelAlignForModify.taxIndentificationNumber" placeholder="纳税人识别号"></el-input>
            </el-form-item>
            <el-form-item label="税分类">
              <el-select v-model="formLabelAlignForModify.taxClassification" placeholder="税分类">
                <el-option label="上税" value="上税"></el-option>
                <el-option label="免税" value="免税"></el-option>
              </el-select>
              <el-form-item label="账户分配组">
                <el-select v-model="formLabelAlignForModify.accountGroup" placeholder="账户分配组">
                  <el-option label="国内" value="国内"></el-option>
                  <el-option label="国际" value="国际"></el-option>
                  <el-option label="附属公司" value="附属公司"></el-option>
                </el-select>
                <el-form-item label="企业性质">
                  <el-select v-model="formLabelAlignForModify.enterpriseNature" placeholder="企业性质">
                    <el-option label="外商独资" value="shanghai"></el-option>
                    <el-option label="国有企业" value="beijing"></el-option>
                    <el-option label="民营企业" value="beijing"></el-option>
                    <el-option label="其他" value="beijing"></el-option>

                  </el-select>
                  <el-form-item label="年销售收入">
                    <el-input v-model="formLabelAlignForModify.annualSaleRevenue" placeholder="年销售收入"></el-input>
                  </el-form-item>
                  <el-form-item label="经营产品类型">
                    <el-input v-model="formLabelAlignForModify.productType" placeholder="定制开发/第三方服务"></el-input>
                  </el-form-item>
                  <el-form-item label="核心软件品牌">
                    <el-input v-model="formLabelAlignForModify.coreSoftwareBrand" placeholder="核心软件品牌"></el-input>
                  </el-form-item>
                  <el-form-item label="信息化应用现状及效果" label-width="150px">
                    <el-input v-model="formLabelAlignForModify.informationStatusEffect" placeholder="信息化应用现状及效果"></el-input>
                  </el-form-item>
                </el-form-item>
              </el-form-item>
            </el-form-item>
          </el-form>
          <el-divider>客户联系人信息</el-divider>
          <el-button type="primary" icon="el-icon-edit" circle @click="write00()"></el-button>
          <el-dialog title="填写客户联系人" v-model="dialogFormVisible10">
            <el-form :model="form10">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form10.name" autocomplete="off" ref="contactorName"></el-input>
              </el-form-item>
              <el-form-item label="部门" :label-width="formLabelWidth">
                <el-input v-model="form10.dept" autocomplete="off" ref="contactorDept"></el-input>
              </el-form-item>
              <el-form-item label="职位" :label-width="formLabelWidth">
                <el-input v-model="form10.pos" autocomplete="off" ref="contactorPosition"></el-input>
              </el-form-item>
              <el-form-item label="座机" :label-width="formLabelWidth">
                <el-input v-model="form10.landline" autocomplete="off" ref="contactorLandline"></el-input>
              </el-form-item>
              <el-form-item label="手机" :label-width="formLabelWidth">
                <el-input v-model="form10.phone" autocomplete="off" ref="contactorPhone"></el-input>
              </el-form-item>
              <el-form-item label="传真" :label-width="formLabelWidth">
                <el-input v-model="form10.fax" autocomplete="off" ref="contactorFax"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="form10.email" autocomplete="off" ref="contactorEmail"></el-input>
              </el-form-item>
              <el-form-item label="QQ" :label-width="formLabelWidth">
                <el-input v-model="form10.qq" autocomplete="off" ref="contactorQq"></el-input>
              </el-form-item>
              <el-form-item label="微信" :label-width="formLabelWidth">
                <el-input v-model="form10.wexin" autocomplete="off" ref="contactorWexin"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogFormVisible10 = false">取 消</el-button>
                <el-button type="primary" @click="writedown00">确 定</el-button>
              </span>
            </template>
          </el-dialog>

          <el-table
              :data="tableData00"
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
                prop="phone"
                label="手机"
                width="120">
            </el-table-column>
            <el-table-column
                prop="fax"
                label="传真"
                width="120">
            </el-table-column>
            <el-table-column
                prop="email"
                label="邮箱"
                width="120">
            </el-table-column>
            <el-table-column
                prop="qq"
                label="QQ"
                width="120">
            </el-table-column>
            <el-table-column
                prop="wexin"
                label="微信"
                width="120">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="120">
              <template #default="scope">
                <el-button
                    @click.prevent="deleteRowFromTable0(scope.$index, tableData00)"
                    type="text"
                    size="small">
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-divider>关联客户列表</el-divider>
          <el-button type="primary" icon="el-icon-edit" circle @click="write11()"></el-button>
          <el-dialog title="填写关联客户" v-model="dialogFormVisible11">
            <el-form :model="form11">
              <el-form-item label="关联客户姓名" :label-width="formLabelWidth">
                <el-input v-model="form11.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="关联客户编号" :label-width="formLabelWidth">
                <el-input v-model="form11.id" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="关联客户关系" :label-width="formLabelWidth">
                <el-input v-model="form11.rela" autocomplete="off"></el-input>
              </el-form-item>

            </el-form>
            <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible11 = false">取 消</el-button>
      <el-button type="primary" @click="writedown11">确 定</el-button>
    </span>
            </template>
          </el-dialog>
          <el-table
              :data="tableData22"
              style="width: 100%"
              max-height="250">
            <el-table-column
                prop="conname"
                label="关联客户姓名"
                width="150">
            </el-table-column>
            <el-table-column
                prop="conid"
                label="关联客户编号"
                width="150">
            </el-table-column>
            <el-table-column
                prop="relationship"
                label="与客户关系"
                width="150">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="120">
              <template #default="scope">
                <el-button
                    @click="deleteRowFromTable2(scope.$index, tableData22)"
                    type="text"
                    size="small">
                  删除
                </el-button>
              </template>
            </el-table-column>
            <template #footer>
    <span class="dialog-footer">

    </span>
            </template>
          </el-table>
        </el-dialog>



      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      currentDate: new Date(),
      dialogFormVisibleForAdd: false,
      dialogFormVisibleForModify: false,
      dialogFormVisible00:false,
      dialogFormVisible01: false,
      dialogFormVisible10:false,
      dialogFormVisible11: false,
      /*管理主页表*/
      tableDataA: [],
      tableData0: [],

      /*新增客户联系人表格*/
/*
      tableData0: [{
        name: '',
        dep: '',
        position: '',
        tele: '',
        phone:'',
        fax: '',
        email: '',
        qq: '',
        wexin: '',
      },],
*/
      /*修改客户联系人表格*/
      tableData00:[],
/*
      tableData00: [{
        name: '',
        dep: '',
        position: '',
        tele: '',
        phone:'',
        fax: '',
        email: '',
        qq: '',
        wexin: '',
      },],
*/

      /*新增客户联系人表单*/
      form00: [{
        name: '',
        dept: '',
        pos: '',
        landline:'',
        phone:'',
        fax:'',
        email:'',
        qq:'',
        wexin:'',
      }],
      /*修改客户联系人表单*/
      form10: {
        name: '',
        dept: '',
        pos: '',
        landline:'',
        phone:'',
        fax:'',
        email:'',
        qq:'',
        wexin:'',
      },

/*新增关联客户表单*/
      form01: [{
        name: '',
        id: '',
        rela: '',

      }],
      /*修改关联客户表单*/
      form11: {
        name: '',
        id: '',
        rela: '',

      },
      /*新建关联客户表格*/
      tableData2:[],
/*
      tableData2: [{
        conname: '',
        conid: '',
        relatioship: '',
      }],
*/
      /*修改关联客户表格*/
      tableData22:[],
/*
      tableData22: [{
        conname: '',
        conid: '',
        relatioship: '',
      }],
*/
      labelPosition: 'top',

      formLabelAlignForAdd: {
        customerName: '',
        country: '',
        provinceCityDistrict: '',
        detailAddress: '',
        postcode: '',
        website: '',
        taxIndentificationNumber: '',
        taxClassification: '',
        accountGroup: '',
        enterpriseNature: '',
        annualSaleRevenue: '',
        productType: '',
        coreSoftwareBrand: '',
        informationStatusEffect: '',
      },
      formLabelAlignForModify: {
        customerName: '',
        country: '',
        provinceCityDistrict: '',
        detailAddress: '',
        postcode: '',
        website: '',
        taxIndentificationNumber: '',
        taxClassification: '',
        accountGroup: '',
        enterpriseNature: '',
        annualSaleRevenue: '',
        productType: '',
        coreSoftwareBrand: '',
        informationStatusEffect: '',
      },
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        nature: '',
        dep: '',
        manage: '',
      },],

    }
  },

  methods: {
    saveAdd(){
/*      this.axios.post('http://82.156.9.146:10000/NPMS-PROVIDER/npmstest/contactor/addCustomer',{
        /!*
                customer_name: this.formLabelAlignForAdd.customerName,
                country:this.formLabelAlignForAdd.country,
                province_city_district:this.formLabelAlignForAdd.provinceCityDistrict,
                detail_address:this.formLabelAlignForAdd.detailAddress,
                postcode:this.formLabelAlignForAdd.postcode,
                website:this.formLabelAlignForAdd.website,
                tax_identification_number:this.formLabelAlignForAdd.taxIndentificationNumber,
                tax_classification:this.formLabelAlignForAdd.taxClassification,
                account_group:this.formLabelAlignForAdd.accountGroup,
                enterprise_nature:this.formLabelAlignForAdd.enterpriseNature,
                annual_sale_revenue:this.formLabelAlignForAdd.annualSaleRevenue,
                product_type:this.formLabelAlignForAdd.productType,
                core_software_brand:this.formLabelAlignForAdd.coreSoftwareBrand,
                custoinformation_status_effectmer_name:this.formLabelAlignForAdd.informationStatusEffect
        *!/

      })
          .then(function (res){
            console.log(res);
          })
          .catch(function (error) {
                console.log(error);
              }
          )*/
      this.dialogFormVisibleForAdd = false;
      this.$alert('提交成功！');
      depot.get({
        url: 'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/customer',

        cb: (res)=> {
          console.log(res)
          this.tableDataA.push(res.data[4])

        }})



    },
    saveModify(){
      this.dialogFormVisibleForAdd = false;
      this.$alert('修改成功！');
    },
    deleteRowFromTable0(index, rows) {
      rows.splice(index, 1);

    },

    deleteRowFromTable2(index, rows) {
      rows.splice(index, 1);

    },


    tijiao(){
      depot.get({
        url: 'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/query',

        cb: (res)=> {
          console.log(res)
          this.tableData0.push(res.data)

        }})
    },
    seecus(){
      depot.get({
        url: 'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/customer',

        cb: (res)=> {
          console.log(res)

          this.tableDataA.push(res.data[0])
          this.tableDataA.push(res.data[1])
          this.tableDataA.push(res.data[2])
          this.tableDataA.push(res.data[3])

        }})
    },
    writedown0() {
      // depot.get({
      //   url:'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/getContactorForAdd',
      //   cb:(res)=>{
      //     console.log(res)
      //     this.tableData0.push(res.data[0])
      //   }
      // })

      this.dialogFormVisible00 = false;

    },
    writedown1() {
      // depot.get({
      //   url:'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/getCustomerCustomerForAdd',
      //   cb:(res)=>{
      //     console.log(res)
      //     this.tableData2.push(res.data[0])
      //   }
      // })

      this.dialogFormVisible01 = false

    },
    writedown00() {
      this.dialogFormVisible10 = false;
      depot.get({
        url:'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/getContactorForModify',
        cb:(res)=>{
          console.log(res)
          this.tableData0.push(res.data[0])
        }
      })


    },
    writedown11() {
      this.dialogFormVisible11 = false;
      depot.get({
        url:'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/getContactorForModify',
        cb:(res)=>{
          console.log(res)
          this.tableData0.push(res.data[0])
        }
      })


    },


    write0(row) {

      this.dialogFormVisible00 = true;
      depot.get({
        url:'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/getContactorForAdd',
        cb:(res)=>{
          console.log(res)
          this.tableData00.push(res.data[0])
        }
      })

    },
    write1(row) {
      this.dialogFormVisible01 = true;
      depot.get({
        url:'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/getCustomerCustomerForAdd',
        cb:(res)=>{
          console.log(res)
          this.tableData22.push(res.data[0])
        }
      })

    },

    write00(row){
      this.dialogFormVisible10 = true;
      this.form10.name = 'whh'
      this.form10.dept = '采购中心'
      this.form10.pos = '主任'
      this.form10.landline = '65896321'
      this.form10.phone = '15640007007'
      this.form10.fax = '65896321'
      this.form10.email = '123@163.com'
      this.form10.qq = '123456'
      this.form10.wexin = '123456'
    },
    write11(row){
      this.dialogFormVisible11 = true
      this.form11.name='东北大学'
      this.form11.id = '717001'
      this.form11.rela = '母公司'

    },
    edit(row) {
      if (row.customer_name=='东北大学'){
        this.formLabelAlignForModify.customerName = row.customer_name
        this.formLabelAlignForModify.country = '中国'
        this.formLabelAlignForModify.provinceCityDistrict = '辽宁省沈阳市浑南区'
        this.formLabelAlignForModify.detailAddress = '智慧大街500号'
        this.formLabelAlignForModify.postcode ='11001'
        this.formLabelAlignForModify.website ='neu.edu.cn'
        this.formLabelAlignForModify.taxIndentificationNumber ='13413105313231913'
        this.formLabelAlignForModify.taxClassification ='免税'
        this.formLabelAlignForModify.accountGroup ='国内'
        this.formLabelAlignForModify.enterpriseNature ='国有企业'
        this.formLabelAlignForModify.annualSaleRevenue ='30（万元）'
        this.formLabelAlignForModify.productType ='第三方服务'
        this.formLabelAlignForModify.coreSoftwareBrand ='SAP'
        this.formLabelAlignForModify.informationStatusEffect ='蒸蒸日上'
      } else if (row.customer_name=='沈阳大学'){
        this.formLabelAlignForModify.customerName = row.customer_name
        this.formLabelAlignForModify.country = '中国'
        this.formLabelAlignForModify.provinceCityDistrict = '辽宁省沈阳市大东区'
        this.formLabelAlignForModify.detailAddress = '望花南街21号'
        this.formLabelAlignForModify.postcode ='11023'
        this.formLabelAlignForModify.website ='syu.edu.cn'
        this.formLabelAlignForModify.taxIndentificationNumber ='13413105313231913'
        this.formLabelAlignForModify.taxClassification ='免税'
        this.formLabelAlignForModify.accountGroup ='国内'
        this.formLabelAlignForModify.enterpriseNature ='国有企业'
        this.formLabelAlignForModify.annualSaleRevenue ='15（万元）'
        this.formLabelAlignForModify.productType ='定制软件'
        this.formLabelAlignForModify.coreSoftwareBrand ='SAP'
        this.formLabelAlignForModify.informationStatusEffect ='蒸蒸日上'

      }else if (row.customer_name=='中南大学'){
        this.formLabelAlignForModify.customerName = row.customer_name
        this.formLabelAlignForModify.country = '中国'
        this.formLabelAlignForModify.provinceCityDistrict = '湖南省长沙市岳麓区'
        this.formLabelAlignForModify.detailAddress = '海蓝宝石路93号'
        this.formLabelAlignForModify.postcode ='10533'
        this.formLabelAlignForModify.website ='csu.edu.cn'
        this.formLabelAlignForModify.taxIndentificationNumber ='13413105313231913'
        this.formLabelAlignForModify.taxClassification ='免税'
        this.formLabelAlignForModify.accountGroup ='国内'
        this.formLabelAlignForModify.enterpriseNature ='国有企业'
        this.formLabelAlignForModify.annualSaleRevenue ='28（万元）'
        this.formLabelAlignForModify.productType ='定制软件'
        this.formLabelAlignForModify.coreSoftwareBrand ='PMS'
        this.formLabelAlignForModify.informationStatusEffect ='蒸蒸日上'
      }else if (row.customer_name=='西南大学'){
        this.formLabelAlignForModify.customerName = row.customer_name
        this.formLabelAlignForModify.country = '中国'
        this.formLabelAlignForModify.provinceCityDistrict = '重庆市北碚区'
        this.formLabelAlignForModify.detailAddress = '天生路2号'
        this.formLabelAlignForModify.postcode ='10635'
        this.formLabelAlignForModify.website ='swu.edu.cn'
        this.formLabelAlignForModify.taxIndentificationNumber ='13413105313231913'
        this.formLabelAlignForModify.taxClassification ='免税'
        this.formLabelAlignForModify.accountGroup ='国内'
        this.formLabelAlignForModify.enterpriseNature ='国有企业'
        this.formLabelAlignForModify.annualSaleRevenue ='25（万元）'
        this.formLabelAlignForModify.productType ='定制软件'
        this.formLabelAlignForModify.coreSoftwareBrand ='PMS'
        this.formLabelAlignForModify.informationStatusEffect ='蒸蒸日上'
      }else if (row.customer_name=='东南大学'){
        this.formLabelAlignForModify.customerName = row.customer_name
        this.formLabelAlignForModify.country = '中国'
        this.formLabelAlignForModify.provinceCityDistrict = '南京市'
        this.formLabelAlignForModify.detailAddress = '东南大学路2号'
        this.formLabelAlignForModify.postcode ='10286'
        this.formLabelAlignForModify.website ='seu.edu.cn'
        this.formLabelAlignForModify.taxIndentificationNumber ='13413105313231999'
        this.formLabelAlignForModify.taxClassification ='免税'
        this.formLabelAlignForModify.accountGroup ='国内'
        this.formLabelAlignForModify.enterpriseNature ='国有企业'
        this.formLabelAlignForModify.annualSaleRevenue ='28（万元）'
        this.formLabelAlignForModify.productType ='定制开发'
        this.formLabelAlignForModify.coreSoftwareBrand ='SAP'
        this.formLabelAlignForModify.informationStatusEffect ='蒸蒸日上'
      }
      depot.get({
        url:'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/getContactorForAdd',
        cb:(res)=>{
          console.log(res)
          this.tableData00.push(res.data[0])
        }
      })

      depot.get({
        url:'https://mobile-ms.uat.homecreditcfc.cn/mock/60f518719850ad001dfea41e/example/getCustomerCustomerForAdd',
        cb:(res)=>{
          console.log(res)
          this.tableData22.push(res.data[0])
        }
      })




/*
      this.$axios.post('',{
        customerName:row.customer_name
      })
      .then(function (res){

        console.log(res);
      })
      .catch(function (error){
        console.log(error);
      });
*/


    },
    open() {
      this.$alert('您的权限不足', '导出失败', '仅可预览', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          });
        }
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },

};
</script>

<style>


.el-aside {
  color: #333;
}
.el-card {
  max-width: 1050px;
  

}
</style>
