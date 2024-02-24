import React, { useState } from 'react';
import BasicTab from './BasicTab';
import AdvancedTab from './AdvancedTab';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <div className="flex mb-4">
          <button
            className={`py-2 px-4 focus:outline-none ${activeTab === 'basic' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            onClick={() => handleTabChange('basic')}
          >
            Basic
          </button>
          <button
            className={`py-2 px-4 focus:outline-none ${activeTab === 'advanced' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            onClick={() => handleTabChange('advanced')}
          >
            Advanced
          </button>
        </div>

        {activeTab === 'basic' && <BasicTab />}
        {activeTab === 'advanced' && <AdvancedTab />}
      </div>
    </div>
  );
};

export default TabsComponent;
