import React from 'react'
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaNotesMedical } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const CartItems = () => {
    const cartData = useSelector((state) => state.cart);
    return (
        <div className="px-4 py-2">
            <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
                Order Details
            </h1>
            <div className="mt-4 overflow-y-scroll scrollbar-hide h-[380px]">
                {cartData.length === 0 ? (
                    <p className="text-[#ababab] text-sm justify-center items-center">Your cart is empty, start adding items!</p>
                ) : cartData.map((item, index) => {
                    return (
                        <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
                            <div className="flex items-center justify-between">
                                <h1 className="text-[#ababab] font-semibold tracking-wide text-md">
                                    Chicken Tikka
                                </h1>
                                <p className="text-[#ababab] font-semibold">x2</p>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-3">
                                    <RiDeleteBin2Fill className="text-[#ababab] cursor-pointer" size={20} />
                                    <FaNotesMedical className="text-[#ababab] cursor-pointer" size={20} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default CartItems