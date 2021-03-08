<template>
  <div class="team">
    <div class="h2 team__title theme-text-color animate">
      Qualified specialists
    </div>

    <div class="team__wrap">
      <div v-for="item in dataTeam" :key="item.name" class="team__item">
        <div class="team__item-img">
          <img :src="item.img" alt="" />
        </div>
        <div>
          <div class="team__item-name theme-text-color animate">
            {{ item.name }}
          </div>
          <div class="team__item-post">
            {{ item.post }}
          </div>
        </div>
      </div>
    </div>

    <div class="team__text">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCards',
  data() {
    return {
      dataTeam: [
        {
          img: require('@/assets/images/common/team-img-1.jpg'),
          name: 'Marvin McKinney',
          post: 'Pilot assistant',
        },
        {
          img: require('@/assets/images/common/team-img-2.jpg'),
          name: 'Savannah Nguyen',
          post: 'Mechanic',
        },
        {
          img: require('@/assets/images/common/team-img-3.jpg'),
          name: 'Courtney Henry',
          post: 'Stewardess',
        },
      ],
    }
  },
}
</script>

<style scoped>
.team__title {
  margin-bottom: 32px;
}
.team__wrap {
  display: flex;
  margin-bottom: 32px;
}
.team__item:not(:last-child) {
  margin-right: 25px;
}
.team__item-img {
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  margin-bottom: 16px;
}
.team__item-name {
  font-weight: 700;
  margin-bottom: 8px;
}
.team__item-post {
  font-size: 12px;
}
.team__text {
  font-size: 14px;
  line-height: 1.4;
}

@media (max-width: 767px) {
  .team__title {
    margin-bottom: 20px;
  }
  .team__wrap {
    flex-direction: column;
  }
  .team__item {
    display: flex;
    align-items: center;
  }
  .team__item:not(:last-child) {
    margin-right: 0;
    margin-bottom: 12px;
  }
  .team__item-img {
    max-width: 132px;
    margin: 0 16px 0 0;
  }
}
</style>
