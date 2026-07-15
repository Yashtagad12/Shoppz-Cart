import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import { Navbar, Footer, Sidebar, ThemeSettings, PieChartComponent } from './Components';
import {
  Ecommerce, Orders, Calender, Employee, Stacked, Pyramid, Customers, Kanban,
  AreaChartComponent, BarChartComponent, Pie, Financial, ColorPicker, ColorMapping, Editor, LineChartComponent,
} from './Pages';
import { useStateContext } from './Context/ContextProvider';


function App() {

  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();


  return (
    <>
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className='flex relative dark:bg-main-dark-bg'>

          {/* Floating Settings Button */}
          <div
            className="fixed right-4 bottom-4"
            style={{ zIndex: 1000 }}
          >
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              className="text-3xl p-3 text-white hover:drop-shadow-xl transition-all"
              style={{
                background: currentColor,
                borderRadius: "50%",
              }}
            >
              <FiSettings className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar */}
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}

          {/* Main Content Area */}
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full 
          ${activeMenu ? 'md:ml-72' : 'md:ml-0'}`}>
            <div className="fixed md:static w-full bg-white navbar shadow-sm z-40">
              <Navbar />
            </div>

            {/* Page Routes */}
            <div>
              <Routes>
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />

                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employee />} />
                <Route path='/customers' element={<Customers />} />

                {/* Apps */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calender />} />
                <Route path='/color-picker' element={<ColorPicker />} />

                {/* Charts */}
                <Route path='/line' element={<LineChartComponent />} />
                <Route path='/area' element={<AreaChartComponent />} />
                <Route path='/bar' element={<BarChartComponent />} />
                <Route path='/pie' element={<PieChartComponent />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />
              </Routes>
            </div>
          </div>

          {/* Theme Settings Panel */}
          {themeSettings && (
            <ThemeSettings
              onClose={() => setThemeSettings(false)}
            />
          )}

        </div>
      </div>

    </>
  );
}

export default App;