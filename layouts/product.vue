<template>
  <div :class="theme">
    <div class="main-wrapper theme-background-1 animate">
      <div class="wrapper">
        <Header />

        <Loader v-if="isLoading" />

        <div v-else-if="product">
          <div class="product">
            <div class="product__img">
              <img :src="product.image" alt="" />
            </div>

            <div class="product__content">
              <div class="product__title theme-text-color animate">
                {{ product.name }}
              </div>

              <div class="product__nav">
                <nuxt-link
                  :to="{
                    name: 'product-specifications',
                    query: { id: productId },
                  }"
                  class="product__nav-item"
                  active-class="active"
                  exact
                >
                  Specifications
                </nuxt-link>
                <nuxt-link
                  :to="{ name: 'product-team', query: { id: productId } }"
                  class="product__nav-item"
                  active-class="active"
                  exact
                >
                  Team
                </nuxt-link>
                <nuxt-link
                  :to="{ name: 'product-rent-terms', query: { id: productId } }"
                  class="product__nav-item"
                  active-class="active"
                  exact
                >
                  Rent terms
                </nuxt-link>
              </div>

              <div>
                <Nuxt />
              </div>

              <div class="product__footer theme-background-2 animate">
                <div class="theme-text-color animate">
                  Rent for <span>{{ product.rent }} $/h</span>
                </div>
                <div>
                  <button class="product__btn">Rent now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="page-block">
          <ErrorMessage :title="'An error has occurred'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getterTypes } from '@/store'
import { mapGetters } from 'vuex'
import ErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'Product',
  components: {
    ErrorMessage,
  },
  data() {
    return {
      productId: this.$route.query.id,
    }
  },
  computed: {
    ...mapGetters({
      isLoading: getterTypes.getIsLoading,
      product: getterTypes.getProduct,
      theme: getterTypes.getThemeName,
    }),
  },
  created() {
    if (!this.product) {
      const product = this.$store.getters[getterTypes.getProductByIndex](
        this.productId
      )

      this.$store.dispatch('selectProduct', product)
    }
  },
}
</script>

<style scoped>
.main-wrapper {
  min-height: 100vh;
}

.page-block {
  min-height: calc(100vh - 200px);
  display: flex;
}

.product {
  display: flex;
  align-items: flex-start;
}
.product__img {
  width: 712px;
  margin-right: 64px;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
}
.product__content {
  flex: 1;
  padding-top: 56px;
}
.product__title {
  font-size: 40px;
  /* color: #012345; */
  font-weight: 700;
  margin-bottom: 32px;
}
.product__nav {
  display: flex;
  font-weight: 700;
  margin-bottom: 32px;
}
.product__nav-item {
  text-decoration: none;
  transition: 0.2s ease-out;
}
.light .product__nav-item {
  color: #677b8f;
}
.dark .product__nav-item {
  color: #99a7b5;
}
.product__nav-item:not(:last-child) {
  margin-right: 32px;
}
.product__nav-item:hover,
.product__nav-item.active {
  color: #4959ff;
}
.product__footer {
  border-radius: 16px;
  padding: 16px 32px;
  color: #012345;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
}
.product__footer span {
  color: #f71d9f;
}
.product__btn {
  border: none;
  background: #4959ff;
  border-radius: 12px;
  color: #fff;
  transition: 0.2s ease-out;
  width: 136px;
  height: 48px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  outline: none;
}
.product__btn:hover {
  background: #5d6cff;
}
.product__btn:active {
  background: #2a3dff;
}

@media (max-width: 1280px) {
  .product {
    padding: 0 16px;
  }
  .product__img {
    width: 500px;
    margin-right: 44px;
  }
  .product__content {
    padding-top: 24px;
  }
}

@media (max-width: 992px) {
  .product {
    flex-direction: column;
    padding-bottom: 110px;
    position: relative;
  }
  .product::after {
    content: '';
    background: linear-gradient(to top, #fff 76%, rgba(255, 255, 255, 0.01));
    height: 150px;
    width: 100%;
    bottom: 0;
    left: 0;
    position: fixed;
  }
  .product__img {
    max-width: 500px;
    width: 100%;
    margin: 0 auto 28px;
  }
  .product__content {
    padding-top: 24px;
  }
  .product__footer {
    position: fixed;
    bottom: 32px;
    left: 16px;
    right: 16px;
    z-index: 6;
  }
}

@media (max-width: 767px) {
  .page-block {
    min-height: calc(100vh - 90px);
  }

  .product__img {
    margin-bottom: 22px;
  }
  .product__content {
    padding-top: 0;
  }
  .product__title {
    font-size: 24px;
    margin-bottom: 16px;
  }
  .product__nav {
    margin-bottom: 20px;
  }
  .product__nav-item:not(:last-child) {
    margin-right: 20px;
  }
  .product__footer {
    font-size: 16px;
    padding: 12px 24px;
  }
  .product__btn {
    width: 111px;
    height: 44px;
    font-size: 14px;
  }
}
</style>
