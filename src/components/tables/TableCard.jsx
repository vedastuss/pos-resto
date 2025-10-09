import React from "react";
import { useNavigate } from "react-router-dom";
import { getBgColor } from "../../utils";

const TableCard = ({key, name, status, initials, seats}) => {
  
  const navigate = useNavigate();
  
  const handleClick = () => {
    if(status === "Booked") return;
    navigate('/menu');
  };

  return (
    <div onClick={handleClick} key={key} className="w-[300px] hover:bg-[#2c2e2c] bg-[#262626] p-4">
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
        <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "bg-[#664a04] text-yellow-500"}`}>
          {status}
        </p>
      </div>
      
      <div className="flex items-center justify-center mt-5 mb-8">
        <h1 className={"text-white rounded-full p-5 text-xl"}style={{backgroundColor : getBgColor()}}>{initials}</h1>
      </div>
      
      <p className="text-[#ababab] text-xs">
        Seats: <span className="text-[#f5f5f5]">{seats}</span>
      </p>
    </div>
  );
};

export default TableCard;