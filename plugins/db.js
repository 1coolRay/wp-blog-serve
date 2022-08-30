module.exports = app => {
    const mongoose = require('mongoose');
    // 在使用“FindAndDupDate（）”和“FindAndDelete（）”时，将useFindAndModify设置为false，否则会报错
    // server-database数据库名称，会自动创建
    mongoose.set('useFindAndModify', false);
    mongoose.connect('mongodb://127.0.0.1:27017/server-database', {
        useCreateIndex: true,       // 解决弃用警告
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, function (error) {
        if (error) {
            console.log("数据库连接失败")
        } else {
            console.log("数据库连接成功")
        }
    })
}