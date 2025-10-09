import React from 'react';
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from '../components/tables/TableCard';
import { tables } from '../constants/index.js';

const Tables = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
      <div className='flex items-center justify-between px-10 py-4 mt-2'>
        <div>
          <BackButton />
          <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Tables</h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 p-10">
        {tables.map((table) => (
          <TableCard
            key={table.id}
            id={table.id}
            name={table.name}
            status={table.status}
            initials={table.initial}
            seats={table.seats}
          />
        ))}
      </div>
      <BottomNav />
    </section>
  );
};

export default Tables;