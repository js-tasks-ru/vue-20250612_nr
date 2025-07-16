<script setup>
import UiStretch from './UiStretch.vue'
</script>

<template>
  <div class="page">
    <div class="row" style="--width: 272px; --height: 272px">
      <UiStretch class="sample">
        <div class="text">Text in the center</div>
      </UiStretch>

      <UiStretch class="sample">
        <img src="https://bkacontent.com/wp-content/uploads/2016/06/Depositphotos_31146757_l-2015.jpg" alt="" />
      </UiStretch>

      <UiStretch class="sample">
        <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" />
      </UiStretch>

      <UiStretch class="sample">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVnfNewMSK5t5IZL_Bunq1z124yzRHnF5Pg&s" alt="" />
      </UiStretch>

      <UiStretch class="sample">
        <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls></video>
      </UiStretch>
    </div>

    <div class="row" style="--width: 1400px; --height: 200px">
      <UiStretch class="sample">
        <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls></video>
      </UiStretch>
    </div>

    <div class="row" style="--width: 1400px; --height: 700px">
      <UiStretch class="sample">
        <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" controls></video>
      </UiStretch>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 1rem;
}

.row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.sample {
  border: 2px solid var(--blue);
  width: var(--width);
  height: var(--height);
  flex: 0 0 auto;
  background-color: #fff;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
