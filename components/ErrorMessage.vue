<template>
  <div class="error">
    <div class="error-title">An error has occurred</div>
    <div class="error-text">Please refresh the page</div>
    <div class="error-btn" @click="reload">Realod page</div>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  methods: {
    reload() {
      window.location.reload()
    },
  },
}
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
}
.error-title {
  font-size: 40px;
  color: #012345;
  margin-bottom: 24px;
  font-weight: 700;
}
.error-text {
  font-size: 14px;
  margin-bottom: 40px;
}
.error-btn {
  background: #4959ff;
  border-radius: 12px;
  display: inline-flex;
  width: 161px;
  height: 48px;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 767px) {
  .error-title {
    font-size: 24px;
    margin-bottom: 16px;
  }
  .error-text {
    margin-bottom: 32px;
  }
  .error-btn {
    width: 133px;
    height: 44px;
  }
}
</style>
