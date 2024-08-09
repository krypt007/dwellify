'use client'
import { useState } from 'react';

export default function Dashboard() {
  const [filters, setFilters] = useState({ bedRooms: 3, bathRooms: 3, priceRange: 20000 });

  return (
    <div className="min-h-screen p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Hello! A.N. OTHER</h1>
        <div className="flex items-center space-x-2">
          <input type="text" placeholder="Search" className="px-4 py-2 rounded-md border" />
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-md">Filter</button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="text-lg font-bold">5 Bedroom House</h2>
          <p>Westlands, Nairobi</p>
          <p>KShs. 40,350,000/-</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="text-lg font-bold">5 Bedroom House</h2>
          <p>Westlands, Nairobi</p>
          <p>KShs. 40,350,000/-</p>
        </div>
      </div>
    </div>
  );
}
