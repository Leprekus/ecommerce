import React from 'react';
import { api } from '~/utils/api';
import Loading from '../Loading';
import { dispatchSetCurrentProduct } from '~/stores/products-store';

export default function ProductsList() {
  const setSelectedProductId = dispatchSetCurrentProduct
 

  const products = api.product.getAll.useQuery();
  if (products.isLoading) return <Loading />;
  if (!products.data) return null;
  return (
    <div className='w-52 h-fit flex flex-col gap-1'>
    <h1>Products</h1>
   
      {products.data?.map((data) => (
        <button key={data.id} 
        onClick={() => setSelectedProductId(data.id)}
        className='h-10 py-2 bg-red-50 text-center rounded-sm transition-all hover:bg-red-100'>
          <p>{data.name}</p>
        </ button>
      ))}

    </div>
  );
}
