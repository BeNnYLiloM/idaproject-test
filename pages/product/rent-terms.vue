<template>
  <div>
    <div class="text">{{ product.term_text }}</div>

    <ListWithBullets />
  </div>
</template>

<script>
import ListWithBullets from '@/components/ListWithBullets'

export default {
  name: 'RentTerms',
  components: {
    ListWithBullets,
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
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.4;
}
</style>
