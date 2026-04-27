import React, { useState } from 'react';
import { IoMdBatteryCharging, IoMdSettings, IoMdWalk, IoMdFitness, IoMdNavigate, IoMdCalendar, IoMdStats, IoMdRestaurant } from 'react-icons/io';
import TrackingScreen from './components/TrackingScreen';
import MapScreen from './components/MapScreen';
import PlanScreen from './components/PlanScreen';
import FoodScreen from './components/FoodScreen';
import StatsScreen from './components/StatsScreen';
import SettingsScreen from './components/SettingsScreen';

const MOCK_FOOD_ENTRIES = [
  { name: 'Chicken Breast', portion: '500g', calories: 825, protein: 155, carbs: 0, fat: 18 },
];

function App() {
  const [activeTab, setActiveTab] = useState('Track');
  const [foodEntries, setFoodEntries] = useState(MOCK_FOOD_ENTRIES);

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'Track': return <TrackingScreen />;
      case 'Map': return <MapScreen />;
      case 'Plan': return <PlanScreen />;
      case 'Food': return <FoodScreen foodEntries={foodEntries} setFoodEntries={setFoodEntries} />;
      case 'Stats': return <StatsScreen foodEntries={foodEntries} />;
      case 'Settings': return <SettingsScreen />;
      default: return <TrackingScreen />;
    }
  };

  const navItems = [
    { name: 'Track', icon: IoMdBatteryCharging },
    { name: 'Map', icon: IoMdNavigate },
    { name: 'Plan', icon: IoMdCalendar },
    { name: 'Food', icon: IoMdRestaurant },
    { name: 'Stats', icon: IoMdStats },
    { name: 'Settings', icon: IoMdSettings },
  ];

  return (
    <div className="flex flex-col h-screen bg-fr-dark text-white overflow-hidden max-w-md mx-auto border border-fr-border">
      <div className="flex justify-between items-center px-4 py-1 text-xs text-fr-gray-text bg-black/20">
        <div>12:08 | 9.2KB/s</div>
        <div className="flex items-center gap-1">
          <IoMdFitness />
          <div className="w-4 h-2 bg-fr-gray-text rounded-sm"></div>
          <span>45%</span>
        </div>
      </div>

      <div className="flex-grow p-4 overflow-y-auto pb-24">
        {renderActiveScreen()}
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-fr-card border-t border-fr-border z-50">
        <nav className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`flex flex-col items-center gap-1 ${activeTab === item.name ? 'text-fr-green' : 'text-fr-gray-text'}`}
            >
              <item.icon className="text-2xl" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default App;