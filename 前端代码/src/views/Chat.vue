<template>
  <h1>欢迎{{ this.staffName }}进入聊天</h1>
  <div>
    <el-select
      v-model="selectName"
      style="padding: 40px; padding-left: 30px"
      filterable
      placeholder="请选择"
    >
      <el-option
        v-for="item in userNameList"
        :key="item.username"
        :label="item.staffName"
        :value="item.staffName"
      >
      </el-option>
    </el-select>
    <el-button @click="openNewTalkBar">Start talk</el-button>
  </div>
  <div style="width: 900px">
    <el-tabs tab-position="left">
      <el-tab-pane
        v-for="(pane, index) in tabItem"
        :key="pane"
        :label="pane.label"
      >
        <el-card>
          <template #header>
            <div class="card-header" height="400px">
              <span>{{ pane.label }}</span>
            </div>
          </template>
          <el-scrollbar height="450px">
            <div v-for="msg in pane.MsgList" :key="msg">
              <span>{{ msg.from }}:{{ msg.msg }}</span>
            </div>
          </el-scrollbar>
          <el-divider></el-divider>
          <el-row>
            <el-col :span="8"
              ><el-input placeholder="请输入内容" v-model="input" clearable>
              </el-input
            ></el-col>
            <el-col :span="2"></el-col>
            <el-button @click="sendMsg(index) ">发送</el-button>
          </el-row>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import mqtt from "mqtt";

export default {
  data() {
    return {
      options: {
        connectTimeout: 40000,
        clientId: new Date(),
        username: this.$store.state.user.username,
        password: "123456",
        clean: true, // 保留会话
      },
      connection: {
        host: "82.156.9.146",
        port: 8083,
        endpoint: "/mqtt",
        // 认证信息
      },
      subscription: {
        topic: "topic/mqttx",
        qos: 1,
      },
      publish: {
        topic: "topic/browser",
        qos: 1,
        payload: '{ "msg": "Hello, I am browser." }',
      },
      receiveNews: "",
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
      ],
      client: {
        connected: false,
      },
      subscribeSuccess: false,

      userNameList: [],
      staffName: "",
      selectName: "",
      input: "",
      tabItem: [
        {
          //tab内资源 -> label:聊天人/群聊名,MsgList:消息列表，
          label: "群聊",
          MsgList: [],
        },
      ],
    };
  },

  created() {
    this.initialUserNames();
  },
  methods: {
    initialUserNames() {
      //获取用户列表
      depot.get({
        url: "http://82.156.9.146:10230/NPMS-PROVIDER/npmstest/staff/selectAllStaffs",
        cb: (res) => {
          this.$store.state.staffs = res;
        },
      });
      if (Array.isArray(this.$store.state.staffs)) {
        for (var i = 0; i < this.$store.state.staffs.length; i++) {
          if (
            this.$store.state.staffs[i].username !=
            this.$store.state.user.username
          ) {
            this.userNameList.push(this.$store.state.staffs[i]);
          }
        }
      }

      this.staffName = this.$store.state.user.name;
      console.log(this.userNameList);
      this.createMQTT();
    },
    // 创建连接
    createMQTT() {
      this.createConnection();
    },
    createConnection() {
      // 连接字符串, 通过协议指定使用的连接方式
      // ws 未加密 WebSocket 连接
      // wss 加密 WebSocket 连接
      // mqtt 未加密 TCP 连接
      // mqtts 加密 TCP 连接
      // wxs 微信小程序连接
      // alis 支付宝小程序连接
      const connectUrl = "ws://82.156.9.146:8083/mqtt";
      console.log(this.options);
      try {
        this.client = mqtt.connect(connectUrl, this.options);
      } catch (error) {
        console.log("mqtt.connect error", error);
      }
      this.client.on("connect", () => {
        console.log("Connection succeeded!");
      });
      this.client.on("error", (error) => {
        console.log("Connection failed", error);
      });
      this.client.on("message", (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message);
        console.log(`Received message ${message} from topic ${topic}`);
        //处理接受新消息
        var from = topic.toString().split("/");
        var name = this.findSender(from[2]);
        console.log(this.findSender(from[2]));
        //如果是群聊
        if (from[1] == "group") {
          this.tabItem[0].MsgList.push({
            from: name,
            msg: message.toString(),
          });
        }
        //如果是私聊
        else {
          var senderName = this.findSender(from[2]);
          var flag = false;
          for (var i = 0; i < this.tabItem.length; i++) {
            if (senderName == this.tabItem[i].label) {
              flag = true;
              this.tabItem[i].MsgList.push({
                from: name,
                msg: message.toString(),
              });
            }
          }
          if (flag == false) {
            this.tabItem.push({
              label: name,
              MsgList: [
                {
                  from: name,
                  msg: message.toString(),
                },
              ],
            });
          }
        }
      });
    },
    findSender(sender) {
      var i;
      console.log("", this.$store.state.staffs);
      for (i = 0; i < this.userNameList.length + 1; i++) {
        if (sender == this.$store.state.staffs[i].username) {
          console.log(this.$store.state.staffs[i].staffName);
          var res = this.$store.state.staffs[i].staffName;
          return res;
        }
      }
    },
    findUsername(sender) {
      var i;
      console.log("", this.$store.state.staffs);
      for (i = 0; i < this.$store.state.staffs.length; i++) {
        if (sender == this.$store.state.staffs[i].staffName) {
          console.log(this.$store.state.staffs[i].username);
          var res = this.$store.state.staffs[i].username;
          return res;
        }
      }
    },

    sendMsg(index) {
      if (index != 0) {
        var sendUrl =
          "t/" +
          this.findUsername(this.tabItem[index].label) +
          "/" +
          this.$store.state.user.username;
        console.log(sendUrl);
        this.client.publish(
          sendUrl,
          this.input,

          { qos: 1 }
        );
        this.tabItem[index].MsgList.push({
          from: this.staffName,
          msg: this.input,
        });
        this.input = "";
      } else {
        this.client.publish(
          "t/group/" + this.$store.state.user.username,
          this.input,
          { qos: 1 }
        );
        this.input = "";
      }
    },
    doPublish() {
      const { topic, qos, payload } = this.publication;
      this.client.publish(topic, payload, qos, (error) => {
        if (error) {
          console.log("Publish error", error);
        }
      });
    },
    doSubscribe() {
      const { topic, qos } = this.subscription;
      this.client.subscribe(topic, qos, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe to topics res", res);
      });
    },
    openNewTalkBar() {
      this.tabItem.push({
        label: this.selectName,
        MsgList: [],
      });
    },
  },
};
</script>

<style>
</style>
