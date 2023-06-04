import { create } from 'zustand'

interface CategoriesStore {
    categories: object[] | [];
    currentCategory: number | null;
    actions: {
        addToCategories: (category: object) => void;
        setCurrentCategory: (id: number) => void;
        removeCurrentCategory: () => void;
    }
}

const useCategoriesStore = create<CategoriesStore>()((set) => ({  
    categories: [],
    currentCategory: null,
    actions: {
        addToCategories: (category: object) => set((state) => ({ categories: [category, state.categories]})),
        setCurrentCategory: (id: number) => set((state) => ({ currentCategory: id })),
        removeCurrentCategory: () => set((state) => ({ currentCategory: null })),
    }
  }))

  //selectors
  export const useSelectCategories = () => useCategoriesStore(state => state.categories)
  export const useSelectCurrentCategory = () => useCategoriesStore.getState().currentCategory

  //actions
  export const useCategoriesActions = () => useCategoriesStore(state => state.actions)
//   export const dispatchAddToCategories = () => useCategoriesStore.getState().addToCategories
//   export const dispatchSetCurrentCategory = () => useCategoriesStore.getState().setCurrentCategory
//   export const dispatchRemoveCurrentCategory = () => useCategoriesStore.getState().removeCurrentCategory  