import { getVehicles } from '@/api/request'

export const state = () => {
  return {
    isLoading: false,
    products: [],
    selectedProduct: null,
    error: false,
    isOpenAddProductForm: false,
    theme: 'light',
  }
}

export const mutationTypes = {
  loadProductsStart: 'loadProductsStart',
  loadProductsSuccess: 'loadProductsSuccess',
  loadProductsFailure: 'loadProductsFailure',

  setSelectedProduct: 'setSelectedProduct',
  setOpenAddProductForm: 'setOpenAddProductForm',
  addNewProduct: 'addNewProduct',
  changeTheme: 'changeTheme',
}

export const actionTypes = {
  loadProducts: 'loadProducts',
  selectProduct: 'selectProduct',
  toggleAddProductForm: 'toggleAddProductForm',
  addProduct: 'addProduct',
  toggleTheme: 'toggleTheme',
}

export const getterTypes = {
  getProducts: 'getProducts',
  getProduct: 'getProduct',
  getProductByIndex: 'getProductByIndex',
  getErrors: 'getErrors',
  getIsLoading: 'getIsLoading',
  getIsOpenAddProductForm: 'getIsOpenAddProductForm',
  getThemeName: 'getThemeName',
}

export const getters = {
  [getterTypes.getProducts](state) {
    return state.products
  },
  [getterTypes.getProduct](state) {
    return state.selectedProduct
  },
  [getterTypes.getProductByIndex](state) {
    return (index) => state.products[index]
  },
  [getterTypes.getErrors](state) {
    return state.error
  },
  [getterTypes.getIsLoading](state) {
    return state.isLoading
  },
  [getterTypes.getIsOpenAddProductForm](state) {
    return state.isOpenAddProductForm
  },
  [getterTypes.getThemeName](state) {
    return state.theme
  },
}

export const mutations = {
  [mutationTypes.loadProductsStart](state) {
    state.isLoading = true
    state.products = []
    state.error = false
  },
  [mutationTypes.loadProductsSuccess](state, payload) {
    state.isLoading = false
    state.products = payload
  },
  [mutationTypes.loadProductsFailure](state) {
    state.isLoading = false
    state.error = true
  },
  [mutationTypes.setSelectedProduct](state, product) {
    state.selectedProduct = product
  },
  [mutationTypes.setOpenAddProductForm](state) {
    state.isOpenAddProductForm = !state.isOpenAddProductForm
  },
  [mutationTypes.addNewProduct](state, product) {
    state.products.push(product)
  },
  [mutationTypes.changeTheme](state) {
    state.theme = state.theme === 'light' ? 'dark' : 'light'
  },
}

export const actions = {
  async [actionTypes.loadProducts](context) {
    context.commit(mutationTypes.loadProductsStart)

    try {
      const data = await getVehicles()

      context.commit(mutationTypes.loadProductsSuccess, data)
    } catch {
      context.commit(mutationTypes.loadProductsFailure)
    }
  },
  [actionTypes.selectProduct](context, data) {
    context.commit(mutationTypes.setSelectedProduct, data)
  },
  [actionTypes.toggleAddProductForm](context) {
    context.commit(mutationTypes.setOpenAddProductForm)
  },
  [actionTypes.addProduct](context, product) {
    context.commit(mutationTypes.addNewProduct, product)
  },
  [actionTypes.toggleTheme](context) {
    context.commit(mutationTypes.changeTheme)
  },
}
