<template>
  <div class="card theme-background-1 animate" @click="setProduct">
    <NuxtLink
      :to="{ name: 'product-specifications', query: { id: index } }"
      class="card__wrap"
    >
      <div class="card__img">
        <img :src="product.preview" alt="" />
      </div>
      <div class="card__content">
        <div class="card__title theme-text-color animate">
          {{ product.name }}
        </div>
        <div class="card__desc">{{ product.description }}</div>
        <div class="card__price">{{ product.rent }} $/h</div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    product: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    setProduct() {
      this.$store.dispatch('selectProduct', this.product)
    },
  },
}
</script>

<style scoped>
.card {
  border-radius: 32px;
  width: calc(33.3333% - 32px);
  margin: 0 16px 32px;
}
.card__wrap {
  display: flex;
  align-items: flex-start;
  padding: 24px 32px;
  color: #677b8f;
  text-decoration: none;
}
.card__img {
  border-radius: 24px;
  overflow: hidden;
  width: 88px;
  height: 88px;
  margin-right: 24px;
}
.card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card__content {
  padding-top: 16px;
  flex: 1;
}
.card__title {
  font-weight: 700;
  margin-bottom: 12px;
}
.card__desc {
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 16px;
}
.card__price {
  color: #f84ab3;
  font-size: 14px;
  font-weight: 700;
}

@media (max-width: 1280px) {
  .card__wrap {
    padding: 20px 22px;
  }
}

@media (max-width: 992px) {
  .card {
    width: calc(50% - 32px);
  }
}

@media (max-width: 767px) {
  .card {
    width: 100%;
    border-radius: 24px;
    margin: 0 0 12px;
  }
  .card:last-child {
    margin-bottom: 0;
  }
  .card__wrap {
    padding: 20px;
  }
  .card__img {
    border-radius: 16px;
    margin-right: 20px;
  }
  .card__content {
    padding-top: 12px;
  }
}
</style>
