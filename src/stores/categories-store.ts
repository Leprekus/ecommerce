import { create } from 'zustand'
import { type RouterOutputs } from '~/utils/api';

type Category = RouterOutputs['category']['getAll'][number]
interface CategoriesStore {
    categories: Category[] | [];
    currentCategory: number | null;
    actions: {
        addToCategories: (category: Category) => void;
        clearCategories: () => void;
        setCurrentCategory: (id: number) => void;
        removeCurrentCategory: () => void;
    }
}

const useCategoriesStore = create<CategoriesStore>()((set) => ({  
    categories: [],
    currentCategory: null,
    actions: {
        addToCategories: (category: Category) => set((state) => ({ categories: [category, ...state.categories]})),
        clearCategories: () => set((state) => ({ categories: []})),
        setCurrentCategory: (id: number) => set((state) => ({ currentCategory: id })),
        removeCurrentCategory: () => set((state) => ({ currentCategory: null })),
    }
  }))

  //selectors
  export const useCategories = () => useCategoriesStore(state => state.categories)
  export const useCurrentCategory = () => useCategoriesStore.getState().currentCategory

  //actions
  export const useCategoriesActions = () => useCategoriesStore(state => state.actions)
//   export const dispatchAddToCategories = () => useCategoriesStore.getState().addToCategories
//   export const dispatchSetCurrentCategory = () => useCategoriesStore.getState().setCurrentCategory
//   export const dispatchRemoveCurrentCategory = () => useCategoriesStore.getState().removeCurrentCategory  