<template>
  <view class="container">
    <view class="header">
      <text class="title">{{ product.title }}</text>
      <view class="menu">
        <text>...</text>
        <image src="/static/icon/more.png" class="icon"></image>
      </view>
    </view>
    <view class="content">
      <image :src="product.image" class="exhibition-image"></image>
      <view class="info">
        <text class="chinese-title">{{ product.description }}</text>
        <text class="english-title">Resistance of the Sleepers</text>
        <text class="date">{{ product.date }}</text>
      </view>
    </view>
    <view class="buttons">
      <button class="button">在线购票</button>
      <button class="button">语言导览</button>
    </view>
    <view class="footer">
      <text class="footer-title">精选展览</text>
      <navigator url="/pages/exhibition/exhibition" class="more-link">更多</navigator>
    </view>
    <view class="navbar">
      <navigator url="/pages/index/index" class="nav-item active">首页</navigator>
      <navigator url="/pages/explore/explore" class="nav-item">展览</navigator>
      <navigator url="/pages/events/events" class="nav-item">活动</navigator>
      <navigator url="/pages/profile/profile" class="nav-item">我的</navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      product: {}
    };
  },
  onLoad() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      uni.request({
        url: 'http://localhost:3000/api/products', // 请确保端口和URL正确
        success: (res) => {
          if (res.statusCode === 200) {
            this.product = res.data[0]; // 假设只返回一个产品
          }
        },
        fail: (err) => {
          console.error(err);
        }
      });
    }
  }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.container {
  @apply bg-white p-4;
}

.header {
  @apply flex justify-between items-center;
}

.title {
  @apply text-xl font-bold;
}

.menu {
  @apply flex items-center;
}

.icon {
  @apply w-5 h-5;
}

.content {
  @apply mt-4;
}

.exhibition-image {
  @apply w-full rounded-lg;
}

.info {
  @apply mt-2;
}

.chinese-title {
  @apply text-2xl font-bold;
}

.english-title {
  @apply text-sm text-gray-500;
}

.date {
  @apply text-sm text-gray-500;
}

.buttons {
  @apply flex justify-around mt-4;
}

.button {
  @apply bg-gray-100 p-2 rounded-lg shadow-md;
}

.footer {
  @apply mt-4;
}

.footer-title {
  @apply text-lg font-bold;
}

.more-link {
  @apply text-sm text-orange-500;
}

.navbar {
  @apply fixed bottom-0 left-0 w-full flex justify-around bg-white border-t border-gray-200;
}

.nav-item {
  @apply text-center p-2;
}

.nav-item.active {
  @apply text-orange-500;
}
</style>
