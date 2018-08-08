<template>
  <div class="app">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Electron Starter App"
    };
  }
};
</script>

<style>
.app {
  width: 100%;
  height: calc(100vh - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1.5vh + 1.5vw);
}
</style>
