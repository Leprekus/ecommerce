import React from 'react';
import { RouterOutputs, api } from '~/utils/api';
import Loading from '../Loading';
import { useProductActions } from '~/stores/products-store';
import { useCategoriesActions } from '~/stores/categories-store';

type Product = RouterOutputs['product']['getUnique']
export default function ProductsList() {
  const { setCurrentProduct } = useProductActions()
  const { clearCategories } = useCategoriesActions()
 

  const products = api.product.getAll.useQuery();
  if (products.isLoading) return <Loading />;
  if (!products.data) return null;
  const handleClick = (data:Product) => {
    clearCategories()
    setCurrentProduct(data.id)
    
  }
  return (
    <div className='w-52 h-fit flex flex-col gap-1'>
    <h1>Products</h1>
   
      {products.data?.map((data) => (
        <button key={data.id} 
        onClick={() => handleClick(data)}
        className='h-10 py-2 bg-red-50 text-center rounded-sm transition-all hover:bg-red-100'>
          <p>{data.name}</p>
        </ button>
      ))}

    </div>
  );
}
