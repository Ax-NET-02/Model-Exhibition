<template>
  <div class="image-card">
    <!-- 使用本地图片 -->
    <el-link :underline="false" href="#"><img :src="imageSrc" alt="Image" class="image" /></el-link>
    <div class="content">
      <h2 class="title">{{ title }}</h2>
      <div class="user-info">
        <!-- 使用本地图片 -->
        <img :src="avatarSrc" alt="Avatar" class="avatar" />
  
        <el-link :underline="false" href="#"><span class="username">{{ username }}</span></el-link>
      </div>
      <div class="likes">
        <span class="like-count"><var-icon name="thumb-up" /> {{ likeCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    avatarSrc: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    likeCount: {
      type: Number,
      required: true,
    },
  },
}
</script>
  
  <style scoped>
  /* Reset styles for margin and padding */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* 图片展示框 */
  .image-card {
    display: flex;
    flex-direction: column;
    width: 300px; /* 固定宽度 */
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  /* 图片部分 */
  .image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  /* 内容部分 */
  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  
  /* 标题 */
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #333;
    text-align: center;
  }
  
  /* 用户信息部分 */
  .user-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 12px;
  }
  
  /* 圆形头像 */
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }
  
  /* 用户名 */
  .username {
    font-size: 16px;
    color: #555;
  }
  
  /* 点赞数量部分 */
  .likes {
    margin-top: auto;
    text-align: right;
  }
  
  .like-count {
    font-size: 14px;
    color: #ff6600;
    font-weight: bold;
  }
  
  /* 响应式布局 */
  @media (max-width: 600px) {
    .image-card {
      width: 100%; /* 在小屏幕上，卡片宽度为100% */
    }
  
    .title {
      font-size: 16px; /* 调整标题字体大小 */
    }
  
    .username {
      font-size: 14px; /* 调整用户名字体大小 */
    }
  
    .like-count {
      font-size: 12px; /* 调整点赞字体大小 */
    }
  }
  </style>
  