import React from "react";
import Header from "../../Components/Header";
import {
  FaUsers,
  FaEye,
  FaShoppingCart,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";

const pyramidData = [
  {
    title: "Visitors",
    value: "15,200",
    width: "100%",
    color: "from-blue-500 to-blue-400",
    icon: <FaUsers />,
  },
  {
    title: "Product Views",
    value: "10,450",
    width: "82%",
    color: "from-cyan-500 to-cyan-400",
    icon: <FaEye />,
  },
  {
    title: "Added to Cart",
    value: "6,870",
    width: "64%",
    color: "from-emerald-500 to-green-400",
    icon: <FaShoppingCart />,
  },
  {
    title: "Orders",
    value: "3,950",
    width: "46%",
    color: "from-orange-500 to-yellow-400",
    icon: <FaHandshake />,
  },
  {
    title: "Completed Sales",
    value: "2,180",
    width: "28%",
    color: "from-red-500 to-pink-500",
    icon: <FaCheckCircle />,
  },
];

const Pyramid = () => {
  return (
    <div className="m-2 md:m-10 p-5 md:p-8 bg-white dark:bg-secondary-dark-bg rounded-2xl shadow">

      <Header
        category="Chart"
        title="Sales Funnel"
      />

      <p className="text-gray-500 mb-10">
        Track how customers move through your sales journey.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Funnel */}

        <div className="flex flex-col items-center gap-4">

          {pyramidData.map((item, index) => (
            <div
              key={index}
              style={{ width: item.width }}
              className={`bg-linea-to-r ${item.color}
              rounded-xl text-white
              flex items-center justify-between
              px-6 py-5
              shadow-lg
              hover:scale-105
              transition-all
              duration-300
              cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-sm opacity-90">
                    Stage {index + 1}
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold">
                {item.value}
              </h2>
            </div>
          ))}

        </div>

        {/* Statistics */}

        <div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-blue-50 rounded-xl p-6 shadow">
              <h3 className="text-gray-500 text-sm">
                Conversion Rate
              </h3>

              <h2 className="text-4xl font-bold text-blue-600 mt-2">
                14.3%
              </h2>
            </div>

            <div className="bg-green-50 rounded-xl p-6 shadow">
              <h3 className="text-gray-500 text-sm">
                Total Revenue
              </h3>

              <h2 className="text-4xl font-bold text-green-600 mt-2">
                $126K
              </h2>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 shadow">
              <h3 className="text-gray-500 text-sm">
                Lost Leads
              </h3>

              <h2 className="text-4xl font-bold text-orange-600 mt-2">
                78%
              </h2>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow">
              <h3 className="text-gray-500 text-sm">
                Avg. Order
              </h3>

              <h2 className="text-4xl font-bold text-purple-600 mt-2">
                $312
              </h2>
            </div>

          </div>

          {/* Progress */}

          <div className="mt-10 bg-gray-50 rounded-xl p-6 shadow">

            <h3 className="font-semibold text-xl mb-6">
              Funnel Performance
            </h3>

            {pyramidData.map((item, index) => (

              <div
                key={index}
                className="mb-5"
              >

                <div className="flex justify-between mb-2">

                  <span className="font-medium">
                    {item.title}
                  </span>

                  <span>
                    {item.value}
                  </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">

                  <div
                    style={{ width: item.width }}
                    className={`h-3 rounded-full bg-linear-to-r ${item.color}`}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Pyramid;