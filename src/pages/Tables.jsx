import React from 'react';
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from '../components/tables/TableCard';
import { tables } from '../constants/index.js';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getTables } from '../https/index.js';
import { isAxiosError } from 'axios';

const Tables = () => {
  const [status, setStatus] = React.useState('all');
  const { data: resData } = useQuery({
    queryKey: ["tables"],
    queryFn: async () => {
      return await getTables();
    },
    placeholderData: keepPreviousData
  });
  console.log('Table IDs:', resData?.data.data.map(t => t._id)); // ← Add this line here
  console.log(resData);

  console.log(resData);
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
      <div className='flex items-center justify-between px-10 py-4 mt-2'>
        <div>
          <BackButton />
          <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Tables</h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 p-10">
        {resData?.data.data.map((table) => (
          <TableCard
            key={table._id}
            id={table._id}
            name={table.tableNo}
            status={table.status}
            initials={table.tableNo}
            seats={table.seats}
          />
        ))}
      </div>
      <BottomNav />
    </section>
  );
};



export default Tables;