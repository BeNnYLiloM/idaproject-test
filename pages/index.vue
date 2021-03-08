<template>
  <div class="page-block main-content theme-background-2 animate">
    <Loader v-if="isLoading" />

    <div v-else-if="!error">
      <div class="top-line">
        <h1 class="animate theme-text-color">
          Rent
          <select v-model="filterBy">
            <option default>whatever</option>
            <option v-for="item in selectItems" :key="item">{{ item }}</option>
          </select>
        </h1>

        <div class="add-transport">
          Add new
          <button class="add-transport__btn" @click="handlerForm">
            <span></span>
          </button>
        </div>
      </div>

      <div class="card-wrap">
        <Card
          v-for="(product, index) in productsFilteredBy"
          :key="product.id"
          :product="product"
          :index="index"
        />
      </div>

      <AddProduct :close="handlerForm" />

      <div
        class="overlay"
        :class="{ show: isOpenAddProductForm }"
        @click="handlerForm"
      ></div>
    </div>

    <ErrorMessage v-else :title="'An error has occurred'" />
  </div>
</template>

<script>
import Card from '@/components/Card'
import { mapGetters } from 'vuex'
import ErrorMessage from '@/components/ErrorMessage'
import Loader from '@/components/Loader'
import { getterTypes, actionTypes } from '@/store'
import AddProduct from '@/components/AddProduct'

export default {
  name: 'Index',
  components: {
    Card,
    ErrorMessage,
    Loader,
    AddProduct,
  },
  data() {
    return {
      filterBy: 'whatever',
    }
  },
  computed: {
    ...mapGetters({
      products: getterTypes.getProducts,
      error: getterTypes.getErrors,
      isLoading: getterTypes.getIsLoading,
      isOpenAddProductForm: getterTypes.getIsOpenAddProductForm,
    }),
    selectItems() {
      const items = new Set()

      this.products.map((el) => items.add(el.type))

      return items
    },
    productsFilteredBy() {
      if (this.filterBy === 'whatever') {
        return this.products
      }

      return this.products.filter((el) => el.type === this.filterBy)
    },
  },
  methods: {
    handlerForm() {
      this.$store.dispatch(actionTypes.toggleAddProductForm)
    },
  },
}
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 200px);
  display: flex;
}

.top-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
}

.add-transport {
  font-size: 20px;
  font-weight: 700;
  color: #4959ff;
  display: flex;
  align-items: center;
  user-select: none;
}
.add-transport__btn {
  border: none;
  cursor: pointer;
  background: #4959ff;
  border-radius: 16px;
  width: 48px;
  height: 48px;
  margin-left: 20px;
  outline: none;
  padding: 0;
  transition: 0.2s ease-out;
}
.add-transport__btn:hover {
  background: #5d6cff;
}
.add-transport__btn:active {
  background: #2a3dff;
}
.add-transport__btn span {
  position: relative;
}
.add-transport__btn span::before,
.add-transport__btn span::after {
  content: '';
  background: #fff;
  position: absolute;
}
.add-transport__btn span::before {
  width: 14px;
  height: 2px;
  top: -1px;
  left: -6px;
}
.add-transport__btn span::after {
  width: 2px;
  height: 14px;
  top: -7px;
  left: 0px;
}

.card-wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 39;
  backdrop-filter: blur(22px);
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-out;
}
.overlay.show {
  opacity: 1;
  visibility: visible;
}
.light .overlay {
  background: rgba(52, 79, 106, 0.32);
}
.dark .overlay {
  background: rgba(0, 7, 14, 0.32);
}

@media (max-width: 767px) {
  .main-content {
    min-height: calc(100vh - 90px);
  }

  .top-line {
    margin-bottom: 24px;
  }

  .add-transport {
    font-size: 16px;
    user-select: none;
  }
  .add-transport__btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
  .add-transport__btn span::before {
    width: 12px;
    top: -1px;
    left: -5px;
  }
  .add-transport__btn span::after {
    height: 12px;
    top: -6px;
  }

  .card-wrap {
    margin: 0;
  }
}
</style>
