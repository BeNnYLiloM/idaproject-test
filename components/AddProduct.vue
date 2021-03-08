<template>
  <div class="add-product theme-background-1" :class="{ open: isOpen }">
    <div class="add-product__top">
      <div class="h1 title theme-text-color animate">Add new vehicle</div>
      <div class="close theme-background-2 animate" @click="close">
        <img :src="closeIco" alt="" />
      </div>
    </div>

    <form @submit.prevent="addProduct">
      <div
        class="add-product__item add-product__item_add-image theme-background-2 animate"
      >
        <input
          id="product-image"
          class="add-product__input-image"
          type="file"
          name="product-image"
          accept="image/x-png,image/gif,image/jpeg"
          @change="handlerImage"
        />
        <label class="theme-background-1" for="product-image">
          <img src="@/assets/images/icons/add-img.svg" alt="" />
        </label>
      </div>

      <div class="add-product__item theme-background-2 animate">
        <input
          id="product-name"
          v-model="newProduct.name"
          class="add-product__input"
          type="text"
          name="product-name"
          placeholder="Name"
          required
        />
      </div>

      <div class="add-product__item theme-background-2 animate">
        <input
          id="product-desc"
          v-model="newProduct.description"
          class="add-product__input"
          type="text"
          name="product-desc"
          placeholder="Description"
          required
        />
      </div>

      <div
        class="add-product__item add-product__item_with-help theme-background-2 animate"
      >
        <input
          id="product-rent"
          v-model="newProduct.rent"
          class="add-product__input"
          type="text"
          name="product-rent"
          placeholder="Rent price"
          required
        />
        <div class="add-product__item-help">$/h</div>
      </div>

      <button type="submit" class="product__submit">Complete</button>
    </form>
  </div>
</template>

<script>
import { getterTypes, actionTypes } from '@/store'
import { mapGetters } from 'vuex'

export default {
  name: 'AddProduct',
  props: {
    close: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      newProduct: {
        id: Date.now(),
        name: '',
        type: 'custom',
        description: '',
        specifications_text:
          'Ipsum excepteur magna nisi esse tempor minim irure nostrud enim mollit ipsum commodo culpa. Voluptate ut voluptate magna amet sunt proident officia excepteur consectetur eu velit. Deserunt consectetur do exercitation consectetur non reprehenderit laborum anim culpa. Elit amet voluptate eiusmod commodo ut id adipisicing et eiusmod ex ea minim. Duis sit et quis nostrud laborum laboris commodo ex ullamco duis ullamco dolore incididunt.\n\nLorem ut ullamco aliqua ex dolor velit ad occaecat excepteur voluptate. Consequat elit excepteur est velit amet ullamco laboris consequat ut est tempor. Culpa deserunt ullamco est aliquip ipsum voluptate occaecat enim do ut Lorem commodo qui. Officia proident cillum velit mollit veniam velit dolor ut ut commodo do sunt.',
        team_text:
          'Cillum aliqua dolor voluptate cupidatat exercitation officia. Do proident reprehenderit magna esse dolor pariatur est deserunt et incididunt tempor elit laboris. Sit culpa qui ex nostrud aliqua do irure nostrud qui officia nisi voluptate officia culpa. Do aliquip adipisicing labore elit proident tempor velit sint. Elit tempor cupidatat reprehenderit culpa cillum excepteur pariatur aliqua officia. Do occaecat occaecat ullamco consectetur excepteur ullamco nostrud cupidatat et sint eiusmod excepteur voluptate est. Consectetur officia magna commodo anim adipisicing.',
        term_text:
          'Reprehenderit nostrud qui ullamco officia. Eiusmod non culpa mollit cillum eu in non sunt. Ex commodo aliqua laboris aliqua deserunt consectetur culpa qui ea non dolore elit id. Enim enim cupidatat sunt excepteur ea mollit pariatur officia tempor voluptate sint pariatur qui. Adipisicing laboris ipsum in reprehenderit culpa sit ullamco est qui amet non mollit. Velit veniam esse sunt aliqua consectetur ullamco ullamco excepteur dolor nisi exercitation in do dolor.\n\nEiusmod excepteur anim elit consequat commodo sint. Dolore enim ad quis labore ipsum voluptate incididunt qui occaecat sint. Adipisicing incididunt enim aliqua sint excepteur incididunt aute nulla ut duis labore. Eiusmod ea enim duis ea mollit voluptate sit et enim cillum est sunt laborum. Nulla eu elit anim pariatur Lorem mollit consequat mollit.\n\nMinim cupidatat voluptate culpa pariatur quis aliquip tempor culpa. Culpa laborum veniam consectetur labore ullamco laborum sit amet aliqua commodo. Ex est commodo nostrud labore ullamco. Et aliqua sit et enim ad. Nulla id nisi sit reprehenderit tempor qui sit velit labore id.',
        rent: '',
        preview:
          'https://loremflickr.com/160/160/airship?random=5f2bb90aa4dedfd61c7bc780',
        image: 'https://loremflickr.com/900/900/airship',
      },
    }
  },
  computed: {
    ...mapGetters({
      isOpen: getterTypes.getIsOpenAddProductForm,
      theme: getterTypes.getThemeName,
    }),
    closeIco() {
      return this.theme === 'light'
        ? require('@/assets/images/icons/cross.svg')
        : require('@/assets/images/icons/cross-white.svg')
    },
  },
  methods: {
    handlerImage(event) {
      this.newProduct.image = event.target.files[0].name
    },
    addProduct() {
      this.$store
        .dispatch(actionTypes.addProduct, this.newProduct)
        .then(() => this.close())
    },
  },
}
</script>

<style scoped>
.add-product {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 600px;
  border-radius: 48px 0 0 48px;
  z-index: 40;
  padding: 64px 72px;
  transform: translateX(100%);
  transition: 0.2s ease-out;
}
.add-product.open {
  transform: translateX(0);
  overflow-y: auto;
}
.add-product__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
.add-product__item {
  margin-bottom: 24px;
  position: relative;
  border-radius: 12px;
}
.add-product__item_add-image {
  border-radius: 24px;
  height: 348px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-product__item_with-help .add-product__input {
  padding-right: 64px;
}
.add-product__item_add-image label {
  border-radius: 16px;
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 0 0 2px;
  transition: 0.2s ease-out;
}
.light .add-product__item_add-image label:hover {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
}
.dark .add-product__item_add-image label:hover {
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
}
.add-product__input {
  background: none;
  width: 100%;
  border: none;
  outline: none;
  color: #677b8f;
  padding: 22px 24px 20px;
  font-family: 'Codec Pro', sans-serif;
  font-weight: 300;
  font-size: 16px;
}
.light .add-product__input {
  color: #677b8f;
}
.light .add-product__input::placeholder {
  opacity: 1;
  color: #677b8f;
}
.light .add-product__input {
  color: #99a7b5;
}
.light .add-product__input::placeholder {
  opacity: 1;
  color: #99a7b5;
}
.add-product__item-help {
  position: absolute;
  top: 21px;
  right: 24px;
  z-index: 3;
}
.light .add-product__item-help {
  color: #99a7b5;
}
.dark .add-product__item-help {
  color: #677b8f;
}
.add-product__input-image {
  display: none;
}
.product__submit {
  width: 100%;
  height: 56px;
  border: none;
  background: #4959ff;
  border-radius: 12px;
  color: #fcfcfc;
  font-size: 16px;
  outline: none;
  transition: 0.2s ease-out;
  cursor: pointer;
  margin-top: 16px;
}
.product__submit:hover {
  background: #5d6cff;
}
.product__submit:active {
  background: #2a3dff;
}

.close {
  cursor: pointer;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

@media (max-width: 992px) {
  .add-product {
    width: 540px;
    padding: 34px 52px;
  }
  .add-product__item_add-image {
    height: 240px;
  }
}

@media (max-width: 767px) {
  .add-product {
    left: 0;
    width: 100%;
    top: auto;
    padding: 24px 16px 32px;
    border-radius: 24px 24px 0 0;
    transform: translateX(0) translateY(100%);
    max-height: 100vh;
    opacity: 0;
    visibility: hidden;
    position: fixed;
  }
  .add-product.open {
    transform: translateX(0) translateY(0);
    visibility: visible;
    opacity: 1;
  }
  .add-product__top {
    margin-bottom: 24px;
  }
  .add-product__item {
    margin-bottom: 16px;
  }
  .add-product__item_add-image {
    height: 260px;
  }
  .add-product__item_with-help .add-product__input {
    padding-right: 50px;
  }
  .add-product__input {
    font-size: 14px;
    padding: 20px;
  }
  .add-product__item-help {
    right: 15px;
    top: 20px;
    font-size: 14px;
  }
  .product__submit {
    height: 52px;
    margin-top: 8px;
  }

  .close {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
  .close img {
    width: 10px;
  }
}
</style>
