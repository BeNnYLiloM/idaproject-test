<template>
  <div class="flex align-items-center">
    <button class="user-btn">
      <img src="@/assets/images/icons/message.svg" alt="" />
    </button>

    <button class="user-btn">
      <img src="@/assets/images/icons/notification.svg" alt="" />
      <div class="new animate"></div>
    </button>

    <div class="user animate">
      <div class="user__name">Bessie Cooper</div>
      <div class="user__img">
        <img src="@/assets/images/common/avatar.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserNav',
}
</script>

<style scoped>
.user {
  display: flex;
  align-items: center;
  margin-left: 50px;
  font-weight: 700;
}
.light .user {
  color: #012345;
}
.dark .user {
  color: #fcfcfc;
}
.user__img {
  border-radius: 50%;
  width: 56px;
  height: 56px;
  overflow: hidden;
  margin-left: 16px;
}

.user-btn {
  border: none;
  border-radius: 50%;
  user-select: none;
  background: none;
  transition: 0.2s ease-out;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 4px;
  outline: none;
}
.light .user-btn:hover {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}
.dark .user-btn:hover {
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);
}

.new {
  position: absolute;
  width: 14px;
  height: 14px;
  top: 4px;
  right: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.new::before {
  content: '';
  border-radius: 50%;
  width: 6px;
  height: 6px;
}
.light .new {
  background: #fff;
}
.light .new::before {
  background: #f84ab3;
}
.dark .new {
  background: #012345;
}
.dark .new::before {
  background: #f71d9f;
}

@media (max-width: 1280px) {
  .user {
    margin-left: 20px;
  }
}

@media (max-width: 767px) {
  .user__name {
    display: none;
  }
  .user__img {
    width: 32px;
    height: 32px;
    margin: 0;
  }
  .user-btn {
    width: 26px;
    height: 26px;
    margin-left: 10px;
  }
  .user-btn img {
    width: 16px;
  }

  .new {
    width: 12px;
    height: 12px;
    top: 0px;
    right: 1px;
  }
}
</style>
