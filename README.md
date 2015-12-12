# request-demo

### 使用
```
node app.js // 启动一个简单的服务器

node client_get.js //执行get请求 

node client_post.js //执行post请求
```

### 说明
client_get 和 client_post 里面有请求的写法，涉及到参数传递、headers设置、cookie设置
app.js 作为服务器端，可以拿到参数、headers、cookie

1. 参数
```
//get 方式 
qs: {
	a: 1
}
// OR post 方式
form: {
		a: 1
	}
```
2. headers设置
```
	headers: {
		host:'ke.qq.com',
		origin:'http://ke.qq.com',
		refer: 'http://ke.qq.com'
	}
```
3. cookie设置
```
var j = request.jar();
var cookie = request.cookie('key1=value1;key2=value2');
j.setCookie(cookie, 'http://127.0.0.1');
```

### 引用
1. [npm request](https://www.npmjs.com/package/request)
