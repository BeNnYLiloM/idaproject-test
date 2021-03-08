<template>
  <div :class="theme">
    <div
      class="main-wrapper theme-background-1 animate"
      :class="{ 'open-form': isOpenForm }"
    >
      <div class="wrapper">
        <Header />
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { getterTypes } from '@/store'
import { mapGetters } from 'vuex'

export default {
  name: 'DefaultLayouts',
  components: {
    Header,
  },
  computed: {
    ...mapGetters({
      isOpenForm: getterTypes.getIsOpenAddProductForm,
      theme: getterTypes.getThemeName,
    }),
  },
}
</script>

<style>
@font-face {
  font-family: 'Codec Pro';
  src: url('@/assets/fonts/CodecPro-Bold.woff');
  src: url('@/assets/fonts/CodecPro-Bold.woff') format('woff'),
    url('@/assets/fonts/CodecPro-Bold.woff2') format('woff2');
  font-weight: 700;
}

@font-face {
  font-family: 'Codec Pro';
  src: url('@/assets/fonts/CodecPro-Light.woff');
  src: url('@/assets/fonts/CodecPro-Light.woff') format('woff'),
    url('@/assets/fonts/CodecPro-Light.woff2') format('woff2');
  font-weight: 300;
}

html,
body {
  font-family: 'Codec Pro', sans-serif;
  font-weight: 300;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

img {
  max-width: 100%;
  height: auto;
}

h1,
.h1 {
  font-size: 40px;
  font-weight: 700;
}

h2,
.h2 {
  font-size: 24px;
  font-weight: 700;
}

a,
button {
  user-select: none;
}

.main-wrapper {
  padding: 0 64px 48px;
}
.main-wrapper.open-form {
  height: 100vh;
  overflow: hidden;
}

.wrapper {
  max-width: 1920px;
  margin: 0 auto;
}

.w-100 {
  width: 100%;
}

.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}

.align-items-start {
  align-items: flex-start;
}
.align-items-end {
  align-items: flex-end;
}
.align-items-center {
  align-items: center;
}

.justify-content-start {
  justify-content: flex-start;
}
.justify-content-end {
  justify-content: flex-end;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-between {
  justify-content: space-between;
}
.justify-content-around {
  justify-content: space-around;
}

.page-block {
  border-radius: 48px;
  padding: 56px 64px;
}

.animate {
  transition: 0.2s ease-out;
}

.light {
  color: #677b8f;
}

.light .theme-background-1 {
  background: #fcfcfc;
}

.light .theme-background-2 {
  background: #f3f4f7;
}

.light .theme-text-color {
  color: #012345;
}

.dark {
  color: #99a7b5;
}

.dark .theme-background-1 {
  background: #012345;
}

.dark .theme-background-2 {
  background: #011c37;
}

.dark .theme-text-color {
  color: #fcfcfc;
}

@media (max-width: 1280px) {
  .main-wrapper {
    padding: 0 20px 26px;
  }

  .page-block {
    padding: 30px 28px;
    border-radius: 28px;
  }
}

@media (max-width: 767px) {
  h1,
  .h1 {
    font-size: 24px;
  }

  h2,
  .h2 {
    font-size: 20px;
  }

  .main-wrapper {
    padding: 0 0 20px;
  }

  .page-block {
    padding: 26px 16px 24px;
    border-radius: 24px;
  }
}
</style>
