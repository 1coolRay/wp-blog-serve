const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    // 用户名
    userName: {
        type: String,
        required: true,
        unique: true
    },
    // 密码：加密处理，需安装bcrypt插件，数据库存储加密后的密码
    password: {
        type: String,
        select: false,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        }
    }
}, {
    // 定义时间戳，添加数据时会自动加入下面两个字段：createTime和updateTime
    timestamps: {
        createdAt: 'createTime',
        updatedAt: 'updateTime'
    }
})

module.exports = mongoose.model('User', schema)