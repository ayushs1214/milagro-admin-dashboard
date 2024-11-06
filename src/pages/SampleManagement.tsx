import React, { useState } from 'react';
import { Package, Search, Filter, Plus, Truck, CheckCircle } from 'lucide-react';

interface Sample {
  id: string;
  productName: string;
  requestedBy: string;
  status: 'pending' | 'approved' | 'shipped' | 'delivered';
  requestDate: string;
  trackingNumber?: string;
  image: string;
}

export function SampleManagement() {
  const [samples] = useState<Sample[]>([
    {
      id: '1',
      productName: 'Premium Floor Tile',
      requestedBy: 'John Smith',
      status: 'shipped',
      requestDate: '2024-03-15',
      trackingNumber: 'TRK123456789',
      image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?auto=format&fit=crop&q=80&w=300&h=200'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Sample Management</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search samples..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <button className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter className="w-5 h-5 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            <Plus className="w-5 h-5 mr-2" />
            New Sample Request
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {samples.map((sample) => (
          <div
            key={sample.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={sample.image}
                  alt={sample.productName}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {sample.productName}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Requested by: {sample.requestedBy}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Request Date: {new Date(sample.requestDate).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      sample.status === 'delivered'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : sample.status === 'shipped'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                        : sample.status === 'approved'
                        ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    }`}>
                      {sample.status.charAt(0).toUpperCase() + sample.status.slice(1)}
                    </span>
                  </div>

                  {sample.trackingNumber && (
                    <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Truck className="w-4 h-4 mr-2" />
                      Tracking Number: {sample.trackingNumber}
                    </div>
                  )}

                  <div className="mt-4 flex justify-end space-x-3">
                    {sample.status === 'pending' && (
                      <>
                        <button className="flex items-center px-3 py-1 text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20 rounded-md">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Approve
                        </button>
                        <button className="px-3 py-1 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 rounded-md">
                          Reject
                        </button>
                      </>
                    )}
                    <button className="px-3 py-1 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-900/20 rounded-md">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}