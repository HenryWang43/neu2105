<template>
<el-container style="height: 1200px; border: 0px solid #409EFF">

  <el-container>
    

    <el-main style="solid: #DCDFE6">
      <div>
      <el-avatar size="200" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <span style="text-align: right; font-size:25px">Welocme ，王小虎!</span>
    <div class="block">
    <span class="demonstration"></span>
    <el-carousel trigger="click" height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
  export default {
    
    
    methods:{
      },
      
  };
</script>

<style>


  .el-aside {
    color: #333;
  }
 
</style>
