<template>
  <div class="container">
    <!-- Add your images and descriptions here, following the example below -->
    <div class="image-box">
      <img src="../assets/1.png" alt="Image 1" onclick="animateImage(this)">
      <p onclick="selectText(this)">Image 1 description</p>
    </div>
    <div class="image-box">
      <img src="../assets/2.png" alt="Image 1" onclick="animateImage(this)">
      <p onclick="selectText(this)">Image 1 description</p>
    </div>
    <div class="image-box">
      <img src="../assets/1.png" alt="Image 1" onclick="animateImage(this)">
      <p onclick="selectText(this)">Image 1 description</p>
    </div>
    <div class="image-box">
      <img src="../assets/2.png" alt="Image 1" onclick="animateImage(this)">
      <p onclick="selectText(this)">Image 1 description</p>
    </div>
    <div class="image-box">
      <img src="../assets/2.png" alt="Image 1" onclick="animateImage(this)">
      <p onclick="selectText(this)">Image 1 description</p>
    </div>
    <div class="image-box">
      <img src="../assets/1.png" alt="Image 1" onclick="animateImage(this)">
      <p onclick="selectText(this)">Image 1 description</p>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
     animateImage(image) {
      image.style.transform = 'scale(1.2)';
      setTimeout(() => {
        image.style.transform = 'scale(1)';
      }, 300);
    },
    selectText(text) {
      text.classList.toggle('selected');
    }
  }
}
</script>

<style lang="less" scoped>
 .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .image-box {
      width: 30%;
      margin-bottom: 20px;
      text-align: center;
    }
    img {
      width: 100%;
      cursor: pointer;
      transition: transform 0.3s;
    }
    img:hover {
      transform: scale(1.1);
    }
    p {
      cursor: pointer;
    }
    p.selected {
      background-color: yellow;
    }
</style>