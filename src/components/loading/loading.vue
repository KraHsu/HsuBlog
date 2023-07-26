<script setup lang="ts">
import { ref, onMounted } from "vue";
const loading = ref(true);
const wid = ref(5);

// 异步延迟
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const endLoading = async () => {
  const loadingElement = document.getElementById("loading")!;
  const mainContent = document.getElementById("main-container")!;

  // 停止加载
  loading.value = false;
  wid.value = 100;

  // 显示正常页面
  loadingElement.style.opacity = "0";
  document.body.style.overflow = "";
  mainContent.style.display = "";

  await sleep(1000);
  loadingElement.remove();
};

// 为完成加载时提供假进度
onMounted(async () => {
  if (document.readyState === "complete" && loading.value) {
    endLoading();
  }
  await sleep(100);
  if (loading.value) wid.value = 20;

  await sleep(1000);
  if (loading.value) wid.value = 75;

  await sleep(2000);
  if (loading.value) wid.value = 95;

  await sleep(7000);
  if (loading.value) endLoading();
});

// 完成加载时一步到位
document.onreadystatechange = async () => {
  if (document.readyState === "complete" && loading.value) {
    endLoading();
  }
};
</script>

<template>
  <div id="loading">
    <!-- 转动加载 -->
    <div class="load">
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
    <!-- 进度条 -->
    <div class="progress">
      <div class="progress-value" :style="{ width: wid + '%' }"></div>
    </div>
  </div>
</template>

<style scoped>
#loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  justify-content: center;
  align-items: center;
  background: #18171d;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
  margin: 0;
  transition: opacity 1s;
}

.progress {
  background: rgba(0 0 0 / 10%);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 40px;
  width: 800px;
}

.progress-value {
  background: var(--theme-color);
  border: 5px solid var(--theme-color);
  filter: drop-shadow(0px 0px 5px var(--theme-color));
  border-radius: 100px;
  height: 30px;
  transition: 1s;
}

.load {
  transform: scale(2);
  width: 100px;
  height: 100px;
  margin-bottom: 300px;
}
.load hr {
  border: 0;
  margin: 0;
  width: 40%;
  height: 40%;
  position: absolute;
  border-radius: 50%;
  animation: spin 2s ease infinite;
}

.load :first-child {
  background: #ff0077;
  border: 5px solid #ff0077;
  filter: drop-shadow(0 0 10px #ff0077);
  animation-delay: -1.5s;
}
.load :nth-child(2) {
  background: #00ffff;
  border: 5px solid #00ffff;
  filter: drop-shadow(0 0 10px #00ffff);
  animation-delay: -1s;
}
.load :nth-child(3) {
  background: yellow;
  border: 5px solid yellow;
  filter: drop-shadow(0 0 10px yellow);
  animation-delay: -0.5s;
}
.load :last-child {
  background: #99ff00;
  border: 5px solid #99ff00;
  filter: drop-shadow(0 0 10px #99ff00);
}

@keyframes spin {
  0%,
  100% {
    transform: translate(0);
  }
  25% {
    transform: translate(160%);
  }
  50% {
    transform: translate(160%, 160%);
  }
  75% {
    transform: translate(0, 160%);
  }
}

@keyframes blinkAnimation {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}
</style>

<!-- 加载动画修改自codepen
  
Copyright (c) 2023 by Traf (https://codepen.io/traf/pen/oKbaqQ)
Copyright (c) 2023 by Codrin Pavel (https://codepen.io/zerospree/pen/XWaGER)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->
