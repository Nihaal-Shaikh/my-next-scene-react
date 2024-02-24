import React from 'react';

const AdvancedTab = () => {
  return (
    <div>
      <label htmlFor="advancedInput1">Advanced Input 1:</label>
      <input type="text" id="advancedInput1" className="border rounded-md p-2 mt-2 block w-full" />

      <label htmlFor="advancedInput2">Advanced Input 2:</label>
      <input type="text" id="advancedInput2" className="border rounded-md p-2 mt-2 block w-full" />

      <label htmlFor="advancedInput3">Advanced Input 3:</label>
      <input type="text" id="advancedInput3" className="border rounded-md p-2 mt-2 block w-full" />

      <label htmlFor="advancedInput4">Advanced Input 4:</label>
      <input type="text" id="advancedInput4" className="border rounded-md p-2 mt-2 block w-full" />
    </div>
  );
};

export default AdvancedTab;
