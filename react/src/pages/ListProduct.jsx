import React from 'react'

import { dataCart } from '../data/productData';

import Cart from './Cart';

function ListProduct() {

    const [data, setData] = React.useState(dataCart);
    const [cart, setCart] = React.useState([]);
    const [total, setTotal] = React.useState("");

    function addToCart(id) {
        const productFind = data.find((item) => item.id === id);
        setCart((prevCart) => ([
            ...prevCart,
            productFind,
        ]))
    }

    React.useEffect(() => {
        const totalCart = cart.reduce((acc, cur) => {
            return Math.round(acc + cur.quanlity * cur.price);
        },0)
        setTotal((totalCart));
    },[cart])

    function removeCart(id) {
        const newCart = cart.filter((itemCart) => itemCart.id !== id);
        setCart(newCart);
    }

  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl my-10 text-center text-blue-400 uppercase'>Shopping Cart</h1>
      <div className='flex justify-between gap-10'>
        <div>
            {data.map((productItem) => (
                <div 
                class="relative flex w-96 flex-col rounded-lg border border-slate-200 bg-white shadow-sm"
                key={productItem.id}
                >
                    <nav class="flex min-w-[240px] flex-col gap-1 p-1.5">
                        <div
                        role="button"
                        class="text-slate-800 flex w-full items-center rounded-md p-3 transition-all cursor-pointer hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                        onClick={() => addToCart(productItem.id)}
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
                                <p class="text-slate-500 text-sm">
                                {productItem.price}$
                                </p>
                            </div>
                        </div>
                    </nav>
                </div>
            ))}
        </div>
        <div>
        <div class="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
            <h1 class="text-2xl font-bold text-gray-800 text-center">Your Cart</h1>
            <div class="grid md:grid-cols-3 gap-4 mt-8">
                <div class="md:col-span-2 space-y-4">

                {cart.map((cartItem) => (
                    <div class="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]" key={cartItem.id}>
                        <div class="flex gap-4">
                        <div class="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                            <img src={cartItem.image} class="w-full h-full object-contain" />
                        </div>

                        <div class="flex flex-col gap-4">
                            <div>
                            <h3 class="text-sm sm:text-base font-bold text-gray-800">{cartItem.name}</h3>
                            <p class="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">Color: 
                                <span class="inline-block w-5 h-5 rounded-md" style={{backgroundColor: cartItem.color}}></span></p>
                            </div>

                            <div class="mt-auto flex items-center gap-3">
                            <button type="button"
                                class="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-2 fill-white" viewBox="0 0 124 124">
                                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                </svg>
                            </button>
                            <span class="font-bold text-sm leading-[18px]">1</span>
                            <button type="button"
                                class="flex items-center justify-center w-5 h-5 bg-gray-800 outline-none rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-2 fill-white" viewBox="0 0 42 42">
                                <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                </svg>
                            </button>
                            </div>
                        </div>
                        </div>
                        <div class="ml-auto flex flex-col">
                            <div class="flex items-start gap-4 justify-end">
                                <button type="button" onClick={() => removeCart(cartItem.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 cursor-pointer fill-gray-400 hover:fill-red-600 inline-block" viewBox="0 0 24 24">
                                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                    </svg>
                                </button>
                            </div>
                            <h3 class="text-sm sm:text-base font-bold text-gray-800 mt-auto">${cartItem.price}</h3>
                        </div>
                    </div>
                ))}
            </div>

                <div class="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]">
                <ul class="text-gray-800 space-y-4">
                    <li class="flex flex-wrap gap-4 text-sm">Subtotal <span class="ml-auto font-bold">${total}</span></li>
                    <li class="flex flex-wrap gap-4 text-sm">Shipping <span class="ml-auto font-bold">$0</span></li>
                    <li class="flex flex-wrap gap-4 text-sm">Tax <span class="ml-auto font-bold">$0</span></li>
                    <hr class="border-gray-300" />
                    <li class="flex flex-wrap gap-4 text-sm font-bold">Total <span class="ml-auto">${total}</span></li>
                </ul>

                <div class="mt-8 space-y-2">
                    <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Buy Now</button>
                    <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
                </div>

                <div class="mt-4 flex flex-wrap justify-center gap-4">
                    <img src='https://readymadeui.com/images/master.webp' alt="card1" class="w-10 object-contain" />
                    <img src='https://readymadeui.com/images/visa.webp' alt="card2" class="w-10 object-contain" />
                    <img src='https://readymadeui.com/images/american-express.webp' alt="card3" class="w-10 object-contain" />
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ListProduct
