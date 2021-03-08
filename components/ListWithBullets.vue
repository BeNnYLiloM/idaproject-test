<template>
  <div class="list">
    <div class="title theme-text-color animate">Additional conditions:</div>

    <ul>
      <li v-for="(text, index) in textData" :key="index">
        {{ text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListWithBullets',
  data() {
    return {
      textData: [
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      ],
    }
  },
}
</script>

<style scoped>
.title {
  font-weight: 700;
  margin-bottom: 24px;
}
.list ul {
  margin: 0;
  padding: 0;
}
.list li {
  list-style: none;
  position: relative;
  padding-left: 24px;
  font-size: 14px;
  line-height: 1.4;
}
.list li::before {
  content: '';
  background: #f84ab3;
  border-radius: 50%;
  position: absolute;
  top: 7px;
  left: 0;
  width: 4px;
  height: 4px;
}
.list li:not(:last-child) {
  margin-bottom: 16px;
}
</style>
