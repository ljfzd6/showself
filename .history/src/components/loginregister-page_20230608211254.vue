<template>
  <div>
    <div class="main-bg">
      <h1>注册登录</h1>
      <!-- //title -->
      <div class="sub-main-w3" style="padding-left: 200px;margin-top: 20px;">
        <!-- vertical tabs -->
        <div class="vertical-tab">
          <div id="section1" class="section-w3ls">
            <input type="radio" name="sections" id="option1" checked>
            <label for="option1" class="icon-left-w3pvt"><span class="fa fa-user-circle" aria-hidden="true"></span>登录</label>
            <article>
              <form method="get">
                <h3 class="legend">在这登录</h3>
                <div class="input">
                  <span class="fa fa-user-o" aria-hidden="true"></span>
                  <input type="text" placeholder="邮箱" v-model="user.email" required />
                </div>
                <div class="input">
                  <span class="fa fa-key" aria-hidden="true"></span>
                  <input type="password" placeholder="密码" v-model="user.password" required />
                </div>
                <div class="input">
                  <span class="fa fa-key" aria-hidden="true"></span>
                  <input type="text" placeholder="验证码" v-model="verifycode" required />
                  <img :src="coderequst" v-on:click="refreshcode()">
                </div>
                <input type="submit" class="btn submit" @click.prevent="login()" value="登录">
              </form>
            </article>
          </div>
          <div id="section2" class="section-w3ls">
            <input type="radio" name="sections" id="option2">

            <label for="option2" class="icon-left-w3pvt"><span class="fa fa-pencil-square" aria-hidden="true"></span>注册</label>
            <article>
              <form action="#" method="post">
                <h3 class="legend">在这注册</h3>
                <div class="input">
                  <span aria-hidden="true"></span>
                  <input type="text" placeholder="用户名" v-model="user.username" required />
                </div>
                <div class="input">
                  <span aria-hidden="true"></span>
                  <input type="password" placeholder="密码" v-model="user.password" required />
                </div>
                <div class="input">
                  <span aria-hidden="true"></span>
                  <input type="password" placeholder="真实姓名" v-model="user.name" required />
                </div>
                <div class="input">
                  <span aria-hidden="true"></span>
                  <input type="password" placeholder="邮箱" v-model="user.email" required />
                </div>
                <div class="input">
                  <span aria-hidden="true"></span>
                  <input type="password" placeholder="电话号码" v-model="user.phone" required />
                </div>
                <!-- <div class="input1">
                    <span aria-hidden="true"></span>
                  <el-radio v-model="user.sex" label="1" size="mini" >备选项</el-radio>
                <el-radio v-model="user.sex" label="2" size="mini">备选项</el-radio>
                </div> -->
                <div class="container">
                    <div class="segmeted-control">
                        <input type="radio" name="tab1" id="tab-1" value="1" checked/>
                        <label for="tab-1" class="segmented-control_1">
                            <p>tab1</p>
                        </label>
                        <input type="radio" name="tab2" id="tab-1" value="0" checked/>
                        <label for="tab-2" class="segmented-control_2">
                            <p>tab2</p>
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn submit">注册</button>
              </form>
            </article>
          </div>
          <div id="section3" class="section-w3ls">
            <input type="radio" name="sections" id="option3">
            <label for="option3" class="icon-left-w3pvt"><span class="fa fa-lock" aria-hidden="true"></span>忘记密码?</label>
            <article>
              <form action="#" method="post">
                <h3 class="legend last">重置密码</h3>
                <p class="para-style">输入你的邮箱并根据邮箱中的提示重置密码</p>
                <div class="input">
                  <span aria-hidden="true"></span>
                  <input type="email" placeholder="Email" name="email" required />
                </div>
                <button type="submit" class="btn submit last-btn">重置</button>
              </form>
            </article>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>{{ msg }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="ok()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Login } from '@/api/userApI.js'
export default {
  data() {
    return {
      type: 'common',
      user: {
        id: '',
        username: '',
        password: '',
        name: '',
        email: '',
        phone: '',
        sex: '',
        grade: ''
      },
      verifycode: '',
      coderequst: 'api/user/verifycode',
      msg: '',
      dialogVisible: false
    }
  },
  methods: {
    async login() {
      const { data: res } = await Login(this.user.email, this.user.password, this.verifycode)
      console.log(res.code + res.msg + res.data)
      if (res.code == 200) {
        this.type = 'login'
        this.user.id = res.data.id
        this.user.username = res.data.username
        this.msg = res.msg
        this.$store.dispatch('updateuser', this.user)
        this.dialogVisible = true
      } else {
        this.msg = res.msg
        this.type = 'common'
        this.dialogVisible = true
      }
    },
    ok() {
      if (this.type == 'login') {
        this.dialogVisible = false
        this.$router.push('/workplace/userinformation')
      } else {
        this.dialogVisible = false
        this.$router.push('/login')
      }
    },
    refreshcode() {
      this.coderequst = 'api/user/verifycode?' + new Date().getTime()
    }
  }
}
</script>

<style lang="less" scoped>
/*--
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
--*/

/* reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
sub,
sup,
tt,
var,
b,
u,
i,
dl,
dt,
dd,
ol,
nav ul,
nav li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
copyright,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
copyright,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* start editing from here */
a {
  text-decoration: none;
}

.txt-rt {
  text-align: right;
}

/* text align right */
.txt-lt {
  text-align: left;
}

/* text align left */
.txt-center {
  text-align: center;
}

/* text align center */
.float-rt {
  float: right;
}

/* float right */
.float-lt {
  float: left;
}

/* float left */
.clear {
  clear: both;
}

/* clear float */
.pos-relative {
  position: relative;
}

/* Position Relative */
.pos-absolute {
  position: absolute;
}

/* Position Absolute */
.vertical-base {
  vertical-align: baseline;
}

/* vertical align baseline */
.vertical-top {
  vertical-align: top;
}

/* vertical align top */
nav.vertical ul li {
  display: block;
}

/* vertical menu */
nav.horizontal ul li {
  display: inline-block;
}

/* horizontal menu */
img {
  max-width: 100%;
}

/* //end reset */

body {
  font-size: 100%;
  font-family: 'Roboto', sans-serif;
}

.main-bg {
  background: url(../assets/background.jpg) no-repeat center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  min-height: 100vh;
}

/* title */
h1 {
  font-size: 3vw;
  color: #fff;
  text-align: center;
  padding: 2.5vw 1vw 1vw;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 600;
}

/* //title */

.sub-main-w3 {
  margin: 1.5vw 16vw;
  margin: 5vw auto;
  max-width: 1067px;
}

/* vertical tabs */
.vertical-tab {
  color: #333;
  display: block;
  margin: auto;
  position: relative;
  float: left;
  /* width: 70%; */
}

.image-style {
  float: left;
  width: 25%;
}

.vertical-tab input[name='sections'] {
  left: -9999px;
  position: absolute;
  top: -9999px;
}

.vertical-tab .section-w3ls {
  display: block;
}

.vertical-tab .section-w3ls label {
  background: #fff;
  border-right: 1px solid #dcdcdc;
  cursor: pointer;
  display: block;
  font-size: 17px;
  padding: 33px 20px;
  position: relative;
  width: 189px;
  z-index: 100;
  color: #111;
  text-align: center;
}

.vertical-tab .section-w3ls article {
  display: none;
  left: 230px;
  min-width: 570px;
  position: absolute;
  top: 0;
}

/* .vertical-tab .section-w3ls article:after {
    background-color: #fff;
    bottom: 0;
    content: "";
    display: block;
    left: -229px;
    position: absolute;
    top: 0;
    width: 220px;
    z-index: 1;
} */

.vertical-tab input[name='sections']:checked + label {
  background: #00ad45;
  border-right: 1px solid #000;
  color: #fff;
}

.vertical-tab input[name='sections']:checked ~ article {
  display: block;
}

label.icon-left-w3pvt span {
  display: block;
  font-size: 30px;
  margin-bottom: 7.8px;
}

/* //vertical tabs */

/* form style */
.sub-main-w3 form {
  background: #ffff;
  padding: 2em;
}

.legend {
  color: #000;
  font-size: 24px;
  text-align: center;
  margin-bottom: 1.2em;
  font-weight: 400;
}

p.para-style {
  margin-bottom: 0.8em;
  font-size: 15px;
  letter-spacing: 0.5px;
  line-height: 1.8;
}

p.para-style-2 {
  font-size: 15px;
  letter-spacing: 0.5px;
  line-height: 1.8;
  margin-bottom: 2em;
}

p.para-style-2 a {
  color: blue;
}

.input {
  margin-bottom: 1em;
  padding: 13px 15px;
  border: 1px solid blueviolet;
  background: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.input1 {
  border: 1px solid blueviolet;
  background: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.input span {
  font-size: 15px;
  color: #464646;
  margin-right: 10px;
}

.input input {
  color: #000;
  font-size: 14px;
  letter-spacing: 1px;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
}

.submit {
  margin: 2.3em auto 0;
  background: #00ad45;
  border: none;
  cursor: pointer;
  font-weight: 600;
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;
  transition: 0.5s all;
  display: block;
  color: #fff;
  padding: 14px 30px;
  -webkit-border-radius: 0;
  -o-border-radius: 0;
  -ms-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  font-size: 15px;
  letter-spacing: 2px;
  width: 100%;
}

.submit:hover {
  opacity: 0.8;
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;
  transition: 0.5s all;
}

a.bottom-text-w3ls {
  color: #757474;
  font-size: 14px;
  display: inherit;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 3.2em;
}

/* //form style */

/* copyright */
.copyright {
  margin-top: 9vw;
  padding-bottom: 1.5vw;
}

.copyright h2 {
  font-size: 15px;
  color: #fff;
  letter-spacing: 1px;
  text-align: center;
  line-height: 1.8;
}

.copyright h2 a {
  color: #fff;
  font-weight: bold;
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;
  transition: 0.5s all;
}

.copyright h2 a:hover {
  opacity: 0.8;
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;
  transition: 0.5s all;
}

/* //copyright */

/* responsive */
@media (max-width: 1080px) {
  h1 {
    font-size: 4vw;
  }
}

@media (max-width: 1050px) {
  .sub-main-w3 {
    max-width: 900px;
  }

  .vertical-tab .section-w3ls article {
    min-width: 445px;
  }

  p.para-style-2 {
    font-size: 14px;
    margin-bottom: 1em;
  }

  p.para-style {
    margin-bottom: 0.7em;
    font-size: 14px;
  }
}

@media (max-width: 900px) {
  .sub-main-w3 {
    max-width: 768px;
  }

  .vertical-tab .section-w3ls article {
    min-width: 400px;
    left: 175px;
  }

  .vertical-tab .section-w3ls label {
    width: 134px;
    font-size: 15px;
    padding: 34px 20px;
  }

  h1 {
    font-size: 5vw;
    padding: 4.5vw 1vw 1vw;
  }
}

@media (max-width: 768px) {
  .sub-main-w3 {
    max-width: 575px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .image-style {
    float: none;
    width: 100%;
    min-height: 300px;
    order: 2;
  }

  .vertical-tab {
    float: none;
    width: 100%;
  }
}

@media (max-width: 667px) {
  h1 {
    font-size: 6vw;
  }
}

@media (max-width: 640px) {
  .copyright h2 {
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  .sub-main-w3 {
    max-width: 500px;
  }

  .vertical-tab .section-w3ls article {
    min-width: 365px;
    left: 135px;
  }

  .vertical-tab .section-w3ls label {
    width: 114px;
    font-size: 15px;
    padding: 31px 10px;
  }

  h1 {
    font-size: 7vw;
  }
}

@media (max-width: 480px) {
  .vertical-tab .section-w3ls article {
    min-width: 291px;
    left: 109px;
  }

  .vertical-tab .section-w3ls label {
    width: 89px;
    font-size: 14px;
    padding: 26.8px 10px;
  }

  .sub-main-w3 {
    max-width: 400px;
  }

  .image-style {
    min-height: 220px;
  }

  .sub-main-w3 form {
    padding: 1.5em;
  }

  .submit {
    font-size: 14px;
  }

  .input input {
    font-size: 13px;
  }

  p.para-style {
    margin-bottom: 0.4em;
    font-size: 13px;
  }

  p.para-style-2 {
    font-size: 13px;
  }

  .input {
    padding: 12px 12px;
  }

  a.bottom-text-w3ls {
    margin-top: 3em;
  }

  .last-btn {
    margin: 1em auto 0;
  }

  .copyright h2 {
    font-size: 12px;
  }
}

@media (max-width: 414px) {
  .sub-main-w3 {
    max-width: 320px;
  }

  .vertical-tab .section-w3ls article {
    position: static;
  }

  .vertical-tab .section-w3ls label {
    width: 100%;
    font-size: 14px;
    padding: 20px 0;
    border-right: none;
    border-bottom: 1px solid #dcdcdc;
    border-top: 1px solid #dcdcdc;
  }

  .vertical-tab input[name='sections']:checked + label {
    border-right: none;
    border-bottom: 1px solid #000;
    border-top: none;
  }

  .image-style {
    min-height: 190px;
  }

  h1 {
    font-size: 1.8em;
    padding: 6.5vw 1vw 3vw;
  }

  .copyright h2 {
    font-size: 13px;
  }

  .last-btn {
    margin: 1.5em auto 0;
  }

  p.para-style {
    margin-bottom: 1em;
  }

  p.para-style-2 {
    margin-bottom: 2em;
  }
}

@media (max-width: 320px) {
  .sub-main-w3 {
    max-width: 270px;
  }

  .vertical-tab .section-w3ls article {
    min-width: 270px;
  }
}
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    background: var(--white);
}
.segmented-control {
    width: 20.4rem;
    height: 4rem;
    box-shadow: .3rem .3rem .6rem var
    (--white),
    -.2rem -.2rem .5rem var(--white);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    input {
        display: none;
    }
    &_1,&_2 {
        width: 6.8rem;
        height: 3.6rem;
        font-size: 1.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--greyDark);
        &:hover {
            color: var(--primary);
        }
    }
}
/* //responsive */
</style>
