import React from 'react'

import ProductList from '../pages/ProductList';
import Total from '../pages/Total';
import CartList from '../pages/CartList';

function Cart() {

  return (
    <div>
      <div className='container mx-auto'>
      <h1 className='text-2xl my-10 text-center text-blue-400 uppercase'>Shopping Cart</h1>
      <div className='flex justify-between gap-10'>
        <ProductList />
      <div>
        <div class="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
            <h1 class="text-2xl font-bold text-gray-800 text-center">Your Cart</h1>
            <div class="grid md:grid-cols-3 gap-4 mt-8">
                <div class="md:col-span-2 space-y-4">
                  <CartList />
                </div>
                <Total />
            </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart
