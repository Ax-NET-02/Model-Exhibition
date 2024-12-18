<template>
  <div>
    <var-back-top :duration="300" />
  </div>
  <div class="layout">
    <!-- 左侧按钮部分 -->
    <div class="left-buttons">
      <el-button type="info">探索</el-button>
      <el-button type="success">关注</el-button>
    </div>

    <!-- 右侧图标部分 -->
    <div class="right-icon">
      <var-badge type="danger" dot>
        <el-link :underline="false" href="https://element-plus.org"><var-icon name="bell-outline" :size="30"/></el-link>
      </var-badge>
    </div>
  </div>

  <div>
    <el-input
      v-model="input4"
      size="large"
      placeholder="请输入内容"
    >
      <template #prefix>
        <el-icon class="el-input__icon"><search /></el-icon>
      </template>
    </el-input>
  </div>

  <div>
    <el-carousel height="200px" motion-blur>
    <el-carousel-item v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt" style="width: 100%; height: 100%; object-fit: cover;" />
    </el-carousel-item>
  </el-carousel>
  </div>

  <div id="app" style="padding-top: 2%;">
    <!-- 图片尺寸 400x250 -->
    <ImageCard
      :imageSrc="require('@/assets/images/Knife.jpg')"
      title="泰坦陨落2-数据刀"
      :avatarSrc="require('@/assets/images/ab.jpg')"
      username="Ax-NET"
      :likeCount="85"
    />
  </div>

  <div id="app" style="padding-top: 2%;">
    <!-- 图片尺寸 400x250 -->
    <ImageCard
      :imageSrc="require('@/assets/images/MIYM.png')"
      title="绝区零-星见雅cos道具"
      :avatarSrc="require('@/assets/images/ab.jpg')"
      username="Ax-NET"
      :likeCount="20"
    />
  </div>

  <div id="app" style="padding-top: 2%;">
    <!-- 图片尺寸 400x250 -->
    <ImageCard
      :imageSrc="require('@/assets/images/xingqir.jpg')"
      title="星期日-光环cos道具"
      :avatarSrc="require('@/assets/images/ab.jpg')"
      username="Ax-NET"
      :likeCount="20"
    />
  </div>
  <!-- Studio 组件 -->
  <StudioComponent />
</template>

<script>
import { ref } from 'vue'
import StudioComponent from './components/StudioComponent.vue'
import ImageCard from './components/ImageCard.vue'

export default {
  name: 'App',
  components: {
    StudioComponent,
    ImageCard,
  },
  setup() {
    const active = ref(0);
    return { active };
  },
  data() {
    return {
      images: [
        { src: require('@/assets/images/bk2.jpg'), alt: 'Image 1' },
        { src: require('@/assets/images/csgo2.png'), alt: 'Image 2' },
        { src: require('@/assets/images/bk1.jpg'), alt: 'Image 3' },
      ],
    };
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  justify-content: space-between; /* 左右分隔，按钮在左，图标在右 */
  align-items: center;
  padding: 10px;
}

.left-buttons {
  display: flex;
  gap: 20px; /* 控制“探索”和“关注”按钮之间的间距 */
}

.right-icon {
  display: flex;
  justify-content: flex-end;
}

.img_cc{
  display: flex;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
