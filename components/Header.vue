<template>
  <header class="header">
    <div class="flex align-items-center">
      <nuxt-link to="/" class="logo">
        <img :src="logo" alt="" />
      </nuxt-link>
      <div class="slogan">World's first affordable airsharing</div>
    </div>
    <div class="flex align-items-center">
      <button class="switch-theme-btn animate" @click="handlerTheme">
        <img :src="switchImg" alt="" />
        <span>{{ theme === 'light' ? 'Night' : 'Day' }} mod</span>
      </button>

      <UserNav />
    </div>
  </header>
</template>

<script>
import UserNav from '@/components/UserNav'
import { getterTypes, actionTypes } from '@/store'
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  components: {
    UserNav,
  },
  computed: {
    ...mapGetters({
      theme: getterTypes.getThemeName,
    }),
    logo() {
      return this.theme === 'light'
        ? require('@/assets/images/logo-day.svg')
        : require('@/assets/images/logo-night.svg')
    },
    switchImg() {
      return this.theme === 'light'
        ? require('@/assets/images/icons/night.svg')
        : require('@/assets/images/icons/day.svg')
    },
  },
  methods: {
    handlerTheme() {
      this.$store.dispatch(actionTypes.toggleTheme)
    },
  },
}
</script>

<style scoped>
.header {
  padding: 48px 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 170px;
  margin-right: 65px;
}

.switch-theme-btn {
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  background: none;
  padding: 6px 18px;
  align-items: center;
  color: #677b8f;
  outline: none;
  margin-right: 80px;
}
.light .switch-theme-btn:hover {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
.light .switch-theme-btn:active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
}
.dark .switch-theme-btn:hover {
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
}
.dark .switch-theme-btn:active {
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
}
.switch-theme-btn img {
  margin-right: 18px;
}

@media (max-width: 1280px) {
  .logo {
    margin-right: 30px;
  }

  .switch-theme-btn {
    margin-right: 30px;
  }
}

@media (max-width: 992px) {
  .header {
    padding-top: 26px;
  }

  .slogan {
    display: none;
  }
}

@media (max-width: 767px) {
  .header {
    padding: 12px 16px;
    margin-bottom: 8px;
  }

  .logo {
    width: 114px;
  }

  .switch-theme-btn {
    border-radius: 50%;
    padding: 0;
    width: 26px;
    height: 26px;
    justify-content: center;
    margin-right: 6px;
  }
  .switch-theme-btn span {
    display: none;
  }
  .switch-theme-btn img {
    margin: 0;
    width: 16px;
  }
}
</style>
