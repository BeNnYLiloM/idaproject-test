<template>
  <div>
    <div class="text">
      {{ product.team_text }}
    </div>

    <TeamCards />
  </div>
</template>

<script>
import TeamCards from '@/components/TeamCards'

export default {
  name: 'Team',
  components: {
    TeamCards,
  },
  layout: 'product',
  computed: {
    product() {
      return this.$store.getters.getProduct
    },
  },
}
</script>

<style scoped>
.text {
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 32px;
}
</style>
