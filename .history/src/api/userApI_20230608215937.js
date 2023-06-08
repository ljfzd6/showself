import request from '@/utils/request.js'
//登录
export const Login = function (email, password,verifycode) {
  // 请求路径
  return request.get('/user/login', {
    params: {
      email: email,
      password: password,
      verifyCode: verifycode
    }
  })
}
// 通过id返回用户数据请求
export const SelectUserById = function (id) {
  return request.get('/user/getuserbyid', {
    params: {
      id: id
    }
  })
}
// 获取验证码
export const GetVerifCode = function () {
  return request.get('/user/verifycode', {
    responseType: 'blob' 
  })
}
// // 修改用户数据
// export const UpdateUserInformation = function (user) {
//   console.log('准备发送的' + user.id + user.username + user.password + user.age + user.name + user.phone + user.address)
//   return request.get('/user/updateuser', {
//     params: {
//       id: user.id,
//       username: user.username,
//       password: user.password,
//       age: user.age,
//       name: user.name,
//       phone: user.phone,
//       address: user.address,
//       email: user.email
//     }
//   })
// }
// // 发送验证码
// export const SendVerifCode = function (username) {
//   return request.get('/user/passwordVerifCode', {
//     params: {
//       username: username
//     }
//   })
// }
// // 修改密码
// export const UpdatePassword = function (username, verifcode, password) {
//   return request.get('/user/updatepassword', {
//     params: {
//       username: username,
//       password: password,
//       verifcode: verifcode
//     }
//   })
// }
// // 获取全部用户
// export const GetAllUser = function () {
//   return request.get('/user/getalluser')
// }
// // 删除指定用户
// export const DeleteUser = function (username) {
//   return request.get('/user/deleteuser', {
//     params: {
//       username: username
//     }
//   })
// }
// 添加用户
export const AddUser = function (user) {
  return request.get('/user/register', {
    params: {
      username: user.username,
      password: user.password,
      name: user.name,
      phone: user.phone,
      email: user.email
    }
  })
}
