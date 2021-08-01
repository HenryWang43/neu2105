	//导入axios模块
	import axios from 'axios'
	
	//axios全局配置
	//设置请求超时时间5s
	axios.defaults.timeout = 5000
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
	
	//创建一个axios实例
	const myAxios = axios.create()
	
	//get请求，params为请求参数
	myAxios.get(url, {params: params}).then(response => {
	    return response
	}).catch(err => {
	    throw err
	})
	
	//post请求，data为请求数据
	//其余请求，如：delete、put，修改myAxios后面对应的方法就行
	myAxios.post(url, data).then(response => {
	    return response
	}).catch(err => {
	    throw err
	})
	
	//axios请求拦截器
	myAxios.interceptors.request.use(config=>{
		console.log(config);
		return config
	},err=>{
		console.log(err);
	})
	
	// axios响应拦截
	myAxios.interceptors.response.use(res=>{
		console.log(res);
		return res
	},err=>{
		console.log(err);
	})
