<template>
  <div class="features">
    <div class="h2 features__title theme-text-color animate">Features</div>
    <div v-for="item in features" :key="item.title" class="features__item">
      <div class="icon theme-background-2 animate">
        <img :src="item.icon" alt="" />
      </div>
      <div class="content">
        <div class="item-title theme-text-color animate">
          {{ item.title }}
        </div>
        <div class="item-text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features',
  data() {
    return {
      features: [
        {
          icon: require('@/assets/images/icons/features-ico-1.svg'),
          title: 'A challenge for a true champion',
          text:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
        {
          icon: require('@/assets/images/icons/features-ico-2.svg'),
          title: "Pilot's sweaty hands",
          text:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.features__title {
  margin-bottom: 32px;
}
.features__item {
  display: flex;
  margin-bottom: 16px;
}

.icon {
  border-radius: 16px;
  width: 80px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
}
.content {
  flex: 1;
  padding: 12px 0;
  min-height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item-title {
  margin-bottom: 8px;
  font-weight: 700;
}
.item-text {
  font-size: 14px;
  line-height: 1.4;
}

@media (max-width: 767px) {
  .features__title {
    margin-bottom: 20px;
  }
  .features__item {
    margin-bottom: 12px;
  }

  .icon {
    width: 64px;
    height: 80px;
    margin-right: 16px;
  }
  .icon img {
    max-width: 38%;
  }
  .content {
    padding: 4px 0 0;
  }
}
</style>
