import { create } from 'zustand'

interface ProductsStore {

  products: object[] | [];
  currentProduct: number | null;
  addToProducts: (product: object) => void
  setCurrentProduct: (id: number | null) => void;

}

const useProductsStore = create<ProductsStore>()((set) => ({
  products: [],
  currentProduct: null,
  addToProducts: (product: object) => set((state) => ({ products: [product, ...state.products] })),
  setCurrentProduct: (id: number | null) => set((state) => ({ currentProduct: id })),

}))

//selectors
export const selectProducts = () => useProductsStore.getState().products
export const selectCurrentProduct = () => useProductsStore.getState().currentProduct

//actions
export const dispatchAddToProducts = useProductsStore.getState().addToProducts
export const dispatchSetCurrentProduct = useProductsStore.getState().setCurrentProduct
