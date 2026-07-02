import React, { useMemo, useState } from 'react';
import { ordersData } from '../data/dummy';
import { Header } from '../Components';

const Orders = () => {
  const [search, setSearch] = useState('');

  const filteredOrders = useMemo(() => {
    return ordersData.filter((item) => {
      const keyword = search.toLowerCase();

      return (
        item.CustomerName.toLowerCase().includes(keyword) ||
        item.OrderItems.toLowerCase().includes(keyword) ||
        item.Location.toLowerCase().includes(keyword) ||
        item.Status.toLowerCase().includes(keyword) ||
        item.OrderID.toString().includes(keyword)
      );
    });
  }, [search]);

  return (
    <div className="m-2 md:m-10 p-5 md:p-8 bg-white dark:bg-secondary-dark-bg rounded-xl shadow">

      <Header category="Page" title="Orders" />

      {/* Search */}
      <div className="mt-6 mb-5">
        <input
          type="text"
          placeholder="Search Orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-main-dark-bg dark:border-gray-600"
        />
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">

        <table className="min-w-275 w-full">

          <thead className="bg-gray-100 dark:bg-main-dark-bg sticky top-0">

            <tr>

              <th className="px-5 py-4 text-left">Image</th>

              <th className="px-5 py-4 text-left">Order ID</th>

              <th className="px-5 py-4 text-left">Item</th>

              <th className="px-5 py-4 text-left">Customer</th>

              <th className="px-5 py-4 text-left">Amount</th>

              <th className="px-5 py-4 text-left">Location</th>

              <th className="px-5 py-4 text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {filteredOrders.map((item, index) => (

              <tr
                key={index}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-main-dark-bg transition"
              >

                {/* Product Image */}

                <td className="px-5 py-4">

                  <img
                    src={item.ProductImage}
                    alt={item.OrderItems}
                    className="w-14 h-14 rounded-lg object-cover"
                  />

                </td>

                {/* Order ID */}

                <td className="px-5 py-4 font-semibold">
                  #{item.OrderID}
                </td>

                {/* Item */}

                <td className="px-5 py-4">
                  {item.OrderItems}
                </td>

                {/* Customer */}

                <td className="px-5 py-4">
                  {item.CustomerName}
                </td>

                {/* Amount */}

                <td className="px-5 py-4 font-semibold">
                  ${item.TotalAmount}
                </td>

                {/* Location */}

                <td className="px-5 py-4">
                  {item.Location}
                </td>

                {/* Status */}

                <td className="px-5 py-4">

                  <span
                    style={{
                      background: item.StatusBg,
                    }}
                    className="px-4 py-1 text-white rounded-full text-sm font-medium"
                  >
                    {item.Status}
                  </span>

                </td>

              </tr>

            ))}

            {filteredOrders.length === 0 && (

              <tr>

                <td
                  colSpan={7}
                  className="text-center py-10 text-gray-500"
                >
                  No Orders Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="mt-5 text-sm text-gray-500">
        Showing {filteredOrders.length} Orders
      </div>

    </div>
  );
};

export default Orders;