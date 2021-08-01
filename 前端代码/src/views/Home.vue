<template>
	<div id="home">
		<el-container style="height: 100%;">
			<el-header class="header">
				<span style="text-align: left; font-size:28px;">NPMS项目管理系统</span>
				<span class="header-right">
					<el-dropdown>
						<span>
							<el-avatar size="200" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
							</el-avatar>
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item @click="logout">退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</span>
			</el-header>
			<el-container style="height: 100%;">
				<el-aside width="250px" class="aside">
					<side-navigation></side-navigation>
				</el-aside>
				<!-- <el-breadcrumb separator="/">
		  <el-breadcrumb-item :to="{ path: '/' }">NPMS项目管理系统</el-breadcrumb-item>
		  <el-breadcrumb-item :to="{ path: '/show' }"><a href="/">活动管理</a></el-breadcrumb-item>
		  <el-breadcrumb-item :to="{ path: '/create' }">活动列表</el-breadcrumb-item>
		  <el-breadcrumb-item :to="{ path: '/login' }">活动详情</el-breadcrumb-item>
		</el-breadcrumb> -->
				<el-main>
					<router-view></router-view>
					<!-- <span style="text-align: right; font-size:25px">欢迎使用系统，王小虎</span>
					<div class="block">
						<span class="demonstration"></span>
						<el-carousel trigger="click" height="350px">
							<el-carousel-item v-for="item in 4" :key="item">
								<h3 class="small">{{ item }}</h3>
							</el-carousel-item>
						</el-carousel>
					</div> -->
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import sideNavigation from '../components/SideNavigation.vue';

	export default {
		methods: {
			/* 退出登录 */
			logout() {
				this.$store.dispatch('logout')
				this.$router.push({path: '/login'})
			}
		},
		components: {
			sideNavigation
		}
	};
</script>

<style scoped lang="less">
	#home {
		
		height: 100%;
		.header {
			color: rgb(255, 255, 255);
			background: #409EFF;
			border-bottom: 1px solid #DCDFE6;
			box-shadow: 0 2px 8px 0 #e2ebf0;
			display: flex;
			z-index: 20;
			align-items: center;
			.header-right {
				margin-left: auto;
				margin-right: 20px;
			}
		}
		.aside {
			height: 100%;
			box-shadow: 0 2px 8px 0 #e2ebf0;
		}
	}
</style>
