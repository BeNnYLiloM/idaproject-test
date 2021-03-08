<template>
  <div>
    <div class="text">
      {{ product.specifications_text }}
    </div>

    <Features />
  </div>
</template>

<script>
import Features from '@/components/Features'

export default {
  name: 'Specifications',
  components: {
    Features,
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
