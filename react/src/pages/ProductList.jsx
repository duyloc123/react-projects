import React from 'react'

import { cartAppContext } from '../Context/CartContext';

function ProductList() {

  const { product, cart, addToCart } = cartAppContext();

  return (
    <div>
      {product.map((productItem) => (
          <div 
          class="relative flex w-96 flex-col rounded-lg border border-slate-200 bg-white shadow-sm"
          key={productItem.id}
          >
              <nav class="flex min-w-[240px] flex-col gap-1 p-1.5"
              >
                  <button
                  class={`text-slate-800 flex w-full items-center rounded-md p-3 transition-all
                      ${cart.some((cartItem) => cartItem.id === productItem.id) ? "opacity-50 cursor-not-allowed" : " cursor-pointer hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"}
                      `}
                  onClick={() => addToCart(productItem.id)}
                  disabled={cart.some((cartItem) => cartItem.id === productItem.id)}
                  >
                      <div class="mr-4 grid place-items-center">
                          <img
                          alt="candice"
                          src={productItem.image}
                          class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                          />
                      </div>
                      <div>
                          <h6 class="text-slate-800 font-medium">
                              {productItem.name}
                          </h6>
                          <p class="text-slate-500 text-sm float-left">
                              ${productItem.price}
                          </p>
                      </div>
                  </button>
              </nav>
          </div>
      ))}
    </div>
  )
}

export default ProductList
