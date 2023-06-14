<template>
    <div>
        <el-descriptions class="margin-top" title="赞助，求求，谢谢！" :column="3" :size="size" border>
            <template slot="extra">
            <el-button type="primary" size="small" @click="dialogFormVisible1= true">支付宝打款一百万！</el-button>
            <el-button type="primary" size="small" @click="dialogFormVisible2= true">微信赏你一毛QAQ </el-button>
            </template>
        </el-descriptions>

        <template>
            如果您喜欢我的作品，简单的捐赠是对我最大的物质和精神支持~谢谢您!
        </template>

        <!-- 修改密码弹窗 -->
        <el-dialog title="支付宝赏饭" :visible.sync="dialogFormVisible1">
            <img  style="width: 250px; " src="../assets/AliPay_F.jpg"   /> 
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible1= false">老板大气！</el-button>
            </div>
        </el-dialog>

        <!-- 修改密码弹窗 -->
        <el-dialog title="微信赏饭" :visible.sync="dialogFormVisible2">
            <img  style="width: 250px; " src="../assets/AliPay_F.jpg"   /> 
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible2= false">老板大气！</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
  methods: {
    
  },
  data () {
    return {
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      user: '',
      size: '',
    }
  },
 
  created () {
    
  },
  filters () {
    
  }
}
</script>

<style>

</style>
