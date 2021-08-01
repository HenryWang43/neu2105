import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import './index.css'
import { router } from './route'
import axios from 'axios'
import depot from '../src/http/index'
import { ElMessage } from 'element-plus';
import VueAxios from 'vue-axios';
import { store } from '../store';

const app = createApp(App);
//全局配置
depot()
app.provide('$message', ElMessage)
app.use(VueAxios, axios)
app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')

