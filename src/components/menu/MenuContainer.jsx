import React from "react";
import { GrRadialSelected } from "react-icons/gr";
import { menus } from "../../constants/index.js";
import { getBgColor } from "../../utils/index.js";

// Example background color generator


const MenuContainer = () => {
    const [selected, setSelected] = React.useState(menus[0]);
    const [itemCount, setItemCount] = React.useState(0);
    const [itemId, setItemId] = React.useState(null);
    const increment = (id) => {
        setItemId(id);
        if (itemCount < 6) {
            setItemCount(itemCount + 1);
        }
    };
    const decrement = (id) => {
        setItemId(id);
        if (itemCount > 0) {
            setItemCount(itemCount - 1);
        }
    };
    return (
        <>
            <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
                {menus.map((menu) => {
                    return (
                        <div
                            key={menu.id}
                            className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer hover:bg-[#2a2a2a]"
                            style={{ backgroundColor: menu.bgColor }}
                            onClick={() => {
                                setSelected(menu);
                                setItemId(0);
                                setItemCount(0);
                            }}
                        >
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                                    {menu.icon} {menu.name}
                                </h1>
                                {selected.id === menu.id && (<GrRadialSelected className="text-white" size={20} />)}
                            </div>
                            <p className="text-[#ababab] text-sm font-semibold">
                                {menu.items.length} Items
                            </p>
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
                {selected?.items.map((menu) => {
                    return (
                        <div
                            key={menu.id}
                            className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer hover:bg-[#2a2a2a]"
                            style={{ backgroundColor: ['#2a2a2a'] }}
                            
                        >
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                                    {menu.name}
                                </h1>


                                <div className="flex items-center justify-between bg-[#1f1f1f] px-1 py-1 rounded-lg gap-6">
                                    <button
                                        onClick={() => decrement(menu.id)}
                                        className="text-yellow-500 text-lg"
                                    >
                                        &minus;
                                    </button>
                                    <span className="text-white">{menu.id === itemId ? itemCount : "0"}</span>
                                    <button
                                        onClick={() => increment(menu.id)}
                                        className="text-yellow-500 text-lg"
                                    >
                                        &#43;
                                    </button>
                                </div>

                            </div>
                            <p className="text-[#ababab] text-sm font-semibold">
                                Rp. {menu.price}
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
};

export default MenuContainer;
