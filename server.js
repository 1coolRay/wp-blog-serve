// 引入express
const express = require('express')
// 创建app
const app = express()
// 静态托管public文件夹，在public下创建一个index.html文件，启动服务时访问http://localhost:8084可以看到页面
app.use('/', express.static('public'))
// 允许express处理json格式数据，否则将不能处理前端传来的json数据
app.use(express.json())

app.listen(8084, () => {
    // http://localhost:8084
    console.log(`8084 has been already started ...`);
})

const db = require('./plugins/db')(app)