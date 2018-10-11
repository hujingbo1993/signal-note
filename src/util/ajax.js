var ajax = function(method, path, headers, data, reseponseCallback) {
  var r = new XMLHttpRequest();
  // 设置请求方法和请求地址
  r.open(method, path, true);
  // 设置发送的数据的格式
  r.setRequestHeader('Content-Type', 'application/json');
  // 注册响应函数
  r.onreadystatechange = function() {
    if (r.readyState === 4) {
      reseponseCallback(r);
    }
    // if (r.readyState === 4) {
    //     console.log('state change', r, r.status, r.response)
    //     var response = JSON.parse(r.response)
    //     console.log('response', response)
    // } else {
    //     console.log('change')
    // }
  };
  // 发送请求
  r.send(data);
};
export default ajax;
