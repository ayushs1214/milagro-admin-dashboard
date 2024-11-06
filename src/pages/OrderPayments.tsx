import React, { useState } from 'react';
import { Search, Filter, DollarSign, CreditCard, Calendar } from 'lucide-react';

interface Payment {
  id: string;
  orderId: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  method: 'credit_card' | 'bank_transfer' | 'upi';
  customerName: string;
  date: string;
  transactionId: string;
}

export function OrderPayments() {
  const [payments] = useState<Payment[]>([
    {
      id: 'PAY001',
      orderId: 'ORD001',
      amount: 25000,
      status: 'completed',
      method: 'credit_card',
      customerName: 'John Smith',
      date: '2024-03-15T10:30:00Z',
      transactionId: 'TXN123456789'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Order Payments</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search payments..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <button className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter className="w-5 h-5 mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                    <DollarSign className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Payment #{payment.id}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Order #{payment.orderId} • {payment.customerName}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  payment.status === 'completed'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    : payment.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                }`}>
                  {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      ₹{payment.amount.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Amount</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {payment.method.split('_').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Method</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {new Date(payment.date).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Date</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 flex items-center justify-center text-gray-400">#</div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {payment.transactionId}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Transaction ID</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}