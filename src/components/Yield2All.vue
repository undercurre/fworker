<template>
  <div>
    <h1>YieldsAll</h1>
    <input type="text" v-model="inputValue" @input="saveSettings" />
    <div>
      <span>{{ inputValueDisplay }}</span>
    </div>
    <div class="spinner" :class="{ spinning: isSaving }"></div>
  </div>
</template>

<style>
button.disabled {
  background-color: #ccc;
  color: #888;
}
.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: #333;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinning {
  animation-play-state: running;
}
</style>

<script setup>
import { ref } from "vue";

const isSaving = ref(false);
const inputValueDisplay = ref("");
const inputValue = ref("");

function validateForm() {
  // 模拟验证表单
  let start = Date.now();
  while (Date.now() - start < 1000); // 模拟耗时1秒
}

function showSpinner() {
  // 模拟显示加载指示器
  isSaving.value = true;
}

function saveToDatabase() {
  // 模拟保存到数据库的耗时操作
  let start = Date.now();
  while (Date.now() - start < 2000); // 模拟耗时2秒
}

function updateUI() {
  inputValueDisplay.value = inputValue.value;
  // 模拟UI更新
}

function sendAnalytics() {
  // 模拟发送分析数据
  let start = Date.now();
  while (Date.now() - start < 2000); // 模拟耗时1秒
}

function yieldToMain() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

async function saveSettings() {
  // Create an array of functions to run:
  const tasks = [
    validateForm,
    showSpinner,
    saveToDatabase,
    updateUI,
    sendAnalytics,
  ];

  // Loop over the tasks:
  while (tasks.length > 0) {
    // Shift the first task off the tasks array:
    const task = tasks.shift();

    // Run the task:
    task();

    // Yield to the main thread:
    await yieldToMain();
  }
  isSaving.value = false;
}
</script>
