import React, { useState } from 'react';
import { Package, Search, Filter, AlertCircle, Plus } from 'lucide-react';

interface InventoryItem {
  id: string;
  productName: string;
  sku: string;
  currentStock: number;
  minStock: number;
  maxStock: number;
  lastUpdated: string;
  status: 'in_stock' | 'low_stock' | 'out_of_stock';
}

interface StockHistory {
  id: string;
  date: string;
  type: 'add' | 'remove';
  quantity: number;
  updatedBy: string;
}

export function InventoryManagement() {
  const [inventory, setInventory] = useState<InventoryItem[]>([
    {
      id: '1',
      productName: 'Premium Floor Tile',
      sku: 'TIL-001',
      currentStock: 250,
      minStock: 100,
      maxStock: 1000,
      lastUpdated: '2024-03-15',
      status: 'in_stock'
    }
  ]);
  const [showAddStock, setShowAddStock] = useState(false);
  const [showHistory, setShowHistory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleAddStock = (itemId: string, quantity: number) => {
    setInventory(prev => prev.map(item => {
      if (item.id === itemId) {
        const newStock = item.currentStock + quantity;
        return {
          ...item,
          currentStock: newStock,
          status: newStock > item.minStock ? 'in_stock' : newStock === 0 ? 'out_of_stock' : 'low_stock',
          lastUpdated: new Date().toISOString()
        };
      }
      return item;
    }));
    setShowAddStock(false);
  };

  const handleUpdateStock = (itemId: string) => {
    setSelectedItem(itemId);
  };

  const handleViewHistory = (itemId: string) => {
    setShowHistory(itemId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Inventory Management</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search inventory..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <button className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter className="w-5 h-5 mr-2" />
            Filter
          </button>
          <button 
            onClick={() => setShowAddStock(true)}
            className="flex items-center px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Stock
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {inventory.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                    <Package className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {item.productName}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      SKU: {item.sku}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.status === 'in_stock'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    : item.status === 'low_stock'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                }`}>
                  {item.status.replace('_', ' ').charAt(0).toUpperCase() + item.status.slice(1).replace('_', ' ')}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Current Stock</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                    {item.currentStock}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Minimum Stock</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                    {item.minStock}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Maximum Stock</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                    {item.maxStock}
                  </p>
                </div>
              </div>

              {item.currentStock <= item.minStock && (
                <div className="mt-4 flex items-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">
                    Stock level is below minimum threshold. Consider restocking soon.
                  </p>
                </div>
              )}

              <div className="mt-4 flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Last updated: {new Date(item.lastUpdated).toLocaleDateString()}
                </p>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleUpdateStock(item.id)}
                    className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Update Stock
                  </button>
                  <button 
                    onClick={() => handleViewHistory(item.id)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    View History
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Stock Modal */}
      {showAddStock && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Stock</h2>
            {/* Add stock form */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddStock(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => handleAddStock('1', 100)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Add Stock
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View History Modal */}
      {showHistory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">Stock History</h2>
            {/* Stock history table */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowHistory(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Stock Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Update Stock</h2>
            {/* Update stock form */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleAddStock(selectedItem, 50);
                  setSelectedItem(null);
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}