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
// 通过邮箱返回用户数据请求
export const SelectUserByEmail = function (email) {
  return request.get('/user/getuserbyemail', {
    params: {
      email: email,
      operator: 'admin'
    }
  })
}
// 获取验证码
export const GetVerifCode = function () {
  return request.get('/user/verifycode', {
    responseType: 'blob' 
  })
}
// 发送验证码
export const SendVerifEmail = function (email) {
  return request.get('/email/sendregisteremail', {
    params: {
      email: email
    }
  })
}
// 添加用户
export const AddUser = function (user,code,usercode) {
  return request.post('/user/register', {
      user: {
        username: user.username,
        password: user.password,
        name: user.name,
        phone: user.phone,
        email: user.email,
      },
      code: code,
      usercode:usercode
  })
}
// 修改密码
export const UpdatePassword = function (id,password) {
  return request.put('/user/updatepassword', {
    user: {
      id: id,
      password: password
    },
    operator: id
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
