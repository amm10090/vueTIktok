const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// 替换成您的MongoDB云服务连接字符串
const mongoURI = 'mongodb+srv://t2715481617:Tian1985.@cluster0.6x92nem.mongodb.net/';

// 连接到MongoDB数据库
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 定义一个产品模型
const Product = mongoose.model('Product', {
  title: String,
  description: String,
  date: String,
  image: String,
});

// 示例产品数据（仅需执行一次，之后可以注释掉）
const sampleProduct = new Product({
  title: '广丽塑胶',
  description: '111',
  date: '2023.4.30 - 2023.9.6',
  image: '/static/images/exhibition.png',
});

sampleProduct.save();

// 设置API路由
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
