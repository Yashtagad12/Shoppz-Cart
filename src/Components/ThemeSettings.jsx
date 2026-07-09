import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { themeColors } from "../data/dummy";
import { useStateContext } from "../Context/ContextProvider";

const ThemeSettings = ({ onClose }) => {
  const {
    setColor,
    setMode,
    currentMode,
    currentColor,
  } = useStateContext();

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">

      {/* Right Panel */}

      <div className="absolute right-0 top-0 h-screen w-full max-w-sm bg-white dark:bg-secondary-dark-bg shadow-2xl animate-[slideIn_.3s_ease]">

        {/* Header */}

        <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">

          <h2 className="text-2xl font-bold dark:text-white">
            Theme Settings
          </h2>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition"
          >
            <MdOutlineCancel className="text-2xl text-gray-600 dark:text-gray-300" />
          </button>

        </div>

        {/* Theme Mode */}

        <div className="p-6 border-b dark:border-gray-700">

          <h3 className="text-lg font-semibold mb-5 dark:text-white">
            Theme Mode
          </h3>

          <label className="flex items-center gap-3 mb-4 cursor-pointer">

            <input
              type="radio"
              name="theme"
              value="Light"
              checked={currentMode === "Light"}
              onChange={setMode}
              className="accent-blue-600"
            />

            <span className="dark:text-gray-300">
              Light
            </span>

          </label>

          <label className="flex items-center gap-3 cursor-pointer">

            <input
              type="radio"
              name="theme"
              value="Dark"
              checked={currentMode === "Dark"}
              onChange={setMode}
              className="accent-blue-600"
            />

            <span className="dark:text-gray-300">
              Dark
            </span>

          </label>

        </div>

        {/* Theme Colors */}

        <div className="p-6">

          <h3 className="text-lg font-semibold mb-5 dark:text-white">
            Theme Colors
          </h3>

          <div className="grid grid-cols-5 gap-4">

            {themeColors.map((item) => (

              <button
                key={item.name}
                title={item.name}
                onClick={() => setColor(item.color)}
                className="relative h-12 w-12 rounded-full transition-transform hover:scale-110"
                style={{
                  backgroundColor: item.color,
                }}
              >

                {currentColor === item.color && (

                  <BsCheck className="absolute inset-0 m-auto text-white text-2xl" />

                )}

              </button>

            ))}

          </div>

        </div>

      </div>

      {/* Animation */}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

    </div>
  );
};

export default ThemeSettings;