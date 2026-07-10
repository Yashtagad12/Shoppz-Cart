import React from "react";
import Header from "../../Components/Header";

const colorGroups = [
  {
    title: "Primary Colors",
    colors: [
      { name: "Blue", code: "#3B82F6" },
      { name: "Green", code: "#22C55E" },
      { name: "Purple", code: "#8B5CF6" },
      { name: "Orange", code: "#F97316" },
    ],
  },
  {
    title: "Status Colors",
    colors: [
      { name: "Success", code: "#16A34A" },
      { name: "Warning", code: "#FACC15" },
      { name: "Danger", code: "#EF4444" },
      { name: "Info", code: "#06B6D4" },
    ],
  },
  {
    title: "Gradient Colors",
    colors: [
      { name: "Ocean", gradient: "from-blue-500 to-cyan-400" },
      { name: "Sunset", gradient: "from-orange-500 to-pink-500" },
      { name: "Forest", gradient: "from-green-500 to-emerald-400" },
      { name: "Royal", gradient: "from-purple-500 to-indigo-500" },
    ],
  },
];

const ColorMapping = () => {

  return (
    <div className="m-2 md:m-10 p-5 md:p-8 bg-white dark:bg-secondary-dark-bg rounded-2xl shadow">

      <Header
        category="App"
        title="Color Mapping"
      />

      <p className="text-gray-500 mt-2 mb-8">
        Different color combinations used throughout the dashboard.
      </p>

      <div className="space-y-10">

        {colorGroups.map((group) => (

          <div key={group.title}>

            <h2 className="text-xl font-semibold mb-5 dark:text-white">
              {group.title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

              {group.colors.map((item) => (

                <div
                  key={item.name}
                  className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-main-dark-bg"
                >

                  {item.gradient ? (
                    <div
                      className={`h-24 bg-linear-to-r ${item.gradient}`}
                    />
                  ) : (
                    <div
                      className="h-24"
                      style={{ backgroundColor: item.code }}
                    />
                  )}

                  <div className="p-4">

                    <h3 className="font-semibold dark:text-white">
                      {item.name}
                    </h3>

                    {!item.gradient && (
                      <p className="text-sm text-gray-500 mt-1">
                        {item.code}
                      </p>
                    )}

                    {item.gradient && (
                      <p className="text-sm text-gray-500 mt-1">
                        Gradient
                      </p>
                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ColorMapping;