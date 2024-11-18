<template>

  <!-- 返回顶部 -->
  <div>
    <var-back-top :duration="300" />
  </div>

  <!-- 导航栏 -->
  <div>
    <!-- 顶部粘性布局 -->
    <var-sticky :offset-top="0">
      <var-app-bar title="阿轩的3D打印工作室" round
      color="linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)">

      <template #right>
        <var-icon name="checkbox-marked-circle" :size="26"/>
      </template>
    </var-app-bar>
    </var-sticky>

        <!-- 底部粘性布局 -->
    <var-sticky :offset-top="850">
      <var-row :gutter="10">
        <var-col :span="8">span: 8</var-col>
        <var-col :span="8">span: 8</var-col>
        <var-col :span="8">span: 8</var-col>
      </var-row>
    </var-sticky>
  </div>
  <StudioComponent />

  <!-- 轮番图 -->
  <div>
    <var-swipe class="swipe-example" :autoplay="2000">
      <var-swipe-item>
        <img class="swipe-example-image" src="./assets/images/csgo2.png" width="100%">
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-example-image" src="./assets/images/HK544.jpg" width="100%">
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-example-image" src="./assets/images/Knife.jpg" width="100%">
      </var-swipe-item>
    </var-swipe>
  </div>

  <!-- 中心展示图 -->
  <div>
    <var-row>
      <var-col :span="12"><img src="./assets/images/csgo2.png" alt="" width="100%"></var-col>
      <var-col :span="12"><img src="./assets/images/Knife.jpg" width="100%"></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>

      <var-col :span="12"><img src="./assets/images/csgo2.png" alt="" width="100%"></var-col>
      <var-col :span="12"><img src="./assets/images/Knife.jpg" width="100%"></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>

      <var-col :span="12"><img src="./assets/images/csgo2.png" alt="" width="100%"></var-col>
      <var-col :span="12"><img src="./assets/images/Knife.jpg" width="100%"></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>

      <var-col :span="12"><img src="./assets/images/csgo2.png" alt="" width="100%"></var-col>
      <var-col :span="12"><img src="./assets/images/Knife.jpg" width="100%"></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>

      <var-col :span="12"><img src="./assets/images/csgo2.png" alt="" width="100%"></var-col>
      <var-col :span="12"><img src="./assets/images/Knife.jpg" width="100%"></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>

      <var-col :span="12"><img src="./assets/images/csgo2.png" alt="" width="100%"></var-col>
      <var-col :span="12"><img src="./assets/images/Knife.jpg" width="100%"></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>

      <var-col :span="12"><img src="./assets/images/csgo2.png" alt="" width="100%"></var-col>
      <var-col :span="12"><img src="./assets/images/Knife.jpg" width="100%"></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
      <var-col :span="12"><var-image src="./assets/images/Knife.jpg" /></var-col>
    </var-row>
  </div>
</template>


<script>
import StudioComponent from './components/StudioComponent.vue'

export default {
  name: 'App',
  components: {
    StudioComponent
  }
}
</script>

<style>

</style>
