function AjaxHttp(url, callback) {
	//01先创建 xml
	xhr = new XMLHttpRequest();
}
AjaxHttp.prototype.get = (url, callback) => {
	//02. 建立连接
	xhr.open("GET", url, true);

	//03 发送数据
	xhr.send();

	//04.接收数据

	xhr.onload = () => {
		if(xhr.status === 200) {
			callback(null, JSON.parse(xhr.responseText))
		} else {
			callback("出错了")
		}
	}
}
AjaxHttp.prototype.post = (url, data, callback) => {
	xhr.open("POST", url, true);
	//传送的数据 其实是在body 在发送的时候要把收集的数据 转换成 字符串
	//在发送之前 要设置请求头
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.send(JSON.stringify(data))

	xhr.onload = () => {
		callback(null, xhr.responseText)
	}
}

// let oHttp = new AjaxHttp();

// const dataobj = {
// 	"user": "asd",
// 	"pwd": 123456
// }

// oHttp.post("https://jsonplaceholder.typicode.com/posts", dataobj, (err, data) => {
// 	if(err) {
// 		console.log(err)
// 	} else {
// 		console.log(data)
// 	}
// })