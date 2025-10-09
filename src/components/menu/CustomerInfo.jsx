import React from 'react'
import { useSelector } from 'react-redux';
import { getAvatarName } from '../../utils';

const CustomerInfo = () => {
  const customerData = useSelector((state) => state.customer);
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex flex-col items-start">
        <h1 className="text-md text-[#ababab] font-semibold tracking-wide">
          {customerData.customerName}
        </h1>
        <p className="text-xs text-[#ababab] font-medium mt-1">
          {customerData.orderId}/Dine in
        </p>
        <p className="text-xs text-[#ababab] font-medium mt-2">
          January 19, 2025 05:34 PM
        </p>
      </div>
      <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
        {getAvatarName(customerData.customerName)}
      </button>
    </div>
  );
};

export default CustomerInfo