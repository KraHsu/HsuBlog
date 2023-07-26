<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const THEME_KEY = "theme"; // 用于localStorage的key

const isLight = ref(localStorage.getItem(THEME_KEY) !== "dark"); // 从localStorage读取主题

const root = document.documentElement;

// 初始设置根元素的data-theme属性
onMounted(() => {
  root.setAttribute("data-theme", isLight.value ? "light" : "dark");
});

const svgClass = computed(() => {
  return isLight.value ? "light" : "dark";
});

const toggleSvg = () => {
  isLight.value = !isLight.value;

  // 存储新的主题设置到localStorage
  localStorage.setItem(THEME_KEY, svgClass.value);

  // 更新根元素的data-theme属性
  root.setAttribute("data-theme", svgClass.value);
};
</script>

<template>
  <div class="menu-button theme-control">
    <a @click="toggleSvg" href="javascript:void(0);" class="menu-button-link">
      <div class="menu-button-icon">
        <svg
          class="light"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            fill="currentColor"
            d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
          />
        </svg>
        <svg
          class="dark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            fill="currentColor"
            d="M495.8 0c5.5 0 10.9 .2 16.3 .7c7 .6 12.8 5.7 14.3 12.5s-1.6 13.9-7.7 17.3c-44.4 25.2-74.4 73-74.4 127.8c0 81 65.5 146.6 146.2 146.6c8.6 0 17-.7 25.1-2.1c6.9-1.2 13.8 2.2 17 8.5s1.9 13.8-3.1 18.7c-34.5 33.6-81.7 54.4-133.6 54.4c-9.3 0-18.4-.7-27.4-1.9c-11.2-22.6-29.8-40.9-52.6-51.7c-2.7-58.5-50.3-105.3-109.2-106.7c-1.7-10.4-2.6-21-2.6-31.8C304 86.1 389.8 0 495.8 0zM447.9 431.9c0 44.2-35.8 80-80 80H96c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"
          />
        </svg>
      </div>
    </a>
  </div>
</template>

<style scoped>
[data-theme="light"] .dark {
  display: none;
}

[data-theme="light"] .light {
  animation: var(--appear-animation);
}

[data-theme="dark"] .light {
  display: none;
}

[data-theme="dark"] .dark {
  animation: var(--appear-animation);
}
</style>
