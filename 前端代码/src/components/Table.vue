<template>
	<div class="header">
		<span class="header-left">
			<i class="el-icon-search"></i>
			<span>查询</span>
		</span>
		<span class="header-right">
			<el-button type="primary" class="export-button">导出</el-button>
		</span>
	</div>
	<div class="filter">
		<el-form class="filter-items" :model="filterCondition" ref="filterCondition">
			<el-form-item 
				v-for="item in filterItems" :label=item.label 
				:prop="item.prop" class="filter-item">
				<el-input v-if="item.type === 0" v-model="filterCondition[item.prop]"></el-input>
				<el-select v-else v-model="filterCondition[item.prop]">
					<el-option 
						v-for="option in item.options" :key="option.value" 
						:label="option.label" :value="option.value"
					></el-option>
				</el-select>
			</el-form-item>
		</el-form>
		<div class="filter-options">
			<el-button @click="resetForm">重置</el-button>
			<el-button type="primary" @click="getDataByCondition">查询</el-button>
		</div>
	</div>
	<el-table :data="tableData">
		<el-table-column v-for="title in tableTitle" :label="title">
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		props: {
			tableTitle: {
				type: Array,
				required: true
			},
			tableData: {
				type: Array,
				required: true
			},
			filterItems: {
				type: Array,
				required: true
			},
			apiURL: { // 请求数据的api地址
				type: String,
				default: ''
			}

		},
		data() {
			return {
				filterCondition: {},

			}
		},
		methods: {
			/* 向接口请求表格数据 */
			getDataByCondition() {
				console.log(this.filterCondition)
			},
			/* 重置筛选条件 */
			resetForm() {
				this.$refs['filterCondition'].resetFields();
			}
		},
		created() {
			for (let i = 0; i < this.filterItems.length; i++) {
				this.filterCondition[this.filterItems[i].prop] = '';
			}
		}
	}
</script>

<style scoped lang="less">
	.header {
		display: flex;
		align-items: center;
		margin-bottom: 20px;

		.header-right {
			margin-right: 100px;
			margin-left: auto;
		}
	}

	.filter {
		.filter-items {
			display: flex;
			flex-wrap: wrap;

			.filter-item {
				margin-bottom: 16px;
				margin-left: 16px;
				width: 260px;
			}

		}

		.filter-options {
			margin-top: 32px;
			text-align: right;

			.el-button:nth-of-type(1) {
				margin-right: 20px;
			}

			.el-button:nth-of-type(2) {
				margin-right: 100px;
			}
		}
	}
</style>
