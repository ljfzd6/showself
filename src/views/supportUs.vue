<template>
    <div>
        <el-descriptions class="margin-top" title="赞助，求求，谢谢！" :column="3" :size="size" border>
            <template slot="extra">
            <el-button type="primary" size="small" @click="dialogFormVisible1= true">打款一百万！</el-button>
            <el-button type="primary" size="small" @click="dialogFormVisible2= true">赏你一毛QAQ </el-button>
            </template>

            <el-descriptions-item>
                <p>阿里嘎多思密达！<p>
            </el-descriptions-item>
            
        </el-descriptions>

        <!-- 修改密码弹窗 -->
        <el-dialog title="支付宝赏饭" :visible.sync="dialogFormVisible1">
            <el-image style="width: 100px; height: 100px" :src="@/assets/background.jpg" :fit="fit"></el-image>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible1= true">老板大气！</el-button>
            </div>
        </el-dialog>

        <!-- 修改密码弹窗 -->
        <el-dialog title="微信赏饭" :visible.sync="dialogFormVisible2">
            <el-image style="width: 100px; height: 100px" :src="@/assets/background.jpg" :fit="fit"></el-image>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible2= true">老板大气！</el-button>
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
