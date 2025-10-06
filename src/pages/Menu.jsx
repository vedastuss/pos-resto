import React from 'react'
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu } from 'react-icons/md';
import MenuContainer from '../components/menu/MenuContainer';

const Menu = () => {
    return (
        <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
            {/* Left Div */}
            <div className="flex-[3] ">
                <div className='flex items-center justify-between px-10 py-4 mt-2'>
                    <div className='flex items-center gap-4'>
                        <BackButton />
                        <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Menu</h1>
                    </div>
                    <div className='flex items-center justify-around gap-4'>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <MdRestaurantMenu className="text-gray-100 text-xl" />
                            <div className="flex flex-col items-start">
                                <h1 className="text-xl text-gray-100 font-semibold">Customer Name</h1>
                                <p className="text-sm text-gray-400 font-medium">Table No. 2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <MenuContainer />
            </div>
            {/* Right Div */}
            <div className="flex-[1] bg-blue-500">

            </div>

            <BottomNav />
        </section>
    )
}

export default Menu