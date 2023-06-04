import { create } from 'zustand'

interface ProductsStore {

  products: object[] | [];
  currentProduct: number | null;
  actions: {
    addToProducts: (product: object) => void
    setCurrentProduct: (id: number | null) => void;
  }

}

const useProductsStore = create<ProductsStore>()((set) => ({
  products: [],
  currentProduct: null,
  actions: {
    addToProducts: (product: object) => set((state) => ({ products: [product, ...state.products] })),
    setCurrentProduct: (id: number | null) => set((state) => ({ currentProduct: id })),
  }

}))

//selectors
export const useSelectProducts = () => useProductsStore(state => state.products)
export const useSelectCurrentProduct = () => useProductsStore(state => state.currentProduct)

//actions
// export const useDispatchAddToProducts = (payload: object) => useProductsStore(state => state.addToProducts(payload))
// export const useDispatchSetCurrentProduct = (payload: number | null) => useProductsStore(state => state.setCurrentProduct(payload))

export const useProductActions = () => useProductsStore(state => state.actions)
