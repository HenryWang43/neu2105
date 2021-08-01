<template>
	<div id="clientManagement">
		<data-table 
			:table-title="clientTableTitle" :tableData="clientTableData"
			:filterItems="clientFilterItems"	
		></data-table>
	</div>
</template>

<script>
import dataTable from '../components/Table.vue';
	export default {
		data() {
			return {
				clientTableData: [],
				clientTableTitle: [
					'客户编号',
					'客户名称',
					'经营产品类型',
					'企业性质',
					'销售部门',
					'客户经理',
				],
				clientFilterItems: [
					{ 
						label: '客户名称',
						prop: 'clientName',
						type: 0, // type 0:input 1:select 
						options: [],
					},
					{
						label: '客户编号',
						prop: 'clientID',
						type: 0, // type 0:input 1:select 
						options: [],
					},
					{
						label: '企业性质',
						prop: 'companyType',
						type: 1, // type 0:input 1:select 
						options: [
							{
								label: '懒得查是什么部门了',
								value: '123'
							}
						],
					},
				]
			}
		},
		components: {
			dataTable
		}
	}
</script>

<style scoped lang="less">
	#clientManagement {
			
	}
</style>
