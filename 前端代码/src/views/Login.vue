<template>
  <div>
    <div class="login"></div>
    <div class="login-form">
      <el-form
        :model="form"
        ref="loginForm"
        label-width="50px"
        class="demo-ruleForm"
      >
        <div class="text-header">NPMS项目管理系统</div>
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model="form.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="form.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" size="mini" @click="login()"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { mapState, mapGetters, mapMutations } from "vuex";
export default defineComponent({
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  // setup() {
  //     const loginForm = ref(null);
  //     const form = reactive({
  //         account: 'admin',
  //         pass: '123456'
  //     });
  //     const submitForm = () => {
  //         console.log(form);
  //         if (form.account != "admin" || form.pass != "123456"){
  //             ElMessage('账号或密码错误');
  //             return;
  //         }
  //         localStorage.setItem('user', JSON.stringify(form));
  //         this.$router.push('/home');
  // 	};
  //     const resetForm = () => {
  //         loginForm.value.resetFields();
  //     };
  //     return {
  //         form,
  //         submitForm,
  //         resetForm,
  //         loginForm
  //     };
  // },
  methods: {
    ...mapMutations(["setToken"]),
    ...mapGetters(["getToken"]),
    login() {
      //post方式请求用户数据
      depot.post({
        url: "http://82.156.9.146:10230/NPMS-PROVIDER/npmstest/staff/selectStaffByUsername",
        data: {
          username: this.form.username,
        },
        cb: (res) => {
            if (res.password == this.form.password) {
            let token = "token";
            this.$store.commit("setuserName", this.form.username);
            this.$store.commit("setPassword", this.form.password);
            this.$store.commit('setName',res.staffName)
            this.$store.commit("setToken", token);
            this.$store.commit("setRoles", res.defaultAuthority);
            this.$router.go("/home");
          } else {
            ElMessage.warning("Invaild username or password");
            this.form.password = '';
          }
        },
      });
    },
  },
});
</script>

<style scoped lang="less">
.text-header {
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin-bottom: 50px;
}
.login {
  width: 100vw;
  height: 100vh;
  background-image: url("https://img.zcool.cn/community/01cae4589ebe40a8012060c8089812.jpg@1280w_1l_2o_100sh.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
}
.login-form {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 200px;
  right: 300px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<style lang="less">
.login-form {
  .el-form-item__label {
    color: #fff;
  }
}
</style>