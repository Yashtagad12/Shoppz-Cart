import React, { useMemo, useState } from 'react';
import { customersData } from '../data/dummy';
import { Header } from '../Components';

const Customers = () => {
  const [search, setSearch] = useState('');

  const filteredCustomers = useMemo(() => {
    return customersData.filter((item) => {
      const keyword = search.toLowerCase();

      return (
        item.CustomerName.toLowerCase().includes(keyword) ||
        item.CustomerEmail.toLowerCase().includes(keyword) ||
        item.ProjectName.toLowerCase().includes(keyword) ||
        item.Status.toLowerCase().includes(keyword) ||
        item.CustomerID.toString().includes(keyword)
      );
    });
  }, [search]);

  return (
    <div className="m-2 md:m-10 p-5 md:p-8 bg-white dark:bg-secondary-dark-bg rounded-xl shadow">

      <Header category="Page" title="Customers" />

      {/* Search */}
      <div className="mt-6 mb-5">
        <input
          type="text"
          placeholder="Search Customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-main-dark-bg dark:border-gray-600"
        />
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">

        <table className="min-w-[1200px] w-full">

          <thead className="bg-gray-100 dark:bg-main-dark-bg sticky top-0">

            <tr>

              <th className="px-5 py-4 text-left">Customer</th>

              <th className="px-5 py-4 text-left">Customer ID</th>

              <th className="px-5 py-4 text-left">Email</th>

              <th className="px-5 py-4 text-left">Project</th>

              <th className="px-5 py-4 text-left">Weeks</th>

              <th className="px-5 py-4 text-left">Budget</th>

              <th className="px-5 py-4 text-left">Location</th>

              <th className="px-5 py-4 text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {filteredCustomers.map((item) => (

              <tr
                key={item.CustomerID}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-main-dark-bg transition"
              >

                {/* Customer */}
                <td className="px-5 py-4">

                  <div className="flex items-center gap-4">

                    <img
                      src={item.CustomerImage}
                      alt={item.CustomerName}
                      className="w-12 h-12 rounded-full object-cover border"
                    />

                    <div>
                      <p className="font-semibold">
                        {item.CustomerName}
                      </p>

                      <p className="text-sm text-gray-500">
                        #{item.CustomerID}
                      </p>
                    </div>

                  </div>

                </td>

                {/* Customer ID */}
                <td className="px-5 py-4 font-medium">
                  {item.CustomerID}
                </td>

                {/* Email */}
                <td className="px-5 py-4">
                  {item.CustomerEmail}
                </td>

                {/* Project */}
                <td className="px-5 py-4">
                  {item.ProjectName}
                </td>

                {/* Weeks */}
                <td className="px-5 py-4">
                  {item.Weeks}
                </td>

                {/* Budget */}
                <td className="px-5 py-4 font-semibold">
                  {item.Budget}
                </td>

                {/* Location */}
                <td className="px-5 py-4">
                  {item.Location}
                </td>

                {/* Status */}
                <td className="px-5 py-4">

                  <span
                    style={{
                      backgroundColor: item.StatusBg,
                    }}
                    className="px-4 py-1 rounded-full text-white text-sm font-medium"
                  >
                    {item.Status}
                  </span>

                </td>

              </tr>

            ))}

            {filteredCustomers.length === 0 && (

              <tr>

                <td
                  colSpan={8}
                  className="text-center py-10 text-gray-500"
                >
                  No Customers Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* Footer */}
      <div className="mt-5 text-sm text-gray-500">
        Showing {filteredCustomers.length} Customers
      </div>

    </div>
  );
};

export default Customers;