const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
//获取用户
exports.getUser = async (ctx, next) => {
  //如果id != 1抛出API 异常
  if(ctx.query.id != 1){
    throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
  }else{
    ctx.body = {
      username: 'aaa',
      age: 30
    }
  }
}
//用户注册
exports.registerUser = async (ctx, next) => {
  console.log('registerUser', ctx.request.body);
}
